import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import normalize from '../../utility/helper/normalize';
import {logout} from '../../redux/LoginReducer';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../theme/Color';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    try {
      navigation.navigate('Login');
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity
      onPress={() => logoutHandler()}
      style={styles.btnContainer}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: normalize(14),
          fontWeight: '600',
          color: COLOR.white,
        }}>
        Logout
      </Text>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLOR.Darkblack,
    padding: normalize(10),
    margin: normalize(10),
  },
});
