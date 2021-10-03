import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const Products = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Construa sua lista de compras</Text>
      <TextInput style={styles.input} placeholder="Item" />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity>
        <Icon
          style={styles.cameraButton}
          name="camera"
          size={32}
          color="#000"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Cadastrar </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Cancelar </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: "#1C7947",
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomColor: "#464660",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default Products;
