import React, { Component, Fragment } from 'react';
import Description from '../components/description';
import MediaPlayer from '../components/videoPlayer';
import { connect } from 'react-redux';
import { detailFilm, getFilm } from '../redux/actions/fimAction';
import Button from '../components/button';
import { Container } from 'react-bootstrap';

class Detail extends Component {
  componentDidMount() {
    this.props.detailFilm(this.props.match.params.id);
  }
  render() {
    const { id } = this.props;
    return (
      <Fragment>
        <MediaPlayer />
        <Description id={id} />
      </Fragment>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  const { detail, loading, error } = state.getFilm;
  return {
    id,
    detail,
    loading,
    error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    detailFilm: (id) => dispatch(detailFilm(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
