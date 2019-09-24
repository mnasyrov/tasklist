import React from 'react';
import { TaskAddLine, TaskList } from '../tasks/components';

const APP_TITLE = '✅ TaskList';

export function App() {
  return (
    <>
      <h1>{APP_TITLE}</h1>

      <div style={{ width: 300 }}>
        <p>
          <TaskAddLine />
        </p>

        <p>
          <TaskList />
        </p>
      </div>
    </>
  );
}
