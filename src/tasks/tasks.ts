import { Query, Store } from '@datorama/akita';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskState = { items: Task[] };

const INITIAL_TASK_STATE: TaskState = { items: [] };

export class TaskStore extends Store<TaskState> {
  constructor() {
    super(INITIAL_TASK_STATE, { name: 'tasks' });
  }
}

export class TaskQuery extends Query<TaskState> {
  items$ = this.select((state) => state.items);

  constructor(protected store: TaskStore) {
    super(store);
  }
}

export class TaskService {
  constructor(private store: TaskStore) {}

  createTask(title: string): string {
    const id = Date.now().toString(36);
    const task: Task = { id, title, completed: false };

    this.store.update((state) => {
      const items = state.items.concat([task]);
      return { ...state, items };
    });
    return id;
  }

  removeTask(id: string) {
    this.store.update((state) => {
      const items = state.items.filter((item) => item.id !== id);
      return { ...state, items };
    });
  }

  editTask(id: string, task: Partial<Omit<Task, 'id'>>) {
    this.store.update((state) => {
      const items = state.items.map((item) => {
        return item.id === id ? { ...item, ...task } : item;
      });
      return { ...state, items };
    });
  }
}
