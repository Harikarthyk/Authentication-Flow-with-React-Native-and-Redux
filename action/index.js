const LOGIN_USER = 'LOGIN_USER';
const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
const LOGOUT = 'LOGOUT';
const LOAD_USER = 'LOAD_USER';
const LOADING = 'LOADING';

const loading = () => {
  return {
    type: LOADING,
  };
};

const loadUser = () => {
  return {
    type: LOAD_USER,
  };
};

const loginUser = input => {
  return {
    type: LOGIN_USER,
    playload: {
      input,
    },
  };
};

const registerNewUser = input => {
  return {
    type: REGISTER_NEW_USER,
    playload: {
      input,
    },
  };
};

const logout = () => {
  return {
    type: LOGIN_USER,
  };
};
