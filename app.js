import {projectOneInfo, projectOneMethods} from './project-one.js'

let projOneBtn = document.querySelector('.project-one-btn');
let projTwoBtn = document.querySelector('.project-two-btn');
//let projThreeBtn = document.querySelector('.project-three-btn');
//let projFourBtn = document.querySelector('.project-four-btn');

let taskViewer = document.querySelector('.task-viewer');


projOneBtn.addEventListener('click', (event) =>{
    
    //aca habria que validar primero, siempre, que si ya hay un proyecto en pantala, que lo elimine.

    //var obj1 = projectOneInfo(task)

    taskViewer.innerHTML +=
`
 
<div class="project-one">
    
    <div class="task-info">
        <div class="id">ID: 01</div>
        <div class="due-date">Due Date: 10/04/2023</div>  
    </div>

    <div class="task-content">
        INFORMACION DE LA TAREA, DESDE EL HTML DE UNA TAREA

    </div>

</div>
`
    


})

/*
-   para los 4 primeros proyectos (reducir a 2 probablemente) añadir informacion a mano como para ver como seria. Para cuando cree un boton "crear nuevo projecto".

-habria que diseñar tambien como va a ser cada tarea, una vez elegido el project


-   tener un 'project-info' archivo para cada project. Quizás, si se agregan mas de 4 proyectos, hacer el primer paso en otra fn para automatizarlo, sino idear otra similaridad
-   al agregar el project al taskviewer, que renderice (desde otro archivo) la info del objeto y los botones adicionales como el de volver a main menu por ejemplo
 

*/