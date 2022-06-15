import { startLoading, profileDetailsFetched } from "./slice";
import { appDoneLoading, appLoading } from "../appState/slice";
import axios from "axios";
import { apiUrl } from "../../config/constants";

export const fetchProfileById = (id) => async (dispatch, getState) => {
  try {
    console.log("id in the thunk", id);
    dispatch(startLoading());
    console.log("startLoading", startLoading);
    const response = await axios.get(`${apiUrl}/profiles/${id}`);
    console.log("detail", response);
    console.log("details fetched?", profileDetailsFetched(response.data));
    dispatch(profileDetailsFetched(response.data));

    dispatch(appDoneLoading());
  } catch (e) {
    console.log(e);
  }
};
