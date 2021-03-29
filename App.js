import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import NewUser from './screens/NewUser';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {loading, loadUser} from './action';
// import user from './reducer/user';
import Loading from './screens/Loading';

const Stack = createStackNavigator();

const App = ({loading, userInfo, loadUser}) => {
  useEffect(() => {
    loading();
    loadUser();
  }, []);
  return (
    <NavigationContainer>
      {userInfo.loading ? (
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Loading} />
        </Stack.Navigator>
      ) : userInfo.user ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="NewUser" component={NewUser} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = state => ({
  userInfo: state.user,
});

const mapDispatchToProps = dispatch => ({
  loading: () => dispatch(loading()),
  loadUser: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
