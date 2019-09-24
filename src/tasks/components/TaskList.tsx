import React from 'react';
import { useObservable } from '../../utils';
import { useTaskQuery, useTaskService } from '../taskFacade';

export function TaskList() {
  const taskService = useTaskService();
  const { items$ } = useTaskQuery();
  const items = useObservable(items$, []);

  if (items.length === 0) {
    return null;
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
