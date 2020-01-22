import { Query, Store } from '@jetstate/core';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskState = { items: Task[] };

export class TaskStore extends Store<TaskState> {
  constructor() {
    super({ items: [] });
  }
}

export class TaskQuery extends Query<TaskState> {
  items = this.project((state) => state.items);
}

export class TaskService {
  constructor(private store: TaskStore) {}

  createTask(title: string): string {
    const id = Date.now().toString(36);
    const task: Task = { id, title, completed: false };

    this.store.update((state) => {
      const items = state.items.concat([task]);
      return { items };
    });
    return id;
  }

  removeTask(id: string) {
    this.store.update((state) => {
      const items = state.items.filter((item) => item.id !== id);
      return { items };
    });
  }

  editTask(id: string, task: Partial<Omit<Task, 'id'>>) {
    this.store.update((state) => {
      const items = state.items.map((item) => {
        return item.id === id ? { ...item, ...task } : item;
      });
      return { items };
    });
  }
}
