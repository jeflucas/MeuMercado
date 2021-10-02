import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Main = () => {
  return (
    <View>
      <Text>Meu Mercado</Text>
      <TouchableOpacity>
        <Icon name="cart-plus" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Main;
