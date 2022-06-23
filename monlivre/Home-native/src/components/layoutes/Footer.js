import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { AntDesign ,Entypo ,FontAwesome} from "@expo/vector-icons";

export default function Footer({ navigation }) {
  return (
  
      <View style={styles.button}>
     
      <TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Food')} ><FontAwesome name="home" size={30} color="#56a56b" />
</TouchableOpacity>
    
<TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Profile')} ><Entypo name="users" size={30} color="#56a56b" />
</TouchableOpacity>
    
<TouchableOpacity style={styles.icon1} onPress={()=>navigation.navigate('Delivery')} ><AntDesign name="setting" size={30} color="#56a56b" />
</TouchableOpacity>
     
     
    </View>
   
  );
}

const styles = StyleSheet.create({
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
    width : 140,
    // borderWidth: .4,
    // borderColor: "#56a56b",
  },

});

