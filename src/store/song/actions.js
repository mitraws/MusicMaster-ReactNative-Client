import Axios from "axios";

export function startLoading() {
  return {
    type: "song/startLoading",
  };
}

export async function fetchData(dispatch, getState) {
  dispatch(startLoading());
  const responseChart = await Axios.get(
    "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=9f284760366285909b638e2b9468eea5"
  );
  let tracks = responseChart.data.message.body.track_list;
  const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
  const randomTrackId = randomTrack["track"]["track_id"];
  //   console.log("Random???", randomTrackId);
  const responseSnippet = await Axios.get(
    `https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${randomTrackId}&apikey=9f284760366285909b638e2b9468eea5`
  );
  let snippet = responseSnippet.data.message.body.snippet.snippet_body;
  //   console.log("Snippet???", snippet);
  const songOrder = getState().song.history.length
  const songState = {
    // trackId: 2, (avoid repetitive songs)
    artistName: randomTrack["track"]["artist_name"],
    lyricSnippet: snippet,
    songName: randomTrack["track"]["track_name"],
    songOrder: songOrder
  };
  dispatch(dataFetched(songState));
  // console.log("what data is dispatched?", response.data)
}

export function dataFetched(data) {
  return {
    type: "song/dataFetched",
    payload: data,
  };
}

export function swithCurrentSong(order) {
    return {
      type: "song/currentSongSwitched",
      payload: order,
    };
  }
