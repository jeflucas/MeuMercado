import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Main = () => {

  const data = [
    {
      id: "1",
      title: "Arroz",
      price: 12.50,
      brand: "Tio Urbano",
      lastPrice: 11.00,
      buy: false,
      photo: null
    }
  ]

  return (
    <View>
      <Text>Meu Mercado</Text>
      <TouchableOpacity>
        <Icon name="cart-plus" size={30} color="#000" />
      </TouchableOpacity>
      <FlatList data={} renderItem={} keyExtractor={} />
    </View>
  );
};

export default Main;
