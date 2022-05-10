let health = prompt('Введите число параметра "здоровье" для персонажа')
console.log(health)
if ( health <= 0 || !health) {
  
   alert('Параметр "здоровье" должен быть больше нуля!')
} else {
    // console.log(health) // Health не определенно, так как написано с ошибкой 
//    alert(`Параметр "здоровье" равен ${Health}`);
   alert(`Параметр "здоровье" равен ${health}`);
} 