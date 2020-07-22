import { GET_FILM, ADD_FILM, DETAIL_FILM, DELETE_FILM } from './type';
import { API } from '../../config/api';

export const addFilm = (file) => {
  return {
    type: ADD_FILM,
    payload: async () => {
      try {
        const {
          title,
          year,
          categoryId,
          thumbnailFilm,
          linkFilm,
          description,
        } = file;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('thumbnailFilm', thumbnailFilm);
        formData.append('year', year);
        formData.append('categoryId', categoryId);
        formData.append('description', description);
        formData.append('linkFilm', linkFilm);

        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        const {
          data: { data },
        } = await API.post('/film', formData, config);
        console.log(data);
        return data;

        // const { data: dataFilm } = await API.post('/contact', body);
        // console.log(dataFilm);
        // return dataFilm.data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const getFilm = () => {
  return {
    type: GET_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.get('/category');
        console.log(dataFilm.data);
        return dataFilm.data;
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

export const detailFilm = (id) => {
  return {
    type: DETAIL_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.get(`/film/${id}`);
        console.log(dataFilm);
        return dataFilm.data;
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

export const deleteFilm = (id) => {
  return {
    type: DELETE_FILM,
    payload: async () => {
      try {
        const { data: dataFilm } = await API.delete(`/film/${id}`);
        console.log(dataFilm);
        return dataFilm.data;
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
