import { TaskQuery, TaskService, TaskStore } from './tasks';

describe('TaskService', () => {
  describe('createTask()', () => {
    it('should add a task to the store', () => {
      const store = new TaskStore();
      const query = new TaskQuery(store);
      const service = new TaskService(store);

      const state1 = query.getValue();
      expect(state1.items).toEqual([]);

      service.createTask('item1');
      const state2 = query.getValue();
      const item1 = state2.items[0];
      expect(item1.id).toBeDefined();
      expect(item1.title).toBe('item1');
      expect(item1.completed).toBe(false);

      expect(state1.items).not.toBe(state2.items);
    });
  });

  describe('editTask()', () => {
    it('should edit a task in the store', () => {
      const store = new TaskStore();
      const query = new TaskQuery(store);
      const service = new TaskService(store);

      service.createTask('item1');
      const state1 = query.getValue();
      const item = state1.items[0];
      expect(item.title).toBe('item1');

      service.editTask(item.id, { title: 'item1-edited', completed: true });
      const modifiedState = query.getValue();
      const modifiedItem = modifiedState.items[0];
      expect(modifiedItem).toEqual({
        id: item.id,
        title: 'item1-edited',
        done: true,
      });

      expect(state1.items).not.toBe(modifiedState.items);
      expect(item).not.toBe(modifiedItem);
    });
  });

  describe('removeTask()', () => {
    it('should remove a task from the store', () => {
      const store = new TaskStore();
      const query = new TaskQuery(store);
      const service = new TaskService(store);

      const taskId = service.createTask('item1');
      expect(query.getValue().items.length).toBe(1);

      service.removeTask(taskId);
      expect(query.getValue().items.length).toBe(0);
    });
  });
});
