import {RootState} from '../../component/store/store';
import {Task} from './Task.type';

export const selectListTasks = (state: RootState): Task[] =>
  state.taskSlice.listTask;

export const selectOpenModal = (state: RootState): boolean =>
  state.taskSlice.openModal;
