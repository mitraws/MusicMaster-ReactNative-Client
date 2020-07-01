import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import randomcolor from "randomcolor";
import { fetchData } from "../store/song/actions";
import { useSelector, useDispatch } from "react-redux";
import { selectLoading, selectData } from "../store/song/selectors";
import Spinner from "../../assets/spinner/Spinner";
import Swiper from "react-native-deck-swiper";

const colors = {
  white: "#ffffff",
  black: "#000000",
};

export default function GameScreen({ navigation }) {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const song = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  const Card = ({ card }) => {
    return (
      <View style={styles.card}>
        {loading ? <Spinner /> : null}
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 50,
            textAlign: "center",
          }}
        >
          {song.lyricSnippet}
        </Text>
        <Text
          style={{
            marginTop: 60,
          }}
        >
          {song.artistName}
        </Text>
        <Text>{song.songName}</Text>
      </View>
    );
  };


  return (
    <View style={styles.Container}>
      <Swiper
        cards={song}
        renderCard={(card) => <Card card={card} />}
        infinite
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 0.9,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: randomcolor(),
  },
});
