const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
console.log(typeof(temperatureInCelsius)) // тип данных string при строгом сравнении 0 !== '0'
if (temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}
// с помощью chrome devtools ставим breakpoint в этом месте и анализируем название переменных ниже, видем ошибку и исправляем
// const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32; // как я понимаю происходит не явное преобразование строки в число и все отрабатывает корректно

// alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по 
// Фаренгейту.`); // неправильно переданы переменную в в строку, следует заменить "%" на "$"
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по 
Фаренгейту.`);