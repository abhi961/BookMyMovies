import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../theme/Color'
import normalize from '../../utility/helper/normalize'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
const navigation = useNavigation()
    setTimeout(()=>{
   navigation.navigate('Login')
    },2000)

  return (
    <View style={styles.container}>
     <Text style={styles.TextColr}>BookMyMovies</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.Purple,
        alignItems:'center',
        justifyContent:'center'
    },
    TextColr:{
        fontSize:normalize(30),
        color:COLOR.white,
        fontWeight:'600'
    }
})