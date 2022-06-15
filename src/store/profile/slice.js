import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProfiles: [],
  profileDetails: null,
  loading: true,
  favorite: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },

    profileDetailsFetched: (state, action) => {
      state.profileDetails = action.payload;
      console.log("current favorites", JSON.stringify(state.profileDetails));
      state.loading = false;
    },
    newFavoritePostSuccess: (state, action) => {
      state.peopleData.push(action.payload);
    },
  },
});

export const { profileDetailsFetched, startLoading, newFavoritePostSuccess } =
  profileSlice.actions;

export default profileSlice.reducer;
