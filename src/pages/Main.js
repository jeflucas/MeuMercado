import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Main = ({ navigation }) => {
  const data = [
    {
      id: "1",
      title: "Arroz",
      price: 12.5,
      brand: "Tio Urbano",
      lastPrice: 11.0,
      buy: false,
      photo: null,
    },
    {
      id: "2",
      title: "Feijão",
      price: 7.1,
      brand: "Carioca",
      lastPrice: 6.0,
      buy: false,
      photo: null,
    },
    {
      id: "3",
      title: "Óleo",
      price: 3.5,
      brand: "Soya",
      lastPrice: 3.76,
      buy: false,
      photo: null,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
        <Text style={styles.title}>Meu Mercado</Text>
        <TouchableOpacity>
          <Icon
            onPress={() => navigation.navigate("Products")}
            style={styles.toolBoxButton}
            name="cart-plus"
            size={32}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  toolbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    color: "#1C7947",
  },
  toolBoxButton: {
    backgroundColor: "#1C7947",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    width: 50,
    height: 50,
  },
  itemText: {
    fontSize: 16,
  },
  itemButton: {},
});
export default Main;
