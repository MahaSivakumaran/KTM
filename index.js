let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
let displaying = document.getElementById('displaying')
let container = document.getElementById('container');
let path = document.getElementById('path')

first.addEventListener('click',(img)=>{
    displaying.src="./img/1.png";
    container.style.background="orangered";
    path.style.background='green';
})
second.addEventListener('click',(img)=>{
    displaying.src="./img/2.png"
    container.style.background="gray"
    path.style.background='white'

})

third.addEventListener('click',(img)=>{
    displaying.src="./img/3.png"
    container.style.background="white"
    path.style.background='teal'


})
