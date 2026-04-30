import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import api from "./src/api/Api";
import AnimeCard from "./src/components/AnimeCard";

export default function App() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function loadAnimes(query = "") {
    setLoading(true);
    try {
      const endpoint = query
        ? `/anime?filter[text]=${query}&page[limit]=10`
        : "/anime?page[limit]=10&page[offset]=0";

      const response = await api.get(endpoint);
      setAnimes(response.data.data);
    } catch (error) {
      console.error("Erro ao buscar animes:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAnimes();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text>Carregando animes...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar anime..."
          value={search}
          onChangeText={setSearch}
        />
        <Button title="Pesquisar" onPress={() => loadAnimes(search)} />
      </View>

      {/* Lista de animes */}
      <FlatList
        data={animes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AnimeCard anime={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
    borderRadius: 5,
  },
});
