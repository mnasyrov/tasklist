import { renderHook } from '@testing-library/react-hooks';
import { FunctionComponent } from 'react';
import { provider, toValue } from 'react-ioc';
import { TaskQuery, TaskStore } from '../tasks';
import { useTaskCount } from './useTaskCount';

// @ts-ignore
const CONTAINER: FunctionComponent = (props) => props.children;

describe('useTaskCount()', () => {
  it('should return a count of tasks', () => {
    const store = new TaskStore();
    store.update({ items: [{ id: '1', title: 't1', completed: false }] });
    const query = new TaskQuery(store);

    const wrapper = provider([TaskQuery, toValue(query)])(CONTAINER);

    const { result } = renderHook(() => useTaskCount(), { wrapper });

    expect(result.current).toBe(1);
  });
});
