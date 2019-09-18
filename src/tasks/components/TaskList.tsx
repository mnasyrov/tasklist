import { List, Paper } from '@material-ui/core';
import React from 'react';
import { useObservable } from '../../utils';
import { useTaskQuery, useTaskService } from '../taskFacade';
import { TaskListItem } from './TaskListItem';

export function TaskList() {
  const taskService = useTaskService();
  const { items$ } = useTaskQuery();
  const items = useObservable(items$, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <Paper>
      <List>
        {items.map(({ id, title, completed }, index) => (
          <TaskListItem
            key={id}
            hasDivider={index < items.length - 1}
            title={title}
            completed={completed}
            onComplete={(completed) => taskService.editTask(id, { completed })}
            onRemove={() => taskService.removeTask(id)}
          />
        ))}
      </List>
    </Paper>
  );
}
