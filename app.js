//global 
let projectsContainer = document.querySelector('.projects');

let projectList = document.querySelectorAll('.project');

let menuH3 = document.querySelector('.container-h3');

let allProjBtn = document.querySelector('.view-all-projects-btn');

allProjBtn.addEventListener('click', (event) =>{

    //desrenderizar el proj actual y renderizar todos, menu principal
    

})



let globalStorage = (state) =>{

    projectsCount = 1;
    tasksCount = 0;    
    
}

function renderProject (){

    let taskContainer = document.createElement('div');

    taskContainer.classList.add('task-container');

    let taskInfoTab = document.createElement('div');

    taskInfoTab.classList.add('task-infotab');

    let taskDescriptions = document.createElement('div')

    taskDescriptions.classList.add('task-description');


    //aca alguna fn que tome el args.. y de ahi busque en el objeto del proyecto en uestión, para mostrar la info de tareas
    taskDescriptions.innerHTML += ' INFO DE LA TAREA, DESCRIPCION, FECHA, ETC';


    taskContainer.appendChild(taskInfoTab);
    taskContainer.appendChild(taskDescriptions);

    return taskContainer;
    
}

//global
projectList.forEach((elem) =>{

    elem.addEventListener('click', (e) =>{

        //desrenderizando todo menos el boton para volver atras
        projectList.forEach((elem) => elem.remove());

        menuH3.remove();
        
        let selectedProject = e.currentTarget.id;
    
        //  renderizar las tareas asociadas al proyecto
           
        projectsContainer.appendChild(projectList[selectedProject]);
            //q se yo como PINGO hice que funcione pero funcionaaAAAAAAAAA


        // este if hace que no se sigan clonando las tasks en el mismo container solo llega una vez que el contenedor ya tiene algo projectList[selectedProject].appendChild(renderProject());  
        if(projectList[selectedProject].childElementCount == 0){      
              
            projectList[selectedProject].appendChild(renderProject());   

        }

           
        
        
    })

})
