import React from 'react';
import { useTaskQuery } from '../tasks';
import { TaskAddLine, TaskList } from '../tasks/components';
import { useTaskCount } from '../tasks/components/useTaskCount';
import { useObservable } from '../utils';

const APP_TITLE = '✅ TaskList';

export function App() {
  const { items$ } = useTaskQuery();
  const items = useObservable(items$, []);
  const count = useTaskCount();

  return (
    <>
      <h1>{APP_TITLE}</h1>

      <div className="section">
        <TaskAddLine />
      </div>

      <div className="section">
        <h2>All tasks ({count})</h2>
        <TaskList items={items} />
      </div>
    </>
  );
}
