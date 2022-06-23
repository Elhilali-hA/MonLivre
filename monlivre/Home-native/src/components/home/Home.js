import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { AntDesign,Entypo, FontAwesome,Ionicons } from '@expo/vector-icons'; 
const image = require('../../../assets/home.png');
export default function Home({navigation}) {
  return (

    
    <View style={styles.container}>
        <Text style = {{position : "absolute", top :30 , left : 20, color: '#05375a', fontWeight: 'bold'}} ><Ionicons name="fast-food" size={24} color="#55a369" /> FOOD<Text style = {{color:"#55a369"}}> DILEVERY</Text> </Text>
      <Ionicons name="menu-sharp" size={24} color="#55a369" style = {{position : "absolute", top :35 , right : 20}} />
      <StatusBar style="auto" />
       <View style={styles.header}>
       <Image 
       source={image}
      style={styles.homeimage}
      />

   </View>
       
       <View style={styles.footer}>
    <Text style={{     color: '#05375a',
      fontSize: 27,
      fontWeight: 'bold' }}>The Fastest <Text style={{color: '#55a369',}}>In Delivery </Text>Food</Text>
    <Text style={{  color: 'grey',
      marginTop:5 ,marginBottom :15}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

<TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.signIn}>
        
        <Text style={styles.textSign}>Get Started</Text>
      
      </TouchableOpacity>
      <View style={styles.icones}>
      <AntDesign style={styles.i} name="instagram" size={14} color="#fff" />
      <FontAwesome style={styles.i} name="facebook-f" size={14} color="#fff" />
      <AntDesign style={styles.i} name="twitter" size={14} color="#fff" />
      <Entypo style={styles.i} name="linkedin" size={14} color="#fff" />
      <AntDesign style={styles.i} name="google" size={14} color="#fff" />
      <AntDesign style={styles.i} name="github" size={14} color="#fff" />
      </View>
      
      
    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : '#fff'
  },
  homeimage: {
       width : 410,
       height :300
  },
    header: {
      flex: 2,
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
  icones:{
    flex: 1,
    flexDirection : 'row',
    marginLeft: 20,
  },

  i:{
backgroundColor : '#55a369',
marginLeft: 5,
height: 30,
width : 30,
lineHeight: 30,
textAlign: 'center',
borderRadius: 50,

  },

    signIn: {
      width: 200,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
     
      backgroundColor : '#fcb736',
      flexDirection: 'row',
      marginBottom : 20
  },
    textSign: {
      color: 'white',
      fontWeight: 'bold'
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
