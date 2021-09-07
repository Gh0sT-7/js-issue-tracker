// Libraries
// const http = require('http')
// const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require("constants");
const port = 3000

// const jsdom = require('./jsdom/scripts/generate-js-globals.js')
// const { JSDOM } = jsdom

app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

// const array1 = [1, 4, 9, 16];

// Lambda expression - x => x * 2)

// const map1 = array1.map(x => x * 2);
// const map1 = array1.map((x) => {
//   return x * 2;
// })
// const map1 = array1.map(function(x) {
//   return x * 2;
// })

// const options = {
//   onChange: () => {},
//   onDestroy: () => {},
//   onReset: () => {}
// };

// options.onChange();








// const scope = {
//   123: true
// };

// function test() {
//   this.blah = 'abc123';
//   // console.log('this', this);
// }

// function abc() {
//   this.test = 'blahblah';
// }

// // test();
// test.bind(scope)();
// abc.bind(scope)();

// console.log('scope', scope);

// function test() {
  
// }
// console.log(test);



// $.proxy(test(), {

// })

// // Server Config
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile('index.html', (error, data) => {
//         if (error) {
//             res.writeHead(404)
//             res.write('Error: File Note Found')
//         } else {
//             res.write(data)
//         }
//         res.end()
//     })
// })

// server.listen(port, (error) => {
//     if(error) {
//         console.log('Something went wrong', error)
//     } else {
//         console.log('Server is listening on port ' + port)
//     }
// })