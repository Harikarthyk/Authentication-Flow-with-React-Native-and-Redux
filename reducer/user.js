import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  userToken: null,
  date: null,
  loading: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING': {
      // console.log('Loading ... ');
      return {...state, loading: true};
    }
    case 'LOAD_USER': {
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key');
          return jsonValue != null
            ? {
                ...state,
                user: JSON.parse(jsonValue).user,
                userToken: JSON.parse(jsonValue).userToken,
                loading: false,
              }
            : state;
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
