import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/FontAwesome";

const Product = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState();

  useEffect(() => {
    // Codigo de execuçao
    // recuperar os dados do asyncstorage

    AsyncStorage.getItem("products").then((data) => {
      if (data) {
        const product = JSON.parse(data);
        setProducts(product);
      }
    });
  }, []);

  const isValid = () => {
    if (title.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  const onSave = async () => {
    console.log(`Title: ${title} Description ${description}`);
    if (isValid()) {
      console.log("valido");

      const id = Math.random(5000).toString();
      const data = {
        id,
        title,
        description,
        photo,
      };

      products.push(data);

      console.log(JSON.stringify(data));

      await AsyncStorage.setItem("products", JSON.stringify(products));

      navigation.goBack();
    } else {
      console.log("invalido");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Construa sua lista de compras</Text>
      <TextInput
        style={styles.input}
        placeholder="Item"
        value={title}
        onChangeText={(text) => {
          setTitle(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(text) => {
          setDescription(text);
        }}
      />
      <View style={styles.groupButton}>
        <TouchableOpacity>
          <Icon
            style={styles.cameraButton}
            name="camera"
            size={28}
            color="#fff"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.saveButton,
            isValid() ? null : styles.saveButtonInvalid,
          ]}
        >
          <Text style={styles.saveButtonText} onPress={onSave}>
            Cadastrar{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Text style={styles.cancelButtonText}>Cancelar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
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
  groupButton: {
    alignItems: "center",
  },
  cameraButton: {
    backgroundColor: "#1C7947",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 10,
    width: 50,
    height: 50,
    margin: 20,
  },
  saveButton: {
    backgroundColor: "#1C7947",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    width: 200,
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButtonInvalid: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: "#fff",
  },
  cancelButton: {
    borderColor: "#1C7947",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    width: 200,
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButtonText: {
    color: "#1C7947",
  },
});

export default Product;
