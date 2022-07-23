import { useState, useEffect} from 'react'
import "./App.css";
import TaskCreator from './components/TaskCreator';
import {TasksTable} from './components/TasksTable';


// react task app

// primero crear un input para que el usuario pueda ingresar un nuevo task
// segundo capturamos el valor del input y lo guardamos en un state
// tercero guardamos el valor del input en el localStorage

function App() {
  
  const [tasksItems, setTasksItems] = useState([
  
  ]);


// hacemos que no se pueda agregar una tarea que ya este en el array

  function createNewTask(taskName){
    if (!tasksItems.find(task => task.name === taskName))
    setTasksItems([...tasksItems, {name: taskName, done: false}]);
} 

const toggleTask = (task) => {
  setTasksItems(
    tasksItems.map((t => (t.name === task.name) ? {...t, done: !t.done}: t))
  );
};



useEffect(() => {
  let data = localStorage.getItem("tasks")
  if (data) {
    setTasksItems(JSON.parse(data))
  }
}, [ ]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask}/>
      <TasksTable tasks={tasksItems} toggleTask = {toggleTask}/>
      <TasksTable tasks={tasksItems} toggleTask = {toggleTask}/>

    
    </div>
  );
}
export default App;
