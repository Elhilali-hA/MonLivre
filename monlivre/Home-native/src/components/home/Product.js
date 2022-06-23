import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
 
} from "react-native";
import { AntDesign ,Entypo ,FontAwesome,FontAwesome5,MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import Footer from "../layoutes/Footer"
import React, { useState, useEffect } from "react";
import {  AllProduct } from "../../services/ProductService";
const image = require("../../../assets/menu.jpg");




export default function Food({ navigation }) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    AllProduct().then((res) => {
      setProduct(res.data);
    });
  }, []); 




  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.info}>
      <View>
           <TextInput style={styles.input}
                    placeholder="search"
                    placeholderTextColor="#666666"
               
                /> 
                  <FontAwesome5 style={styles.icone} name="search-dollar" size={20} color="black" />
           </View>
      <View>
        <Text style={styles.title}>Our Menu</Text>
        <Text style={styles.title1}>TODAY'S SPCIALITY</Text>
      </View>
      <View style = {styles.home}>
      {product.map((products) => (
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle}  source={{ uri:"http://172.16.8.87:5500/" + products.image }} />
        <View style={styles.star}>
          <AntDesign name="star" size={24} color="#56a56b" />
          <AntDesign name="star" size={24} color="#56a56b" />
          <AntDesign name="star" size={24} color="#56a56b" />
          <AntDesign name="star" size={24} color="#56a56b" />
          <AntDesign name="star" size={24} color="#56a56b" />
        </View>
        <Text style={styles.titleStyle}>{products.name}</Text>
        <Text style={styles.paraStyle}>{products.decsription}</Text>

       
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.signIn}
        >
          <Text style={styles.textbtn}>Add To Cart</Text>
        </TouchableOpacity>
        <Text style = {styles.price}> $ {products.price}</Text>

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
  home : {
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
    width: 370,
    backgroundColor: "#fff",
    height: 'auto',
    marginBottom : 70,
    borderColor : '#000',
    shadowColor: "#DCDCDC",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 3,
  },
  imageStyle: {
    height: 200,
    width: 370,
    resizeMode: "stretch",
    // marginTop: 4,
    opacity: 0.9,
    alignContent: "center",
    alignSelf: "center",
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft : 6,
    marginTop : 5
  },
  paraStyle: {
    marginLeft : 6,
  },
  star: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginLeft : 6
  },
  signIn: {
    height: 30,
    width: 130,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#192a56",
    marginTop: 14,
    marginLeft: 6,
    marginBottom : 8,
  },
  textbtn: {
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "320",
    textAlign: "center",
    color: "#56a56b",
    marginTop: 18,
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
    backgroundColor : "#fff",
    alignItems : 'center',
    padding : 12,
    // borderRadius:10,
    // marginLeft : 5,
    justifyContent:'center',
    width : 100,
    // borderWidth: .4,
    // borderColor: "#56a56b",
  },
  info: {
    width: "100%",
    height: "100%",
    display: "flex"
   },
   price :{
       position : 'absolute',
       top : "2%",
       right : "5%",
       backgroundColor : "green",
       color : "#fff",
       height: 39,
       width : 40,
       borderRadius : 50,
       textAlign: 'center',
       lineHeight: 35
   },
   input:{
    margin: 15,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft : 20,
    backgroundColor: '#fff',
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

    position : 'absolute',
    ZIndex  :1,
    top : '30%',
    right : '10%' ,
  },
});

