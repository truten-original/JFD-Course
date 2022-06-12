const createPost = (id, title, text) => {
    const element = document.createElement('div')
    element.className = 'post'
    element.setAttribute('id', `post${id}`)
    element.innerHTML = `<h1 class="post__title">${title}</h1>
    <p class="post__text">${text}</p>
    <b class="post__comments-text">Комментарии</b>
    <div class="post__comments">
      <div class="post-comment">
      </div>
    </div>`
    document.querySelector('body').append(element)
}
const createComment = (author, commentText) => {
    const element = document.createElement('div')
    element.innerHTML = `<span class="post-comment__author">${author}</span>
    <span class="post-comment__text">
    ${commentText}
    </span>`
    document.querySelector('.post-comment').append(element)
}
function renderPost(postId = 1) {
    const curentPost = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    curentPost.then(response => response.json())
        .then(post => {
            createPost(post.id, post.title, post.body)
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(response => response.json())
                .then(comments => comments.forEach(comment => createComment(comment.email, comment.body)))
                .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
}
renderPost(1)