import {RootState} from '../../component/store/store';

export const selectMessageLoginUser = (state: RootState): string =>
  state.userSlice.message;
export const selectStatusLoginUser = (
  state: RootState,
): 'success' | 'loading' | 'failed' => state.userSlice.status;

export const selectIsLogin = (state: RootState): boolean =>
  state.userSlice.isLogin;
export const selectIsSignOut = (state: RootState): boolean =>
  state.userSlice.isSignOut;
