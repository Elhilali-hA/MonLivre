 import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SingInScreen = () => {

  const {username, setusername} = useState('')
  const {password, setpassword} = useState('')


  const {height} = useWindowDimensions();

  const test =() =>{
    console.warn("test button")
  }

  return (
    <ScrollView showVerticalScrollIndicator={false}>
    <View style={styles.root} >
      <Text>Sign in Screen</Text>
      <Image source={logo} style={[styles.logo, {height: height*0.3 }]} resizeMode="contain"/>

      <CustomInput 
      placeholder="Username"
      value={username} 
      setvalue={setusername}
       />

      <CustomInput 
      placeholder="password" 
      value={password}
      setvalue={setpassword} 
      secureTextEntry 
      />

      <CustomButton text="Sign In" onPress={test}  />

      <CustomButton text="Forgot password ?" type="Tertiary"  />

      <CustomButton text="You D'ont have an account ?" type="Underline"  />



    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding:20
  },
  logo:{
    width:'70%',
    maxWidth:500,
    height:100,
  },
})

export default SingInScreen
