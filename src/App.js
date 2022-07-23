import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import { TasksTable } from "./components/TasksTable";
import { VisibilityControl } from "./components/VisibilityControl";
import {Container} from "./components/Container";

// react task app

// primero crear un input para que el usuario pueda ingresar un nuevo task
// segundo capturamos el valor del input y lo guardamos en un state
// tercero guardamos el valor del input en el localStorage

// se podria agregar alguna animacion para que el usuario sepa que esta cargando

function App() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  // hacemos que no se pueda agregar una tarea que ya este en el array

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName))
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
        <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TasksTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {showCompleted === true && (
          <TasksTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
        </Container>
    </main>
  );
}
export default App;
