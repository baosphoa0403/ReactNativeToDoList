import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {taskSlice} from '../../app/TaskProvider/Task.slice';
import {userSlice} from '../../app/UserProvider/User.slice';

export const store = configureStore({
  reducer: {
    taskSlice: taskSlice.reducer,
    userSlice: userSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
