import React from 'react';

function CommentsReply(props) {
	const title = props.title || "comments reply";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 7.5H7.1c-3.2 0-5.9 2.6-5.9 5.9V49c0 2.2 1.2 4.2 3.1 5.2.9.5 1.8.7 2.8.7 1.1 0 2.3-.3 3.3-1l8.9-6h3.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-4.1c-.3 0-.7.1-1 .3l-9.3 6.2c-.7.5-1.6.5-2.4.1-.8-.4-1.3-1.2-1.3-2.1V13.3c0-1.3 1-2.3 2.3-2.3h49.8c1.3 0 2.4 1.1 2.4 2.4v32.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V13.3c-.1-3.2-2.8-5.8-6-5.8z"/>
		<path d="M53.4 44.5c-2.5-2.4-5.6-4.1-9.2-4.7V37c0-1.1-.6-2.1-1.6-2.6s-2.2-.4-3.1.4L29.1 43c-.7.6-1.1 1.4-1.1 2.3s.4 1.7 1.1 2.3L39.5 56c.5.4 1.2.6 1.8.6.4 0 .9-.1 1.3-.3 1-.5 1.6-1.5 1.6-2.6v-2c2.4.5 5.3 1.7 8.2 3.5.9.6 2.1.6 3 0 .9-.5 1.5-1.6 1.4-2.6 0-.8-.1-1.4-.2-1.8-.5-2.6-1.4-4.5-3.2-6.3zm-9.2 3.6c-.9-.1-1.8.1-2.5.7s-1.1 1.4-1.1 2.3v1.3l-8.9-7.1 8.9-7.1v1.9c0 1.5 1.1 2.7 2.6 3 3 .5 5.6 1.8 7.6 3.8 1.3 1.4 1.9 2.6 2.3 4.5v.2c-2.3-1.4-5.6-2.9-8.9-3.5z"/>
		<path d="M10.3 24.6c0 3.2 2.6 5.9 5.9 5.9 3.2 0 5.9-2.6 5.9-5.9 0-3.2-2.6-5.9-5.9-5.9-3.3 0-5.9 2.7-5.9 5.9zm8.2 0c0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4 1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4z"/>
		<path d="M37.9 24.6c0-3.2-2.6-5.9-5.9-5.9s-5.9 2.6-5.9 5.9c0 3.2 2.6 5.9 5.9 5.9s5.9-2.7 5.9-5.9zm-8.3 0c0-1.3 1.1-2.4 2.4-2.4 1.3 0 2.4 1.1 2.4 2.4S33.3 27 32 27c-1.3 0-2.4-1.1-2.4-2.4z"/>
		<path d="M47.8 30.5c3.2 0 5.9-2.6 5.9-5.9 0-3.2-2.6-5.9-5.9-5.9S42 21.4 42 24.6s2.6 5.9 5.8 5.9zm0-8.3c1.3 0 2.4 1.1 2.4 2.4S49.1 27 47.8 27s-2.4-1.1-2.4-2.4 1.1-2.4 2.4-2.4z"/>
	</g>
</svg>
	);
};

export default CommentsReply;