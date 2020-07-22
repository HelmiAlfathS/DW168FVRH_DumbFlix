import { REGISTER, LOGIN } from './type';
import { API, setAuthToken } from '../../config/api';
import axios from 'axios';

export const register = (data) => {
  return {
    type: 'REGISTER',
    payload: async () => {
      try {
        const res = await API.post('/register', data);
        localStorage.setItem('token'.data.token);

        setAuthToken(data.token);
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
    type: 'LOGIN',
    payload: async () => {
      try {
        const {
          data: { data },
        } = await API.post('/login', body);

        localStorage.setItem('token', data.data.token);
        localStorage.setItem('id', data.data.id);
        setAuthToken(data.data.token); //Set header token

        const {
          data: { data: dataUser },
        } = await API.get('/user');
        return dataUser;

        // const res = await API.post('/login', data);
        // localStorage.setItem('token', res.data.token);
        // setAuthToken(res.data.token);
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};
