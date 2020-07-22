import React, { Component } from 'react';
import AddFilmForm from '../components/form/add-film';
class AddFilm extends Component {
  render() {
    return (
      <div className="mt-5">
        <AddFilmForm />
      </div>
    );
  }
}

export default AddFilm;
