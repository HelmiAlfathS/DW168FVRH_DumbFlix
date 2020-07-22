import { ActionType } from 'redux-promise-middleware';
import { REGISTER, LOGIN, LOGOUT } from '../actions/type';

const initialState = {
  data: {},
  err: [],
  isLoading: false,
};

const REGISTER_PENDING = `${REGISTER}_${ActionType.Pending}`;
const REGISTER_FULFILLED = `${REGISTER}_${ActionType.Fulfilled}`;
const REGISTER_REJECTED = `${REGISTER}_${ActionType.Rejected}`;
const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

export const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
    case LOGIN_PENDING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FULFILLED:
    case LOGIN_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case REGISTER_REJECTED:
    case LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
      return {
        ...state,
        loading: false,
        data: {},
      };
    default:
      return state;
  }
};
