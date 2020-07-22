import { GET_CONTACT, ADD_CONTACT } from './type';
import { API } from '../../config/api';

export const addContact = (body) => {
  return {
    type: ADD_CONTACT,
    payload: async () => {
      try {
        const { data: dataContact } = await API.post('/contact', body);
        console.log(dataContact);
        return dataContact.data;
      } catch (error) {
        if (error.response) {
          const {
            data: { data: dataError },
            status,
          } = error.response;
          // console.log(dataError.error);
          if (status > 399) throw dataError.error;
        }
      }
    },
  };
};
