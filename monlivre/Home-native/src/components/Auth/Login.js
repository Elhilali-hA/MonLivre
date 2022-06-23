import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity,TextInput} from 'react-native';
import { AntDesign,Entypo, FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import {login} from "../../services/AuthService";
import { useDispatch } from "react-redux";
import { loginAction } from "../../actions/authActions";
import AsyncStorage from '@react-native-async-storage/async-storage';



const image = require('../../../assets/delivery.png');


export default function Login({navigation}) {
    

  const [data , setData] = useState({
    email : "",
    password : ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleEmail = (e) => {
    setData({ ...data, email: e });
  };

  const handlePassword = (e) => {
    setData({ ...data,password: e});
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    login( data).then((response) => {
     
      (async () => {
        console.log(response.data.user)
        await dispatch(loginAction());
        AsyncStorage.setItem('token',response.data.user.token );
      })()
      navigation.navigate('Food')
    }).catch((err) => console.log('err',err.response));
    setSubmitted(true);
  };





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
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    email={data.email}
                    onChangeText={handleEmail}
                /> 
                  <MaterialCommunityIcons style={styles.icone} name="email" size={24} color="black" />
           </View>
           <View>
           <TextInput style={styles.input}
                    placeholder="Password "
                    placeholderTextColor="#666666"
                    secureTextEntry={true}
                    password={data.password}
                    onChangeText={handlePassword}
                /> 
                <Entypo name="lock" style={styles.icon1} size={24} color="black" />
           </View>
     
               
         <TouchableOpacity onPress={handleSubmit} style={styles.signIn}>
        
        <Text style={styles.textSign}>Get Started</Text>
      
      </TouchableOpacity>
      <View style= {styles.register}>
      <Text>Dont'Have An Account? Register</Text>
              
              
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Register')} style={styles.signUp} >
                
                <Text>Register</Text>
              
              </TouchableOpacity>
    

    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9f6fd',
    // backgroundColor : '#94f3f7',

  },
  homeimage: {
       width : 410,
       height :300
  },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
    footer: {
      flex: 1,
      backgroundColor: '#fff',
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
