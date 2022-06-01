const taskList = document.querySelector('.tasks-list')
const form = document.querySelector('.create-task-block')
const input = document.querySelector('[name="taskName"]')
const span = document.createElement('span')
span.className = 'error-message-block'
const tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript"
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока"
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока"
    }
]
function createTaskArr(arr) {
    const tasksArr = arr.map((item) => {
        const html = `
          <div class="task-item" data-task-id="${item.id}">
              <div class="task-item__main-container">
                  <div class="task-item__main-content">
                      <form class="checkbox-form">
                          <input class="checkbox-form__checkbox" type="checkbox" id="${item.id}">
                          <label for="${item.id}"></label>
                      </form>
                      <span class="task-item__text">
                          ${item.text}
                      </span>
                  </div>
                  <button class="task-item__delete-button default-button delete-button" data-delete-task-id="5">
                      Удалить
                  </button>
              </div>
          </div>
      `
        item = document.createElement('div')
        item.innerHTML = html
        return item
    })
    return tasksArr
}
const tasksArr = createTaskArr(tasks)
tasksArr.forEach((item) => {
    taskList.append(item)
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(tasksArr)
    const tasksText = tasks.map((item) => {
        item = item.text.toLowerCase()
        return item
    })
    if (input.value === '') {
        span.innerText = 'Название задачи не должно быть пустым'
        form.insertAdjacentElement('beforeend', span)
    } else if (tasksText.includes(input.value.toLowerCase())) {
        span.innerText = 'Задача с таким названием уже существует.'
        form.insertAdjacentElement('beforeend', span)
    }
    else {
        if (span) {
            span.remove()
        }
        const task = {
            id: String(new Date().getTime()),
            completed: false,
            text: input.value
        }
        tasks.unshift(task)
        const LocaltasksArr = createTaskArr(tasks)
        taskList.prepend(LocaltasksArr[0])
    }

})
