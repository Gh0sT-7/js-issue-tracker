// Event handler for the submitting of the form.
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

// Defining Variables and user input values for saveIssue above. e=event
function saveIssue(e) {
	var issueDesc = document.getElementById('issueDescInput').value;
	var issueSeverity = document.getElementById('issueSeverityInput').value;
	var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
	var issueId = chance.guid();
	var issueStatus = 'Open';

	// Issue object preparation
	var issue = {
		id: issueId,
		description: issueDesc,
		severity: issueSeverity,
		assignedTo: issueAssignedTo,
		status: issueStatus
	}

	// Check to see if there is something already in local storage, use get item method then retrieve issues; the object we would like to store all our issues in and check if it's null.
	if (localStorage.getItem('issues') == null) {
		var issues = []; // Initialise array.
		issues.push(issue); // Push issues into the above array our issue object from above with our properties and values.
		localStorage.setItem('issues', JSON.stringify(issues)); // Setting issues as the key and setting them to JSON format of our issues array. Takes our issues array object and converts it into JSON.
	} else {
		var issues = JSON.parse(localStorage.getItem('issues')); // If there is something in localstorage, we need to retrieve that.
		issues.push(issue); // Extend the array if there is already an issue present.
		localStorage.setItem('issues', JSON.stringify(issues));
	}

	document.getElementById('issueInputForm').reset();

	fetchIssues(); // Grab list again.

	e.preventDefault(); // Prevent form from submitting.
}

/*
** Mark as closed
*/
function setStatusClosed(id) {
	var issues = JSON.parse(localStorage.getItem('issues'));

	for (var i = 0; i < issues.length; i++) {
		if (issues[i].id == id) {
			issues[i].status = 'Closed';
		}
	}

	localStorage.setItem('issues', JSON.stringify(issues));

	fetchIssues();
}

/*
** Devare issue
*/
function deleteIssue(id) {
	var issues = JSON.parse(localStorage.getItem('issues'));

	for (var i = 0; i < issues.length; i++) {
		if (issues[i].id == id) {
			issues.splice(i, 1);
		}
	}

	localStorage.setItem('issues', JSON.stringify(issues));

	fetchIssues();
}

function fetchIssues() {
	var issues = JSON.parse(localStorage.getItem('issues'));
	var issuesListe = document.getElementById('issuesList');

	issuesList.innerHTML = '';

	for (var i = 0; i < issues.length; i++) {
		var id = issues[i].id;
		var desc = issues[i].description;
		var severity = issues[i].severity;
		var assignedTo = issues[i].assignedTo;
		var status = issues[i].status;

		issuesList.innerHTML += '<div class="card-body border mt-3 mb-3">'+
									'<h6>Issue ID: ' + id + '</h6>'+
									'<span class="badge bg-primary">' + status + '</span>'+
									'<h3>' + desc + '</h3>'+
									'<p><i class="lni lni-alarm-clock me-2"></i>' + severity + '</p>'+
									'<p><i class="lni lni-user me-2"></i>' + assignedTo + '</p>'+
									'<a href="#" onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning me-3 d-inline-block">Close</a>'+
									'<a href="#" onClick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
								'</div>'
	}
}







(function() {
	'use strict';
	
	if (localStorage.getItem('issues') == null) {
		
	} else {
		var issues = JSON.parse(localStorage.getItem('issues')); // If there is something in localstorage, we need to retrieve that.
		issues.push(issue); // Extend the array if there is already an issue present.
		localStorage.setItem('issues', JSON.stringify(issues));
	}

	var MAX_PREDICTIONS_COUNT = 5,

	var issues
		
		

	dictionary = [{
		word: issues.push(issue).localStorage.setItem('issues', JSON.stringify(issues)),
		weight: 100
	}, {
		word: 'abba',
		weight: 100
	}, {
		word: 'abcd',
		weight: 90
	}, {
		word: 'abfe',
		weight: 80
	}, {
		word: 'abbb',
		weight: 110
	}, {
		word: 'abcf',
		weight: 70
	}, {
		word: 'abcg',
		weight: 120
	}, {
		word: 'accg',
		weight: 120
	}, {
		word: 'adcg',
		weight: 120
	}],
	map = {},
	searchInputElement,
	predictionsElement;

	function attachListeners() {
		searchInputElement = document.getElementById('search-input');
		predictionsElement = document.getElementById('predictions');

		searchInputElement.addEventListener('keyup', function(event) {
			var value = event.target.value,
			predictions = predict(value) || [];
			predictionsElement.innerHTML = predictions.join('<br>');
		});
	};

	function buildMap() {
		var item,
			pathArray;

		for (var i = 0; i < dictionary.length; i++) {
			item = dictionary[i];
			pathArray = item.word.split('');

			addItemToMap(map, pathArray, item.weight, i);
		};
	};

	function addItemToMap(mapNode, pathArray, weight, index) {
		var letter;

		if (pathArray && pathArray.length) {
			letter = pathArray.shift();

		if (mapNode[letter]) {
			managePredictions(mapNode[letter].predictions, index);
		} else {
			mapNode[letter] = {
				predictions: [index],
				children: {}
			}
		}
			addItemToMap(mapNode[letter].children, pathArray, weight, index);
		}
	};

	function managePredictions(predictions, index) {
		var insertionIndex = getInsertionIndex(predictions, index);

		predictions.splice(insertionIndex, 0, index);
		if (predictions.length > MAX_PREDICTIONS_COUNT) {
			predictions = predictions.splice(-1, 1);
		}
	};

	function getInsertionIndex(array, index) {
		var low = 0,
		high = array.length,
		middle;

		while (low < high) {
			middle = low + high >>> 1;
			if (dictionary[array[middle]].weight > dictionary[index].weight) {
				low = middle + 1;
			} else {
				high = middle;
			}
		}
		return low;
	};

	function predict(searchTerm) {
		var predictionObject = findPredictions(searchTerm.split(''), map),
		result = [];

		if (predictionObject) {
			for (var i = 0; i < predictionObject.predictions.length; i++) {
				result.push(dictionary[predictionObject.predictions[i]].word);
			};
			return result;
		}
	};

	function findPredictions(searchTermArray, object) {
		var pathArray,
		key;

		if (searchTermArray && searchTermArray.length) {
			key = searchTermArray.shift();
			if (object[key] && object[key].children && searchTermArray && searchTermArray.length) {
				return findPredictions(searchTermArray, object[key].children);
			} else {
				return object[key];
			}
		}
	};

	buildMap();
	attachListeners();

})();

// filter 
// line
// predicitive typing search



	

    