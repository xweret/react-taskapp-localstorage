import { useState } from "react";
import "./App.css";
import TaskCreator from './components/TaskCreator';


// react task app

// primero crear un input para que el usuario pueda ingresar un nuevo task
// segundo capturamos el valor del input y lo guardamos en un state
// tercero guardamos el valor del input en el localStorage
function App() {
  
  const [tasksItems, setTasksItems] = useState([
    {name: "mi primer tarea", done: false},
    {name: "mi segunda tarea", done: false},
    {name: "mi tercera tarea", done: false},
  ]);


// hacemos que no se pueda agregar una tarea que ya este en el array

  function createNewTask(taskName){
    if (!tasksItems.find(task => task.name === taskName))
    setTasksItems([...tasksItems, {name: taskName, done: false}]);
} 

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>

      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>

        <tbody>
              {
              tasksItems.map(task => (
                <tr key={task.name}> 
                    <td>
                    {task.name}
                    </td>
                  </tr>
              ))  
            }
        </tbody>
      </table>

    
    </div>
  );
}

export default App;
