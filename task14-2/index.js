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
function getAndCreateUsersByIds(ids = [1, 2, 3]) {
    createLoader()
    const users = ids.map(id => {
        return fetch(`${usersUrl}/${id}`)
    })
    Promise.all(users)
        .then(responses => {
            if (responses.includes(item => item.json().ok === 'false')) {
                throw new Error('error!!!!!!!!!!!!')
            }
            const usersP = responses.map(response => {
                return response.json()
            })
            return Promise.all(usersP)
        })
        .then(users => {
            const usersNames = users.map((user) => {
                return user.name
            })
            usersNames.forEach(name => {
                create(name)
            })
        })
        .catch((error) => console.error(error))
        .finally(createLoader)


}

getAndCreateUsersByIds()