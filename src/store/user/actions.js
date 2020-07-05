import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from "../appState/actions";

export const PLAYER_ADD_SUCCESS = "PLAYER_ADD_SUCCESS";

const playerAddSuccess = (name) => {
  return {
    type: PLAYER_ADD_SUCCESS,
    payload: name,
  };
};

export const addPlayer = (players) => {
  return async (dispatch, getState) => {
    console.log("Whats dispatched:", players);
    dispatch(appLoading());
    const response = await axios.post(`${apiUrl}/game`,
    {
      players
    });
    console.log("Response:", response);
    dispatch(
      showMessageWithTimeout("success", false, response.data.message, 3000)
    );
    dispatch(playerAddSuccess(response.players));
    dispatch(appDoneLoading());
  };
};
