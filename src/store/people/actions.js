import axios from "axios";
import { setPeopleAction } from "./slice";

export const getPeople = () => async (dispatch, getState) => {
  // dispatch(setLoading(true));
  try {
    const response = await axios.get("http://localhost:4000/profiles");
    const profiles = response.data;
    console.log("AAAAA", profiles);
    dispatch(setPeopleAction(profiles));
    // dispatch(setLoading(false));
  } catch (error) {
    // dispatch(setLoading(false));
  }
};
