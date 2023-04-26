import {Projects} from './projects-storage.js'

let newProjBtn = document.querySelector('.new-project-btn');
let viewProjsBtn = document.querySelector('.project-all-btn');

let asideBar = document.querySelector('aside');
let btnsContainer = document.querySelector('.project-btns-container');
let taskViewer = document.querySelector('.task-viewer');

let lastProjId = 2;

newProjBtn.addEventListener('click', (event) =>{

    let newBlankProjName = prompt('Enter a name for the new project');

    let newProjBtnElem = document.createElement('button');

    newProjBtnElem.classList.add('project-btn');

    newProjBtnElem.id = lastProjId + 1;

    newProjBtnElem.innerHTML = newBlankProjName;

    btnsContainer.appendChild(newProjBtnElem);

    aber();     
       
})

let aber = () =>{

    //esto queda aca dentro ya que asi cada vez que llamo a aber, se esta renovando el htmlcollection
    let projsBtns = document.querySelectorAll('.project-btn');
    
        projsBtns.forEach((btn) =>{    

            btn.addEventListener('click', (event) =>{  
        
                if(event.target.innerHTML == 'Proyecto 1'){        
                    
                    taskViewer.innerHTML = 
                        ` 
                        <div class="project-one">
                            
                            <div class="tasks-list">

                                <div class="task-one">

                                    <div class="task-info">
                                        <div class="id">ID:${Projects.ProjectOne.tasks.taskOne.taskId}</div>
                                        <input type="date" min="2023-01-01" max="2023-12-12" class="due-date" id="1">Due Date: a</input>
                                        <div class="proj-title"></div>  
                                    </div>
                                
                                    <textarea class="task-content">${Projects.ProjectOne.tasks.taskOne.taskInfo}</textarea>
                                </div>       

                            </div>

                        </div>

                        <button class="complete-task-btn">Mark as Complete</button>
                        <button class="delete-task-btn">Delete task</button>
                        
                        <button class="save-task-btn"> Save task</button>
                        <button class="close-task-btn"> close Task</button>
                
                        `;
                    
                    let saveTaskBtn = document.querySelector('.save-task-btn');
        
                    saveTaskBtn.addEventListener('click', (e) =>{
        
                        let taskNewDueDate = document.querySelector('.project-one  .task-info  .id');
                        let taskInfoInHtml = document.querySelector('.project-one .task-content');
        
                        Projects.ProjectOne.tasks.taskOne.taskInfo = taskInfoInHtml.value;
                                //el problema es que en el html, el textarea realmente no tiene ningun innerhtml
                        
        
                               
                        
                    })
                
                    let closeTaskBtn = document.querySelector('.close-task-btn');
        
                    closeTaskBtn.addEventListener('click', (e) =>{
        
                        taskViewer.innerHTML = '';
                    })
        
                }   else if (event.target.innerHTML == 'Proyecto 2') {
        
                   
                    taskViewer.innerHTML =

                        ` 
                        <div class="project-two">
                            
                            <div class="task-info">
                                <div class="id">ID:${ProjectTwo.projId}</div>
                                <input type="date" min="2023-01-01" max="2023-12-12" class="due-date" id="2">Due Date: ${ProjectTwo.projDueDate}</input>  
                            </div>
                    
                            <textarea class="task-content">${ProjectTwo.taskInfo}</textarea>
                    
                        </div>
                        <button class="complete-task-btn">Mark as Complete</button>
                        <button class="delete-task-btn">Delete task</button>
                        
                        <button class="save-task-btn"> Save task</button>
                        <button class="close-task-btn"> close Task</button>
                
                        `;
                    
                    let saveTaskBtn = document.querySelector('.save-task-btn');
        
                    saveTaskBtn.addEventListener('click', (e) =>{
        
                        let taskNewDueDate = document.querySelector('.project-two  .task-info  .id');
                        let taskInfoInHtml = document.querySelector('.project-two .task-content');
        
                        ProjectTwo.taskInfo = taskInfoInHtml.value;
                               
                        console.log('taskinfo propiedad ProjectOne: ' + ProjectTwo.taskInfo);
                        console.log('taskinfo elemento html: ' + taskInfoInHtml.taskInfoInHtml);
                        console.log('texto del textarea por Value: ' + taskInfoInHtml.value);
        
                               
                        
                    })
                
                    let closeTaskBtn = document.querySelector('.close-task-btn');
        
                    closeTaskBtn.addEventListener('click', (e) =>{
        
                        taskViewer.innerHTML = '';
                    })
        
        
                }   else if(event.target.innerHTML == 'caquita'){                    
        
                   
                    taskViewer.innerHTML =

                        ` 
                        <div class="project-two">
                            
                            <div class="task-info">
                                <div class="id">ID:${ProjectTwo.projId}</div>
                                <input type="date" min="2023-01-01" max="2023-12-12" class="due-date" id="2">Due Date: ${ProjectTwo.projDueDate}</input>  
                            </div>
                    
                            <textarea class="task-content">${ProjectTwo.taskInfo}</textarea>
                    
                        </div>
                        <button class="complete-task-btn">Mark as Complete</button>
                        <button class="delete-task-btn">Delete task</button>
                        
                        <button class="save-task-btn"> Save task</button>
                        <button class="close-task-btn"> close Task</button>
                
                        `;
                    
                    let saveTaskBtn = document.querySelector('.save-task-btn');
        
                    saveTaskBtn.addEventListener('click', (e) =>{
        
                        let taskNewDueDate = document.querySelector('.project-two  .task-info  .id');
                        let taskInfoInHtml = document.querySelector('.project-two .task-content');
        
                        ProjectTwo.taskInfo = taskInfoInHtml.value;
                               
                        console.log('taskinfo propiedad ProjectOne: ' + ProjectTwo.taskInfo);
                        console.log('taskinfo elemento html: ' + taskInfoInHtml.taskInfoInHtml);
                        console.log('texto del textarea por Value: ' + taskInfoInHtml.value);
        
                               
                        
                    })
                
                    let closeTaskBtn = document.querySelector('.close-task-btn');
        
                    closeTaskBtn.addEventListener('click', (e) =>{
        
                        taskViewer.innerHTML = '';
                    })
                
                
                } else console.log('no entra en el if de los proyectos');  
                
                       
               
                
        
               //hay que hacer que esto se ejecute 1 sola vez de alguna forma, ya que por cada boton se está haciendo.
        
                
            
        
                
            })
                
        
        })
    
    
}
aber();






