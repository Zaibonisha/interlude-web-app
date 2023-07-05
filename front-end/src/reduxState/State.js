/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    activeSearch: false,
  },
  reducers: {
    activeSearch: (state) => {
      if (state.value === false) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  activeSearch,
} = searchSlice.actions;

export default searchSlice.reducer;
