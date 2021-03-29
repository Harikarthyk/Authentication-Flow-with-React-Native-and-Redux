import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {connect} from 'react-redux';
import {loading, loginUser, registerNewUser} from '../action';

function NewUser({navigation, registerNewUser}) {
  const [data, setData] = useState('');

  const loginHandler = medium => {
    const API = `https://f16a28ccb138.ngrok.io/login/${medium}`;
    Linking.openURL(API);
  };
  useEffect(() => {
    // Your code here
    Linking.addEventListener('url', handleOpenURL);
  }, []);
  const handleOpenURL = ({url}) => {
    if (url.indexOf('?id') !== -1) {
      console.log(url);
      if (url) setData(url);
    }
  };

  return (
    <View>
      <Text>Welcome to New user </Text>
      <View>
        <TouchableOpacity onPress={() => loginHandler('google')}>
          <Text>Google Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => loginHandler('facebook')}>
          <Text>FaceBook Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text> Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch(loading()),
    loginUser: () => dispatch(loginUser()),
    registerNewUser: () => dispatch(registerNewUser()),
  };
};

export default connect(null, mapDispatchToProps)(NewUser);
