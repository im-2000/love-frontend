import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    toggleFavorites: (state, action) => {
      const idToAdd = action.payload;

      const convertFavorites = state.profile.fav.map((item) => item.id);

      const newFavs = convertFavorites.includes(idToAdd.id)
        ? state.profile.fav.filter((item) => item.id !== idToAdd.id)
        : [...state.profile.fav, idToAdd];

      state.profile.fav = newFavs;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, toggleFavorites } =
  userSlice.actions;

export default userSlice.reducer;
