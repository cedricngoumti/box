import { Dimensions, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const ModalResult = (props) => {
    //const {handleModal} = props
    console.log(props)
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default ModalResult

const styles = StyleSheet.create({
    container:{
        height:Dimensions.get('window').height*0.8, 
        backgroundColor:'#ff0'
         
    }
})