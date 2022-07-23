import {TaskRow} from './TaskRow';
export const TasksTable = ({tasks, toggleTask}) => {
    
    const taskTableRows = (doneValue) => {

        
    return (
        tasks
        .filter(task => task.done === doneValue)
        .map(task => (
            <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
        ))
    )
    }

    return (
        <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>

        <tbody>
            {
                taskTableRows(false)
            }
        </tbody>
      </table>
    );
}