import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const PersonToDeleteSlice = createSlice({
  name: 'peopleToDelete',
  initialState: initialState,
  reducers: {
    setPersonToDelete(state, action: PayloadAction<string>) {
      return action.payload;
    }
  }
});

export const { setPersonToDelete } = PersonToDeleteSlice.actions;

export default PersonToDeleteSlice.reducer;
