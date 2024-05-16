import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import normalize from '../utility/helper/normalize';
import {COLOR} from '../theme/Color';

const TextInputComp = ({placeholder, value, onChangeText,secureTextEntry}) => {
  return (
    <View style={styles.TextContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLOR.gray}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputField}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  TextContainer: {
    borderWidth: normalize(1),
    borderColor: COLOR.Darkblack,
    width: '75%',
    // marginHorizontal:normalize(20)
    marginBottom: normalize(15),
    borderRadius: normalize(5),
    
  },
  inputField: {
    color: COLOR.Darkblack,
    fontSize: normalize(12),
  },
});
