import {sayHi} from './project-info.js'

let projOneBtn = document.querySelector('.project-one-btn');
let projTwoBtn = document.querySelector('.project-two-btn');
let projThreeBtn = document.querySelector('.project-three-btn');
let projFourBtn = document.querySelector('.project-four-btn');

let taskViewer = document.querySelector('.task-viewer');


projOneBtn.addEventListener('click', (event) =>{

    taskViewer.innerHTML += `INFORMACION AGREGADA LUEGO DE PRESIONAR EL BOTON ${event.target}`
    sayHi();

})
