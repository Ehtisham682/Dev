//GET method
// fetch("https://dummyjson.com/products/add",{method:'POST'})
// 	.then((a) => {
// 		// don't forget the give return value , as it will give undefined in next promise if its not given
// 		return a.json();
// 	})
// 	.then((res) => console.log(res))
//     .catch((err)=> console.log(err))

//POST method
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category:'stationary'
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log)
// .catch((err)=>{
//     console.log(err)
// })


fetch("https://dummyjson.com/users")
	.then(allUserData => allUserData.json())
    .then(usersData=> {
        return fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`)})
    .then(postsData=> postsData.json())
    .then(postData =>{
        return fetch(`https://dummyjson.com/comments/post/${postData.posts[0].id}`)})
    .then(commentsData => commentsData.json())
    .then(comment => {
        return fetch(`https://dummyjson.com/users/${comment.comments[0].user.id}`)})
    .then(usersComment => usersComment.json()) 
    .then(user=>console.log(user))