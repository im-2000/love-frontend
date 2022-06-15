import { createSlice } from "@reduxjs/toolkit";

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
      // console.log("id", idToAdd.profileId);
      // console.log("current favorites", JSON.stringify(state.profile));
      // console.log("idtoadd", JSON.stringify(idToAdd));
      const newFavs = state.profile?.favorites?.some(
        (fav) => fav.id === idToAdd.id
      )
        ? state.profile.favorites.filter(
            (profileId) => profileId.id !== idToAdd.id
          )
        : [...state.profile.favorites, idToAdd];

      console.log("new favorites", newFavs);
      state.profile.favorites = newFavs;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, toggleFavorites } =
  userSlice.actions;

export default userSlice.reducer;
