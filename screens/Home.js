import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';
import {logout} from '../action';

function Home({navigation, logout}) {
  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <TouchableHighlight onPress={() => logout()}>
        <Text>Log out</Text>
      </TouchableHighlight>
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
