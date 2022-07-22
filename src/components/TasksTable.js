export const TasksTable = ({tasks}) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>

        <tbody>
            {
            tasks.map(task => (
                <tr key={task.name}> 
                    <td>
                    {task.name}
                    </td>
                </tr>
              ))  
            }
        </tbody>
      </table>
    );
}