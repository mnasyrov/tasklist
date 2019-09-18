import produce from 'immer';

export type Mutable<T> = { -readonly [P in keyof T]: T[P] };

export function stateProduce<T>(
  recipe: (state: Mutable<T>) => any,
): (state: T) => T {
  return produce((state) => {
    recipe(state);
  });
}
