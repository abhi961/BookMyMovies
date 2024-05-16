import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initalState = {

  isLoggedIn: false,
  error: {},
};
const LoginSlice = createSlice({
  name: 'Auth',
  initalState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      AsyncStorage.setItem('isLoggedIn', 'true');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      AsyncStorage.removeItem('isLoggedIn');
    },
    setLoginState: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});
export const {signinRequest, signinFailure, signinSucess} = LoginSlice.actions;
export default LoginSlice.reducer;
