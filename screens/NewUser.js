import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {loading, loginUser} from '../action';

function NewUser({navigation}) {
  return (
    <View>
      <Text>Welcome to New user </Text>
      <View>
        <TouchableOpacity>
          <Text>Get Started</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text> Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    loading: () => dispatch(loading()),
    loginUser: () => dispatch(loginUser()),
  };
};

export default connect(null, mapDispatchToProps)(NewUser);
