import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";

import Icon from "react-native-vector-icons/FontAwesome";

const Main = ({ navigation }) => {
  const [products, setProducts] = useState([]);

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
        data={products}
        keyExtractor={(item) => item.id.toString()}
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
