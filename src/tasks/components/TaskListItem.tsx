import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

export type TaskListItemProps = {
  hasDivider: boolean;
  title: string;
  completed: boolean;
  onComplete: (completed: boolean) => void;
  onRemove: () => void;
};

export function TaskListItem(props: TaskListItemProps) {
  const { hasDivider, title, completed, onComplete, onRemove } = props;

  function handleCheckboxChange() {
    onComplete(!completed);
  }

  return (
    <ListItem divider={hasDivider}>
      <Checkbox
        onClick={handleCheckboxChange}
        checked={completed}
        disableRipple
      />
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Task" onClick={onRemove}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
