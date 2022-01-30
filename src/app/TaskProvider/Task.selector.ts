import {RootState} from '../../component/store/store';
import {ITask} from '../../models/Task';

export const selectListCount = (state: RootState): ITask[] =>
  state.taskSlice.listTask;
