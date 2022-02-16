import {RootState} from '../../component/store/store';

export const selectMessageLoginUser = (state: RootState): string =>
  state.userSlice.message;
export const selectStatusLoginUser = (
  state: RootState,
): 'success' | 'loading' | 'failed' => state.userSlice.status;
