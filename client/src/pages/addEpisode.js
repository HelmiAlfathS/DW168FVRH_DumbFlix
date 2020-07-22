import React, { Component } from 'react';
import AddEpisodeForm from '../components/form/add-episode';
class AddEpisode extends Component {
  render() {
    return (
      <div className="mt-5">
        <h1>add Episdoe</h1>

        <AddEpisodeForm />
      </div>
    );
  }
}

export default AddEpisode;
