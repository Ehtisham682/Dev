function makeRequest(method,url, callback){
	const xhr = new XMLHttpRequest();
	xhr.responseType = "json";
	xhr.addEventListener("load", () => {
		callback(xhr.response);
	});
	xhr.open(method,url);
	xhr.send();
}

makeRequest("GET","https://dummyjson.com/users",(userData)=>{
	makeRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`,(postData)=>{
		makeRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`,(commentData)=>{
			makeRequest('GET',`https://dummyjson.com/users/${commentData.comments[0].user.id}`,(user)=>{
				console.log(user)
			})
		})
	})
})

// 