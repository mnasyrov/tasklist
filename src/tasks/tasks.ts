import { Query, Store } from '@datorama/akita';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type TaskState = {
  items: Task[];
};

function createInitialState(): TaskState {
  return { items: [] };
}

export class TaskStore extends Store<TaskState> {
  constructor() {
    super(createInitialState(), { name: 'tasks' });
  }
}

export class TaskQuery extends Query<TaskState> {
  items$ = this.select((state) => state.items);

  constructor(protected store: TaskStore) {
    super(store);
  }
}
