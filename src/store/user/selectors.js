export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user.profile;

export const selectFavorites = (state) => state.user?.profile.favorites;
