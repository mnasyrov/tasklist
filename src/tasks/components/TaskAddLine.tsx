import { Button, Grid, Paper, TextField } from '@material-ui/core';
import React, { useState, KeyboardEvent } from 'react';
import { useTaskService } from '../taskFacade';

export function TaskAddLine() {
  const [title, setTitle] = useState<string>('');
  const taskService = useTaskService();

  function submit() {
    if (title) {
      taskService.createTask(title);
      setTitle('');
    }
  }

  function handleKeyPress(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter') {
      submit();
    }
  }

  return (
    <Paper style={{ padding: 16 }}>
      <Grid container justify="space-between">
        <Grid xs={9} md={10} item>
          <TextField
            placeholder="Add task here"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            onKeyPress={handleKeyPress}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item style={{ marginRight: 16 }}>
          <Button
            fullWidth
            color={'primary'}
            variant={'outlined'}
            onClick={() => submit()}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
