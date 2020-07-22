import { ADD_EPISODE, DETAIL_EPISODE, DELETE_EPISODE } from '../actions/type';

import { ActionType } from 'redux-promise-middleware';

const initialState = {
  dataEps: null,
  loading: false,
  error: null,
  episode: [],
};

const ADD_EPISODE_PENDING = `${ADD_EPISODE}_${ActionType.Pending}`;
const ADD_EPISODE_FULLFILLED = `${ADD_EPISODE}_${ActionType.Fulfilled}`;
const ADD_EPISODE_REJECTED = `${ADD_EPISODE}_${ActionType.Rejected}`;

export const addEpisode = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EPISODE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_EPISODE_FULLFILLED:
      return {
        ...state,
        loading: false,
        episode: action.payload,
      };
    case ADD_EPISODE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const DETAIL_EPISODE_PENDING = `${DETAIL_EPISODE}_${ActionType.Pending}`;
const DETAIL_EPISODE_FULFILLED = `${DETAIL_EPISODE}_${ActionType.Fulfilled}`;
const DETAIL_EPISODE_REJECTED = `${DETAIL_EPISODE}_${ActionType.Rejected}`;

export const detailEpisode = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_EPISODE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DETAIL_EPISODE_FULFILLED:
      return {
        ...state,
        loading: false,
        dataEps: action.payload,
      };
    case DETAIL_EPISODE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const DELETE_EPISODE_PENDING = `${DELETE_EPISODE}_${ActionType.Pending}`;
const DELETE_EPISODE_FULFILLED = `${DELETE_EPISODE}_${ActionType.Fulfilled}`;
const DELETE_EPISODE_REJECTED = `${DELETE_EPISODE}_${ActionType.Rejected}`;

export const deleteEpisode = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EPISODE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case DELETE_EPISODE_FULFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DELETE_EPISODE_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
