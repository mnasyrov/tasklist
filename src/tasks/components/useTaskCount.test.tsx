import { renderHook } from '@testing-library/react-hooks';
import { FunctionComponent } from 'react';
import { provider, toValue } from 'react-ioc';
import { TaskQuery, TaskStore } from '../tasks';
import { useTaskCount } from './useTaskCount';

describe('useTaskCount()', () => {
  it('should return a count of tasks', async () => {
    const store = new TaskStore();
    store.update({
      items: [{ id: '1', title: 't1', completed: false }],
    });
    const query = new TaskQuery(store);

    // @ts-ignore
    const Wrapper: FunctionComponent = (props) => props.children;
    const wrapper = provider([TaskQuery, toValue(query)])(Wrapper);

    const { result } = renderHook(() => useTaskCount(), { wrapper });

    expect(result.current).toBe(1);
  });
});
