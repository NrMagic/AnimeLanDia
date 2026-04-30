import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import useTranslate from "../hooks/useTranslate.js";

export default function AnimeCard({ anime }) {
  const translatedSynopsis = useTranslate(anime.attributes.synopsis);

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: anime.attributes.posterImage?.large }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>
          {anime.attributes.titles?.pt || anime.attributes.canonicalTitle}
        </Text>
        <Text numberOfLines={3} style={styles.synopsis}>
          {translatedSynopsis}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: 100,
    height: 150,
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  synopsis: {
    fontSize: 12,
    color: "#555",
  },
});
