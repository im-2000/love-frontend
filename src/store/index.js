import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import profileReducer from "./profile/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    profile: profileReducer,
  },
});
