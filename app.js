import {ProjectOne} from './projects-storage.js'

let projsBtns = document.querySelectorAll('.project-btn');
let newProjBtn = document.querySelector('.new-project-btn');
let viewProjsBtn = document.querySelector('.project-all-btn');


let asideBar = document.querySelector('aside');
let taskViewer = document.querySelector('.task-viewer');

let globalProjCounter = 2;


projsBtns.forEach((btn) =>{    

    btn.addEventListener('click', (event) =>{       
    
        taskViewer.innerHTML +=
    ` 
        <div class="project-one">
            
            <div class="task-info">
                <div class="id">ID: ${ProjectOne.projId}</div>
                <div class="due-date">Due Date: ${ProjectOne.projDueDate}</div>  
            </div>
    
            <textarea class="task-content"> ${ProjectOne.taskInfo}
            </textarea>
    
        </div>
        <button class="complete-task-btn">Mark as Complete</button>
        <button class="delete-task-btn">Delete task</button>
        
        <button class="save-task-btn"> Save task</button>
        <button class="close-task-btn"> close Task</button>

    `     

        if(firstEach){
            let saveTaskBtn = document.querySelector('.save-task-btn');

            saveTaskBtn.addEventListener('click', (e) =>{

                let taskNewDueDate = document.querySelector('.project-one  .task-info  .id');
                let taskInfo = document.querySelector('.project-one .task-content');

                console.log(taskNewDueDate.innerHTML);
                console.log(taskInfo.value);       

                

                
                
                console.log(ProjectOne.projId + ' ' + ProjectOne.taskInfo);           
                
                
            })
        }

        
    

        
    })
        

})



newProjBtn.addEventListener('click', (e) =>{

    //ver bien esto ,pero cada task nueva tiene que generar un nuevo numero de ID al ser creada

    console.log('prueba new proj btn');  
       
})

