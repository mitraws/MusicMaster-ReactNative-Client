import { PLAYER_ADD_SUCCESS } from "./actions";

const initialState = {
  players: [],
  // game: null,
  // score: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_ADD_SUCCESS:
      return {
        ...state,
        players: [...state.players, action.payload],
      };
    default:
      return state;
  }
};
