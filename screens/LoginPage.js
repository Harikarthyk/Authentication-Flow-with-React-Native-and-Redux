import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {connect} from 'react-redux';
import {loading, loginUser} from '../action';

function LoginPage({navigation, loading, loginUser}) {
  return (
    <View>
      <Text>Welcome to Login Page</Text>
      <View>
        <TouchableOpacity
          onPress={() => {
            loading();
            loginUser({
              name: 'John',
              email: 'john@gmail.com',
              userToken: '@#token_123',
            });
          }}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('NewUser')}>
        <Text>New user</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch(loading()),
    loginUser: input => dispatch(loginUser(input)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
