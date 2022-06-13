import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import peopleSlice from "./people/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    people: peopleSlice,
  },
});
