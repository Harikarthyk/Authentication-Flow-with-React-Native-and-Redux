import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import LoginPage from './screens/LoginPage';
import NewUser from './screens/NewUser';

const Stack = createStackNavigator();

const App = ({userInfo}) => {
  useEffect(() => {
    console.log('State => ', userInfo);
  });
  return (
    <NavigationContainer>
      {userInfo.user ? (
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

export default connect(mapStateToProps)(App);
