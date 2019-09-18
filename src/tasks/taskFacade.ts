import { provider, toFactory, useInstance } from 'react-ioc';
import { TaskQuery, TaskStore } from './tasks';
import { TaskService } from './taskService';

export function useTaskQuery(): TaskQuery {
  return useInstance<TaskQuery>(TaskQuery);
}

export function useTaskService(): TaskService {
  return useInstance(TaskService);
}

export const withTasksProvider = provider(
  TaskStore,
  [TaskQuery, toFactory([TaskStore], (store) => new TaskQuery(store))],
  [TaskService, toFactory([TaskStore], (store) => new TaskService(store))],
);
