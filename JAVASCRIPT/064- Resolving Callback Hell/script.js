function makeRequest(method, url) {
	const xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	const promise = new Promise((resolve, reject) => {
		xhr.addEventListener("load", () => {
			resolve(xhr.response);
		});
		xhr.addEventListener("error", () => {
			reject('Request Rejected/Failed');
		});
	});
	xhr.open(method, url);
	xhr.send();
	return promise;
}

makeRequest("GET", "https://dummyjson.com/users")
	// .then((allUserData) => {
	// 	return makeRequest('GET',`https://dummyjson.com/posts/user/${allUserData.users[0].id}`)
	// })
	// .then((postData) => {
	// 	return makeRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
	// }).then((commentData)=>{
	// 	return makeRequest('GET',`https://dummyjson.com/users/${commentData.comments[0].user.id}`)
	// }).then((user)=>{
	// 	console.log(user)
	// })

	.then((allUserData) => makeRequest('GET',`https://dummyjson.com/posts/user/${allUserData.users[0].id}`))
	.then((postData) => makeRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`))
	.then((commentData)=> makeRequest('GET',`https://dummyjson.com/users/${commentData.comments[0].user.id}`))
	.then((user)=> console.log(user))
	.catch((error)=> console.log(error))
