import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, ScrollView, Button } from "react-native";
import useTranslate from "../hooks/useTranslate.js";
import { SecondaryButton } from "./Buttons.jsx";

export default function AnimeCard({ anime }) {
  const translatedSynopsis = useTranslate(anime.attributes.synopsis);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/* Card */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
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
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>
                {anime.attributes.titles?.pt || anime.attributes.canonicalTitle}
              </Text>
              <Text style={styles.modalSynopsis}>{translatedSynopsis}</Text>
            </ScrollView>
           <SecondaryButton/>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: "#fff",
    color:"#000",
    border:"solid 1px #fff",
    fontFamily:"Arial",
    fontSize: 10,
  },
  card: {
    width: 250,
    height: 500,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#ffffff6e",
    border: "solid 1px #fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    gap: "10px",
  boxShadow: "1px 1px 10px  0px #c80000",
    },
  image: {
    width: "100%",
    height: 300, // ocupa parte superior
  },
  info: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
    color: "#000000",
  },
  synopsis: {
    fontSize: 14,
    color: "#121212",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#1a1a1a",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  modalSynopsis: {
    fontSize: 14,
    color: "#ffffff",
  },
});
