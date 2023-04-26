/* 
aca podria estar tanto el almacenamiento de las notas y su info

    la nomeclatura de las ID será 1XXX, 1 siendo el proyecto y las X el numero de tarea.

*/

let Projects = 
{
    ProjectOne : 
    {
        tasks : 
        {
            taskOne :
            {   
                taskId: '1001',
                taskDueDate : '01/01/2024',
                taskTitle: 'Primer titulo',
                taskInfo: 'Primera task informacion'

            }
        }      

    },

    ProjectTwo :
    {
        tasks:
        {
            taskOne:
            {
                projId : 10002,
                projDueDate : '01/02/2024',
                projTitle: '',
                taskInfo : "Prueba info Task 2"     
            }
        }
    }

    
}


export {Projects}
