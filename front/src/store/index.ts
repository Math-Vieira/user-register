import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import selectedPersonSlice from './people';

const store = configureStore({
  reducer: {
    user: userSlice,
    selectedPerson: selectedPersonSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
