const renderAlbums = async () => {
    showLoader()
    const albumsUrl = 'https://jsonplaceholder.typicode.com/albums'
    const ul = document.createElement('ul')
    const body = document.querySelector('body')
    ul.style.maxWidth = '800px'
    ul.style.margin = '0 auto'
    body.append(ul)
    ul.className = 'data-container'
    try {
        const albumsP = await fetch(albumsUrl)
        const responses = await albumsP.json()
        responses.forEach(album => {
            createElement(ul, album.title)
        })

    }
    catch (error) {
        ul.style.color = 'red'
        ul.style.fontSize = '150px'
        console.log(error)
        ul.innerText = `Произошла ошибка в получении данных об альбомах...`
    }
    finally {
        showLoader()
    }
}
renderAlbums()
function createElement(container, text) {
    const li = document.createElement('li')
    li.innerText = text
    li.style.fontSize = '50px'
    container.append(li)
}
function showLoader() {
    const span = document.querySelector('span')
    span.style.fontSize = '100px'
    span.style.color = 'violet'
    if (span.hasAttribute('hidden')) {
        span.removeAttribute('hidden')
    } else {
        span.setAttribute('hidden', 'hidden')
    }
}