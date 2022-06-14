import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peopleData: null,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    setPeopleAction: (state, action) => {
      state.peopleData = action.payload;
    },
    newProfileSlice: (state, action) => {
      state.peopleData.push(action.payload);
    },
  },
});

export const { setPeopleAction, newProfileSlice } = peopleSlice.actions;

export default peopleSlice.reducer;
