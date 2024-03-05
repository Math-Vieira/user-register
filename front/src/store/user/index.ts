import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  name: string;
  email: string;
};

let initialUserState: User = {
  name: '...',
  email: '...'
};

const UserSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      return action.payload;
    },
    removeUser(state) {
      return undefined;
    }
  }
});

export const { setUser, removeUser } = UserSlice.actions;

export default UserSlice.reducer;
