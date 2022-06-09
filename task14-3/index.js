const photoUrl = 'https://jsonplaceholder.typicode.com/photos'
const container = document.querySelector('#data-container')
function createPhoto(src, title) {
    const li = document.createElement('li')
    li.innerHTML = `<img class="photo-item__image" src="${src}">
   <h3 class="photo-item__title">
   ${title}
   </h3>`
    container.append(li)
}
function getFastestLoadedPhoto(ids = [1, 2, 3]) {
    const photosP = ids.map((id) => {
        return fetch(`${photoUrl}/${id}`)
    })
    Promise.race(photosP)
        .then((response) => {
            const respopnseToJson = response.json()
            if (respopnseToJson.ok === 'false') {
                throw new Error('error!!!!!!!!')
            } else {
                return respopnseToJson
            }


        })
        .then(photo => createPhoto(photo.url, photo.title))
        .catch(error => console.log(error))
}
getFastestLoadedPhoto([60, 12, 55])