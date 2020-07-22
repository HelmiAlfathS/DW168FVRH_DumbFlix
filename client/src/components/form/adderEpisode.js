import React, { Component } from 'react';
import { Form, Row, Container, Col, Modal } from 'react-bootstrap';
import Button from '../button';
import { addEpisode } from '../../redux/actions/episodeAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './form.css';
import { MdAttachFile } from 'react-icons/md';

class AdderEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eps: {
        filmId: this.props.filmNow.film.id,
      },
    };
  }
  handleChangeInput = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    const { eps } = this.state;
    this.setState({
      eps: {
        ...eps,
        [e.target.name]:
          e.target.type === 'file' ? e.target.files[0] : e.target.value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.addEpisode(this.state.eps);
    // this.setState({ eps: {} });
    // document.getElementById('formAdderEps').reset();
  };
  render() {
    return (
      <div className="mt-4">
        <Form onSubmit={this.handleSubmit} id="formAdderEps">
          <Row>
            <Col md={9}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Title Episode"
                  name="title"
                  onChange={this.handleChangeInput}
                />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.File id="formcheck-api-custom" custom className="mb-3">
                <Form.File.Input
                  isValid
                  name="thumbnailFilm"
                  onChange={this.handleChangeInput}
                />
                <Form.File.Label
                  data-browse="File"
                  className="text-white bg-dark border-white"
                  name="thumbnailFilm"
                >
                  <MdAttachFile style={{ color: 'red', fontWeight: 'bold' }} />{' '}
                  img
                </Form.File.Label>
              </Form.File>
            </Col>
          </Row>

          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Link Film"
              name="linkFilm"
              onChange={this.handleChangeInput}
            />
          </Form.Group>
        </Form>
        <div onClick={this.handleSubmit} className="mt-3">
          <Button primary className="stretch">
            {' '}
            Save{' '}
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    filmNow: state.addFilm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEpisode: (file) => dispatch(addEpisode(file)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdderEpisode);
// export default connect(mapStateToProps, mapDispatchToProps)(AddMusic);
