


class CustomSelect {
    #options
    #id
    #currentSelectedOption
    constructor(id, options) {
        this.#options = options
        this.#id = id
    }
    get selectedValue() {
        return this.#currentSelectedOption
    }
    render(container) {
        const list = document.createElement('div')
        list.className = `select-dropdown select-dropdown--${this.#id}`
        list.innerHTML = `<button class="select-dropdown__button">
        <span class="select-dropdown select-dropdown--${this.#id}">Выберите элемент</span>
        </button>
        <ul class="select-dropdown__list select-dropdown__list--${this.#id} ">
        <li class="select-dropdown__list-item" data-value="1">
        JavaScript
        </li>
        <li class="select-dropdown__list-item" data-value="2">
        NodeJS
        </li>
        <li class="select-dropdown__list-item" data-value="3">
        ReactJS
        </li>
        <li class="select-dropdown__list-item" data-value="4">
        HTML
        </li>
        <li class="select-dropdown__list-item" data-value="5">
        CSS
        </li>
        </ul>`
        container.append(list)
        const button = document.querySelector('.select-dropdown__button')
        const ul = list.querySelector('ul')
        button.addEventListener('click', () => {
            ul.classList.toggle('active')
        })
        ul.addEventListener('click', (event) => {
            if (event.target.classList.contains('select-dropdown__list-item')) {
                document.querySelectorAll('li').forEach((li) => li.classList.remove('selected'))
                event.target.classList.add('selected')
                console.log(typeof (event.target.dataset.value))
                this.#currentSelectedOption = this.#options.find((option) => option.value === Number(event.target.dataset.value))
                document.querySelector('span').innerText = `${this.selectedValue.text}`
                ul.classList.remove('active')
            }
        })
    }
}
const options = [
    { value: 1, text: "JavaScript" },
    { value: 2, text: "NodeJS" },
    { value: 3, text: "ReactJS" },
    { value: 4, text: "HTML" },
    { value: 5, text: "CSS" }
]
const customSelect = new CustomSelect("123", options)
const mainContainer = document.querySelector("#container")
customSelect.render(mainContainer)
