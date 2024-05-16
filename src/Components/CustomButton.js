import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLOR} from '../theme/Color';
import normalize from '../utility/helper/normalize';

const CustomButton = ({onPress}) => {
  return (
    <View>
        <TouchableOpacity 
         onPress={onPress}
        style={styles.buttonContainer}>
      <Text style={styles.btnText}>Login</Text>
    </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLOR.Darkblack,
    width: '100%',
    paddingTop: normalize(12),
    paddingBottom: normalize(12),
    borderRadius: normalize(5),
  },
  btnText:{
    color:COLOR.white,
    textAlign:'center',
    fontSize:normalize(14),
    fontWeight:'600'
  }
});
