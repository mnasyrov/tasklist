import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { TaskAddLine, TaskList } from '../tasks/components';

export function App() {
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: 32 }}>
        <Typography variant={'h3'}>✅ TaskList</Typography>

        <div style={{ marginTop: 16 }}>
          <TaskAddLine />
        </div>

        <div style={{ marginTop: 16 }}>
          <TaskList />
        </div>
      </Container>
    </>
  );
}
