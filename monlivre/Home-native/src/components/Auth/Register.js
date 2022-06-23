import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput} from 'react-native';
import { AntDesign,Entypo, FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import {register} from "../../services/AuthService"

const image = require('../../../assets/deliveryonline.png');


export default function Login({navigation}) {

  const[name , setName]= useState("")
  const[email , setEmail]= useState("")
  const[password , setPassword]= useState("")
  const [success, setSuccess] = useState('')


  const handleName = (e)=>{
    return setName(e)
  }
 
  const handleEmail = (e)=>{
    return setEmail(e)
  }
  const handlePassword = (e)=>{
    return setPassword(e)
  }

  const handleSubmit = async ()=>{
    try {
      let repRegister = await register(name ,email,password)
      setSuccess(repRegister)
      if (repRegister.status == 200) {
        navigation.navigate('Login')
      }
  } catch (error) {
      console.log(error);
      navigation.navigate('Register')

  }
  }



  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
       <View style={styles.header}>
       <Image 
    
    source={image}
   style={styles.homeimage}
   />
  
   </View>
  
       <View style={styles.footer}>
       <View>
           <TextInput style={styles.input}
                    placeholder="Your Name"
                    placeholderTextColor="#666666"
                    onChangeText={handleName}
               
                /> 
                <Entypo name="users" size={24} color="black" style={styles.icone}  />
           </View>
           <View>
           <TextInput style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    onChangeText={handleEmail}
                /> 
                  <MaterialCommunityIcons style={styles.icone} name="email" size={24} color="black" />
           </View>
           <View>
           <TextInput style={styles.input}
                    placeholder="Password "
                    placeholderTextColor="#666666"
                    secureTextEntry={true}
                    onChangeText={handlePassword}
                /> 
                <Entypo name="lock" style={styles.icon1} size={24} color="black" />
           </View>
     
               
                <TouchableOpacity onPress={handleSubmit} style={styles.signIn}>
        
        <Text style={styles.textSign}>Get Started</Text>
      
      </TouchableOpacity>

    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#e9f6fd',
    backgroundColor: '#fff',

    // backgroundColor : '#94f3f7',

  },
  homeimage: {
       width :400 ,
       height :300,
       resizeMode: "stretch",
  },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
    footer: {
      flex: 1,
     backgroundColor: '#e9f6fd',
      borderTopLeftRadius: 70,
      borderTopRightRadius: 70,
      paddingVertical: 50,
      paddingHorizontal: 30
  },

  input:{
    margin: 15,
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    padding : 15,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 20,
  },
  icone: {

    position : 'absolute',
    ZIndex  :1,
    top : '30%',
    right : '10%' ,
  },
  icon1: {
    position : 'absolute',
    ZIndex  :1,
    top : '40%',
    right : '10%' ,
  },
  signIn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor : '#56a56b',
    marginTop: 12,
    marginBottom : 10,

},
signUp: {
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  // backgroundColor : '#56a56b',
  // flexDirection: 'row',
  marginTop: 12,
  marginBottom : 10,
  borderColor: '#56a56b',
   borderWidth: 1,


},
textSign: {
    color :'#fff'
},
register:{
    display : 'flex',
    flexDirection : 'row',
   justifyContent : 'center',
   marginBottom : 5,
    
}
  
});





{/* <TouchableOpacity  style={{ width: 200,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
     
      backgroundColor : '#fcb736',
      flexDirection: 'row',
      marginBottom : 20
      }}></TouchableOpacity> */}














// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     backgroundColor: 'red'
//   },
//   header: {
//       flex: 2,
//       justifyContent: 'center',
//       alignItems: 'center'
//   },
//   footer: {
//       flex: 1,
//       backgroundColor: '#fff',
//       borderTopLeftRadius: 30,
//       borderTopRightRadius: 30,
//       paddingVertical: 50,
//       paddingHorizontal: 30
//   },
//   logo: {
//       width: height_logo,
//       height: height_logo
//   },
//   title: {
//       color: '#05375a',
//       fontSize: 30,
//       fontWeight: 'bold'
//   },
  // text: {
  //     color: 'grey',
  //     marginTop:5
  // },
//   button: {
//       alignItems: 'flex-end',
//       marginTop: 30
//   },
//   signIn: {
//       width: 150,
//       height: 40,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 50,
//       flexDirection: 'row'
//   },
//   textSign: {
//       color: 'white',
//       fontWeight: 'bold'
//   }
// });
