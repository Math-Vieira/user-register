import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user';
import personToDeleteSlice from './people';

const store = configureStore({
  reducer: {
    user: userSlice,
    personToDelete: personToDeleteSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
