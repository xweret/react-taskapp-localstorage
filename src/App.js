import "./App.css";
import { useState } from "react";


// react task app

// primero crear un input para que el usuario pueda ingresar un nuevo task
// segundo capturamos el valor del input y lo guardamos en un state
// tercero guardamos el valor del input en el localStorage
function App() {
  const [ newTaskName, setNewTaskName] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("Tasks", newTaskName)
    setNewTaskName("")
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a new Task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button>Save task</button>
      </form>
    </div>
  );
}

export default App;
