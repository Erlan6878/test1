// ! Методы для работы с событиями
// ? Метод addEventListener принемает в себя 2 оргумента. первое это (событие что должно произойти), и функция которая должна отработать.

let bd = document.querySelector("body");
let btn = document.querySelector("#button");
let inp = document.querySelector("#inp")
let img = document.querySelector("#image");


btn.addEventListener("click", changeColor);
function changeColor(){
    image.style.width = "250px"
}

// ? removeEventListiner
// элемент.removeEventListiner(вид события, функция)
// todo В качестве атрибута передается сама функция

// ? mouseover / mouseout - когда мыщь наводится на элемент и покидает элемент

img.addEventListener("mouseover", () => {
  btn.style.color = "red"
});

inp.addEventListener("mouseover", (even)=>{
    console.log(even.target.value);
})

// ? mousedown / mouseup - когда нажали и отжали кнопку мыши на элементе
img.addEventListener("mousedown", () =>{
    img.style.width = "500px"
    img.style.height = "300px"
})

// ? mousemove - при движении мыши

img.addEventListener("mousemove", (even) =>{
    console.log(even);
})

// Работая обработчиками событий важно знать что обработчики в нашем примере addEventListener? дают доступ такому обьекту событий event. данный обьект нужно словить в качастве параметра в передаваемой функци  (т.к это всего лишь параментр название его как угодно ) Обьект событий дает нам доступ к атрибутам и свойствам определенного события, target, clientX, clienY, и многие другие


// ? focus пользователь фокусируется на элементе на пример нажимает на input 

inp.addEventListener("input", (even)=>{
    console.log(even.target.value);
})