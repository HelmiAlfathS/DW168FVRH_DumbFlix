import { REGISTER, LOGIN, LOGOUT } from './type';
import { API, setAuthToken } from '../../config/api';

export const register = (body) => {
  return {
    type: REGISTER,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post('/register', body);
        localStorage.setItem('token', data.token);
        setAuthToken(data.token);

        const userId = data.id;
        console.log(userId);

        const {
          data: { data: dataUser },
        } = await API.get('/user/' + userId);
        console.log(dataUser);
        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const login = (body) => {
  return {
    type: LOGIN,
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post('/login', body);

        localStorage.setItem('token', data.token);
        setAuthToken(data.token);
        const userId = data.id;
        console.log(userId);
        const {
          data: { data: dataUser },
        } = await API.get('/user/' + userId);
        // localStorage.setItem('id', dataUser.id);
        // localStorage.setItem('role', dataUser.role);
        console.log(dataUser);
        return dataUser;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
