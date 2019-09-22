import { Container, Typography } from '@material-ui/core';
import React from 'react';
import { TaskAddLine, TaskList } from '../tasks/components';

const APP_TITLE = '✅ TaskList';

export function App() {
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: 32 }}>
        <Typography variant={'h3'}>{APP_TITLE}</Typography>

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
