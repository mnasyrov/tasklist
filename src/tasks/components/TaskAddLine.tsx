import React, { KeyboardEvent, useState } from 'react';
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <input
        style={{ width: '100%', marginRight: '16px', fontSize: 'large' }}
        type="text"
        placeholder="Add task here"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button color={'primary'} onClick={() => submit()}>
        Add
      </button>
    </div>
  );
}
