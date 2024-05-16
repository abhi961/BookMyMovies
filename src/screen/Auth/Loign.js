import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLOR} from '../../theme/Color';
import normalize from '../../utility/helper/normalize';
import TextInputComp from '../../Components/TextInput';
import CustomButton from '../../Components/CustomButton';
import Toast from '../../utility/helper/Toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {loign} from '../../redux/LoginReducer';

const Loign = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dummyUsername = 'test@123';
  const dummyPassword = '12345';

  useEffect(() => {
    const checkLoginState = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.navigate('tabNav');
      }
    };
    checkLoginState();
  }, [navigation]);

  const loginHandler = () => {
    if (!name) {
      Toast('Enter userName');
    } else if (!password) {
      Toast('Enter Password');
    } else if (name === dummyUsername && password === dummyPassword) {
      navigation.navigate('tabNav');
    } else if (name !== dummyUsername && password !== dummyPassword) {
      Toast('Invaild userName and password');
    } else {
      dispatch(loign());
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={COLOR.Purple} />

      <View style={styles.loginBox}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputBox}>
          <TextInputComp
            placeholder={'Enter UserName'}
            value={name}
            onChangeText={txt => setName(txt)}
          />
          <TextInputComp
            placeholder={'Enter Password'}
            value={password}
            onChangeText={pass => setPassword(pass)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btnView}>
          <CustomButton onPress={() => loginHandler()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Loign;

const styles = StyleSheet.create({
  container: {},
  titleText: {
    flexDirection: 'row',
    textAlign: 'center',
    marginTop: normalize(30),
    fontSize: normalize(20),
    fontWeight: '900',
    color: COLOR.Darkblack,
  },
  loginBox: {
    backgroundColor: COLOR.white,
    marginHorizontal: normalize(20),
    alignItems: 'center',
    marginVertical: normalize(50),
    borderRadius: normalize(5),
    paddingBottom: normalize(40),
  },
  loginText: {
    color: COLOR.Darkblack,
    fontSize: normalize(16),
    fontWeight: '600',
    borderBottomColor: COLOR.Lightblack,
    borderBottomWidth: normalize(1.5),
    marginTop: normalize(25),
  },
  inputBox: {
    marginTop: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  btnView: {
    width: '65%',
  },
});
