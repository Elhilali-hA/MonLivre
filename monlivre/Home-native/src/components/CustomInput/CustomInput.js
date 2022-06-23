import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  
    return (
      <View style={styles.container}>
        <TextInput
        value={value}
        onChange={setValue}
         placeholder={placeholder}
         secureTextEntry={secureTextEntry}
         style={styles.input}
         />
      </View>
    )
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    width:'100%',
    borderColor:'#a8a8a8',
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:10,
    marginVertical:5

  },
  input:{

  }
})

export default CustomInput
 