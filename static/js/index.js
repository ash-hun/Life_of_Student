// index.js
const light = document.querySelector('.light');
const container = document.querySelector('.container');

light.onclick = function(){
    container.classList.toggle('darkmode')
}