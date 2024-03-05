import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { personToDelete: '', personToEdit: '' };

const SelectedPersonSlice = createSlice({
  name: 'selectedPerson',
  initialState: initialState,
  reducers: {
    setPersonToDelete(state, action: PayloadAction<string>) {
      return { ...state, personToDelete: action.payload };
    },
    setPersonToEdit(state, action: PayloadAction<string>) {
      return { ...state, personToEdit: action.payload };
    }
  }
});

export const { setPersonToDelete, setPersonToEdit } =
  SelectedPersonSlice.actions;

export default SelectedPersonSlice.reducer;
