import { flow } from 'lodash-es';
import { withTasksProvider } from '../tasks';

export const withAppProvider = flow([withTasksProvider]);
