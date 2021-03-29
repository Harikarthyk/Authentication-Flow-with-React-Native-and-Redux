import AsyncStorage from '@react-native-async-storage/async-storage';

// const initialState = {
//   user: null,
//   userToken: null,
//   date: null,
//   loading: true,
//   error: null,
// };
const initialState = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    if (jsonValue != null) {
      let parse = JSON.parse(jsonValue);
      // console.log('Initial State Function -> 16line in user.js => ', parse);
      return {
        user: parse.user,
        userToken: parse.userToken,
        date: new Date().getDate(),
        loading: false,
        error: null,
      };
    } else
      return {
        user: null,
        userToken: null,
        date: null,
        loading: true,
        error: null,
      };
  } catch (e) {
    return {
      user: null,
      userToken: null,
      date: null,
      loading: true,
      error: null,
    };
  }
};

const user = (state = initialState(), action) => {
  switch (action.type) {
    case 'LOADING': {
      // console.log('Loading ... ');
      return {...state, loading: true};
    }
    case 'LOAD_USER': {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key');
          if (jsonValue != null) {
            let parse = JSON.parse(jsonValue);
            // console.log(
            //   'Consoling the previous user -> 24line in user.js => ',
            //   parse,
            // );
            return {
              ...state,
              user: parse.user,
              userToken: parse.userToken,
              loading: false,
            };
          } else return state;
        } catch (e) {
          return state;
        }
      };
      return getData();
    }
    case 'LOGIN_NEW_USER': {
      //API Call and get a response
      //If Response is 200

      // console.log('Login to new user');
      let user = {
        name: 'john',
        email: 'john@gmail.com',
      };
      let userToken = '#user_token';
      let date = new Date().getDate();

      let userDetails = {user: user, userToken: userToken};

      const storeData = async () => {
        try {
          const jsonValue = JSON.stringify(userDetails);
          await AsyncStorage.setItem('@storage_Key', jsonValue);
        } catch (e) {
          return state;
        }
      };
      storeData();
      return {
        ...state,
        user: user,
        userToken: userToken,
        loading: false,
        date: date,
      };

      //If Response have some error for eg 40X or 50X

      // return {
      //   ...state,
      //   error: response.error_message,
      //   loading: false,
      // };
    }

    case 'REGISTER_NEW_USER': {
      //API Call and get a response

      let apiCall = async () => {
        console.log('Invoked Google Login');
      };
      apiCall();
    }
    case 'LOGOUT': {
      // console.log('Logout Invoked .. 000');
      const storeData = async () => {
        try {
          const jsonValue = null;
          await AsyncStorage.setItem('@storage_Key', jsonValue);
        } catch (e) {
          return state;
        }
      };
      storeData();
      return {
        ...state,
        loading: false,
        user: null,
        userToken: null,
        date: null,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default user;
