// first way
const body = document.querySelector('body')
// body.innerHTML = `<form class="create-user-form">
// <label>
//     Имя
//     <input type="text" name="userName" placeholder="Введите ваше имя">
// </label>
// <label>
//     Пароль
//     <input type="password" name="password" placeholder="Придумайте Пароль">
// </label>
// <button type="submit">
//     Подтвердить
// </button>
// </form>`
//second way
const form = document.createElement('form')
form.className = 'create-user-form'
const label = document.createElement('label')
label.textContent = 'Имя'
const secondLabel = document.createElement('label')
secondLabel.textContent = 'Пароль'
const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('name', 'userName')
input.setAttribute('placeholder', 'Введите ваше имя')
const secondInput = document.createElement('input')
secondInput.setAttribute('type', 'password')
secondInput.setAttribute('name', 'password')
secondInput.setAttribute('placeholder', 'Придумайте Пароль')
const button = document.createElement('button')
button.textContent = 'Подтвердить'
button.setAttribute('type', 'submit')
label.append(input)
secondLabel.append(secondInput)
form.append(label)
form.append(secondLabel)
form.append(button)
body.insertAdjacentElement("afterbegin", form)