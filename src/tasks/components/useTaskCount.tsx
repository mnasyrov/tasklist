import { useTaskQuery } from '../taskFacade';
import { useProjection } from '@jetstate/react';

export function useTaskCount(): number {
  const query = useTaskQuery();
  const items = useProjection(query.items);
  return items.length;
}
