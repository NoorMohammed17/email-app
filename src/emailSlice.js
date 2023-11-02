// emailSlice.js
import { createSlice } from '@reduxjs/toolkit';

const emailSlice = createSlice({
  name: 'emails',
  initialState: {
    list: [], // Stores the list of emails
    selectedEmail: null, // Stores the selected email
  },
  reducers: {
    setEmails: (state, action) => {
      state.list = action.payload;
    },
    selectEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
    markAsFavorite: (state, action) => {
      // Implement logic to mark an email as a favorite
      // You can update the email in the state here.
    },
  },
});

export const { setEmails, selectEmail, markAsFavorite } = emailSlice.actions;
export default emailSlice.reducer;
