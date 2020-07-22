import { ADD_CONTACT } from '../actions/type';

import { ActionType } from 'redux-promise-middleware';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const ADD_CONTACT_PENDING = `${ADD_CONTACT}_${ActionType.Pending}`;
const ADD_CONTACT_FULLFILLED = `${ADD_CONTACT}_${ActionType.Fulfilled}`;
const ADD_CONTACT_REJECTED = `${ADD_CONTACT}_${ActionType.Rejected}`;

export const addContact = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT_PENDING:
      return {
        ...state,
        loading: true,
      };
    case ADD_CONTACT_FULLFILLED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ADD_CONTACT_REJECTED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
