const usersUrl = 'https://jsonplaceholder.typicode.com/users'
const span = document.createElement('span')
span.innerText = '...loading'
function createLoader() {
    document.querySelector('body').insertAdjacentElement('afterbegin', span)
    span.classList.toggle('active')
}
function create(name) {
    const element = document.createElement('li')
    element.innerHTML = `<a href="#">${name}</a>`
    document.querySelector('ol').append(element)
}
const getListOfUsers = (url) => {
    createLoader()
    const p = fetch(url)
    p
        .then(response => {
            if (!response.ok) {
                throw new Error('error!!!')
            }
            return response.json()
        })
        .then(users => {
            users.forEach(user => {
                create(user.name)
            })
        })
        .catch(error => console.error(error))
        .finally(() => createLoader())
}
getListOfUsers(usersUrl)