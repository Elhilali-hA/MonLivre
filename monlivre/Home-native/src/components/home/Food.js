import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons

} from "@expo/vector-icons";
import Footer from "../layoutes/Footer";
import React, { useState, useEffect } from "react";
import { AllCategory } from "../../services/CategoryService";

// const image = require("../../../assets/dinner.png");

export default function Food({ navigation }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    AllCategory().then((res) => {
      setCategory(res.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.info}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="search"
            placeholderTextColor="#666666"
          />
          <FontAwesome5
            style={styles.icone}
            name="search-dollar"
            size={20}
            color="black"
          />
        </View>
        <View>
          <Text style={styles.title}>Our Category</Text>
          <Text style={styles.title1}>POPULAR CATEGORY</Text>
        </View>
        <View style={styles.home}>
          {category.map((category, index) => (
            <View key={index} style={styles.cardContainer}>
              <Image
                style={styles.imageStyle}
                source={{ uri: "http://172.16.8.87:5500/" + category.image }}
              />
              <Text style={styles.titleStyle}>{category.name}</Text>
              <View style={styles.star}>
                <AntDesign name="star" size={24} color="#56a56b" />
                <AntDesign name="star" size={24} color="#56a56b" />
                <AntDesign name="star" size={24} color="#56a56b" />
                <AntDesign name="star" size={24} color="#56a56b" />
                <AntDesign name="star" size={24} color="#56a56b" />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Product")}
                style={styles.signIn}
              >
                <Text style={styles.textbtn}>View Product</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Food")}
        >
          <FontAwesome name="home" size={30} color="#56a56b" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Profile")}
        >
          <Entypo name="users" size={30} color="#56a56b" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Product")}
        >
          <MaterialIcons name="fastfood" size={30} color="#56a56b" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon1}
          onPress={() => navigation.navigate("Delivery")}
        >
          <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={30} color="#56a56b" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  home: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: {
    width: 410,
    backgroundColor: "#000",
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  cardContainer: {
    width: 300,
    backgroundColor: "#fff",
    height: 325,
    // marginTop : 20,
    marginBottom: 70,
    borderColor: "#000",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.75,
    shadowRadius: 1,
    elevation: 2,
    
  },
  imageStyle: {
    height: 200,
    width: 250,
    resizeMode: "stretch",
    marginTop: 4,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: "500",
    textAlign: "center",
  },
  star: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  signIn: {
    height: 30,
    width: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#192a56",
    marginTop: 16,
    marginLeft: 87,
  },
  textbtn: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "320",
    textAlign: "center",
    color: "#56a56b",
    marginTop: 15,
  },
  title1: {
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    color: "#192a56",
    marginBottom: 30,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    position: "absolute",
    left: 0,
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "blue",
    width: "100%",
    bottom: 0,
    height: 55,
  },
  icon1: {
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 12,
    // borderRadius:10,
    // marginLeft : 5,
    justifyContent: "center",
    width: 100,
    // borderWidth: .4,
    // borderColor: "#56a56b",
  },
  info: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 20,
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 7,
  },
  icone: {
    position: "absolute",
    ZIndex: 1,
    top: "30%",
    right: "10%",
  },
});
