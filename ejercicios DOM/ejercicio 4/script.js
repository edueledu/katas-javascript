//1.1
const btnToClick = document.getElementById('btnToClick');

btnToClick.addEventListener('click', (event) => {
  console.log(event);
});

//1.2
const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

//1.3
const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', (event) => {
  console.log(event.target.value);
});