import React from 'react';
import { useTaskService } from '../taskFacade';
import { Task } from '../tasks';

export function TaskList({ items }: { items: Task[] }) {
  const taskService = useTaskService();

  if (items.length === 0) {
    return <span>Empty list</span>;
  }

  return (
    <table>
      {items.map(({ id, title, completed }) => (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              checked={completed}
              onClick={() =>
                taskService.editTask(id, { completed: !completed })
              }
            />
          </td>
          <td style={{ width: '100%' }}>{title}</td>
          <td>
            <button onClick={() => taskService.removeTask(id)}>Remove</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
