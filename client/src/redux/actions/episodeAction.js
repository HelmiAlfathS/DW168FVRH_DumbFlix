import { DETAIL_EPISODE, ADD_EPISODE, DELETE_EPISODE } from './type';
import { API } from '../../config/api';

export const addEpisode = (file) => {
  return {
    type: ADD_EPISODE,
    payload: async () => {
      try {
        const { title, thumbnailFilm, linkFilm, filmId } = file;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('thumbnailFilm', thumbnailFilm);
        formData.append('linkFilm', linkFilm);

        formData.append('filmId', filmId); //ambill dari parameter
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        const {
          data: { data },
        } = await API.post('/episode', formData, config);
        console.log(data);
        return data;
        // const { data: dataEpisode } = await API.post('/episode', body);
        // console.log(dataEpisode);
        // return dataEpisode.data;
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

export const detailEpisode = (id) => {
  return {
    type: DETAIL_EPISODE,
    payload: async () => {
      try {
        const { data: dataEpisode } = await API.get(`/film/${id}/episode`);
        console.log(dataEpisode);
        return dataEpisode.data;
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

export const deleteEpisode = (id) => {
  return {
    type: DELETE_EPISODE,
    payload: async () => {
      try {
        const { data: dataEpisode } = await API.delete(`/episode/${id}`);
        console.log(dataEpisode);
        return dataEpisode.data;
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
