import { guid } from '@datorama/akita';
import { stateProduce } from '../utils';
import { Task, TaskStore } from './tasks';

export class TaskService {
  constructor(private store: TaskStore) {}

  createTask(title: string): string {
    const id = guid();
    const task: Task = { id, title, completed: false };
    this.store.update(
      stateProduce((state) => {
        state.items.push(task);
      }),
    );
    return id;
  }

  removeTask(id: string) {
    this.store.update(
      stateProduce((state) => {
        state.items = state.items.filter((item) => item.id !== id);
      }),
    );
  }

  editTask(id: string, task: Partial<Omit<Task, 'id'>>) {
    this.store.update(
      stateProduce((state) => {
        state.items = state.items.map((item) => {
          return item.id === id ? { ...item, ...task } : item;
        });
      }),
    );
  }
}
