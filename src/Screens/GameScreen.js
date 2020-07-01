import React, { useEffect } from "react";
import { Text, View } from "react-native";
import randomcolor from "randomcolor";
import { fetchData } from "../store/song/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectData } from "../store/song/selectors";

export default function GameScreen({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const song = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  return (
    <View
      onSwipeFromLeft={() => navigation.goBack()}
      style={{
        backgroundColor: randomcolor(),
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      {loading ? <Text>Loading...</Text> : null}
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
