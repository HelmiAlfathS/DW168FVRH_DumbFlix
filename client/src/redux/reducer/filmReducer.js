import { ADD_FILM, GET_FILM, DETAIL_FILM, DELETE_FILM } from '../actions/type';

import { ActionType } from 'redux-promise-middleware';

const initialState = {
  films: null,
  loading: false,
  error: null,
  film: [],
  detail: null,
};

const ADD_FILM_PENDING = `${ADD_FILM}_${ActionType.Pending}`;
const ADD_FILM_FULLFILLED = `${ADD_FILM}_${ActionType.Fulfilled}`;
const ADD_FILM_REJECTED = `${ADD_FILM}_${ActionType.Rejected}`;

export const addFilm = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_FILM_FULLFILLED:
      return {
        ...state,
        loading: false,
        film: action.payload,
      };
    case ADD_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const GET_FILM_PENDING = `${GET_FILM}_${ActionType.Pending}`;
const GET_FILM_FULFILLED = `${GET_FILM}_${ActionType.Fulfilled}`;
const GET_FILM_REJECTED = `${GET_FILM}_${ActionType.Rejected}`;

const DETAIL_FILM_PENDING = `${DETAIL_FILM}_${ActionType.Pending}`;
const DETAIL_FILM_FULFILLED = `${DETAIL_FILM}_${ActionType.Fulfilled}`;
const DETAIL_FILM_REJECTED = `${DETAIL_FILM}_${ActionType.Rejected}`;

export const getFilm = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_PENDING:
    case DETAIL_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        films: action.payload,
      };
    case DETAIL_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    case GET_FILM_REJECTED:
    case DETAIL_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const DELETE_FILM_PENDING = `${DELETE_FILM}_${ActionType.Pending}`;
const DELETE_FILM_FULFILLED = `${DELETE_FILM}_${ActionType.Fulfilled}`;
const DELETE_FILM_REJECTED = `${DELETE_FILM}_${ActionType.Rejected}`;

export const deleteFilm = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_FILM_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_FILM_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DELETE_FILM_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
