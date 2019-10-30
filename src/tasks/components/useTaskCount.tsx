import { useTaskQuery } from '../taskFacade';
import { useObservable } from '../../utils';

export function useTaskCount(): number {
  const { items$ } = useTaskQuery();
  const items = useObservable(items$, []);
  return items.length;
}
