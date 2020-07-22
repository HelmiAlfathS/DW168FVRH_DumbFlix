import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { addContact } from './contactReducer';
import { addFilm, deleteFilm, getFilm } from './filmReducer';
import { addEpisode, deleteEpisode, detailEpisode } from './episodeReducer';
import { register } from './registerR';
import { transactionReducer } from './transactionReducer';

const reducer = combineReducers({
  register,
  authReducer,
  addContact,
  addFilm,
  deleteFilm,
  getFilm, //sudah termasul detail
  addEpisode,
  detailEpisode,
  deleteEpisode,
  transactionReducer,
});

export default reducer;
