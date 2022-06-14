import axios from "axios";
import { showMessageWithTimeout } from "../appState/actions";
import { newProfileSlice, setPeopleAction } from "./slice";

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

export const newProfileCreated =
  ({ name, age, gender, imageUrl, about, language, location }) =>
  async (dispatch, getState) => {
    try {
      console.log(name, age, gender, imageUrl, about, language, location);
      const { token } = getState().user;
      // dispatch(appLoading());

      const response = await axios.post(
        "http://localhost:4000/profiles",
        {
          name,
          age,
          gender,
          imageUrl,
          about,
          language,
          location,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("new profile", response.data);
      dispatch(newProfileSlice(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Your Profile successfully added!",
          3000
        )
      );
    } catch (e) {
      console.log(e.message);
    }
  };
