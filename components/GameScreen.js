import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Text, View } from "react-native";

export default function GameScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [song, setSong] = useState({});

  useEffect(() => {
    setLoading("Loading...");
    const fetchData = async () => {
      const resChart = await Axios.get(
        "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=9f284760366285909b638e2b9468eea5"
      );
      let tracks = resChart.data.message.body.track_list;
      const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
      const randomTrackId = randomTrack["track"]["track_id"];
      //   console.log("Random???", randomTrackId);
      const resSnippet = await Axios.get(
        `https://api.musixmatch.com/ws/1.1/track.snippet.get?track_id=${randomTrackId}&apikey=9f284760366285909b638e2b9468eea5`
      );
      let snippet = resSnippet.data.message.body.snippet.snippet_body;
      //   console.log("Snippet???", snippet);
      const songState = {
        // trackId: 2,
        artistName: randomTrack["track"]["artist_name"],
        lyricSnippet: snippet,
        songName: randomTrack["track"]["track_name"],
      };
      setSong(songState);
    };
    fetchData();
  }, []);

  return (
    <View
      onSwipeFromLeft={() => navigation.goBack()}
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        {song.lyricSnippet}
      </Text>
      <Text>{song.artistName}</Text>
      <Text>{song.songName}</Text>
    </View>
  );
}
