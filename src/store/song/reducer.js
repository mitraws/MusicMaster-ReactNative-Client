const initialState = {
  loading: true,
  currentSong: {},
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "song/startLoading": {
      return state;
    }
    case "song/dataFetched": {
      return {
        loading: false,
        currentSong: action.payload,
        history: [...state.history, action.payload]
      };
    }
    case "song/currentSongSwitched": {
      return state;
    }
    default: {
      return state;
    }
  }
};




