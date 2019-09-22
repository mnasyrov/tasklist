import { provider, toFactory, useInstance } from 'react-ioc';
import { TaskQuery, TaskService, TaskStore } from './tasks';

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
