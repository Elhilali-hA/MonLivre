import React , {useState, useEffect} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignUpScreen = () => {

  const {username, setusername} = useState('')
  const {password, setpassword} = useState('')
  const {email, setemail} = useState('')
  const {passwordrepeat, setpasswordrepeat} = useState('')




  const test =() =>{
    console.warn("test button")
  }


  return (
      <ScrollView>

    <View style={styles.root}> 
      <Text style={styles.title}>Sign Up</Text>

      <CustomInput 
      placeholder="Username"
      value={username} 
      setvalue={setusername}
       />

     <CustomInput 
      placeholder="Email" 
      value={email}
      setvalue={setemail} 
      secureTextEntry 
      />

      <CustomInput 
      placeholder="password" 
      value={password}
      setvalue={setpassword} 
      secureTextEntry 
      />

     <CustomInput 
      placeholder="repeat password" 
      value={passwordrepeat}
      setvalue={setpasswordrepeat} 
      secureTextEntry 
      />

      <CustomButton text="Register" onPress={test}  />

      <Text style={styles.text}>
        By registering, you confirm that you accept our <Text onPress={test} style={styles.link}>terms 
        of Use</Text>  and <Text onPress={test} style={styles.link}>Privacy Policy</Text> 

      </Text> 

      <CustomButton text="Forgot password ?" type="Tertiary"  />

      <CustomButton text="Sign in " type="Underline"  />




    </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
      alignItems: 'center',
      padding:20
    },
    title:{
      fontWeight:'bold',
      fontSize:24,
      color:'#051C60',
      margin:10
    },
    text:{
      color:'gray',
      marginVertical:10
    },
    link:{
      color:'#FDB075'
    }
  })

export default SignUpScreen