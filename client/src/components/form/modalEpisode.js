import React, { Component } from 'react';
import { Form, Row, Container, Col, Modal } from 'react-bootstrap';
import Button from '../button';
import { addEpisode } from '../../redux/actions/episodeAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './form.css';
import { MdAttachFile } from 'react-icons/md';

class ModalEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eps: {
        filmId: this.props.id,
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
    this.setState({ eps: {} });
    document.getElementById('formAddEps').reset();
  };
  render() {
    console.log(this.props.id);
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Header
            closeButton
            onClick={this.props.closeModal}
          ></Modal.Header>
          <Modal.Body closeButton>
            <Container>
              <Modal.Title className="text-white mb-3 form-title">
                Add Episode
              </Modal.Title>

              <Form onSubmit={this.handleSubmit} id="formAddEps">
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
                    <Form.File
                      id="formcheck-api-custom"
                      custom
                      className="mb-3"
                    >
                      <Form.File.Input
                        isValid
                        name="thumbnailFilm"
                        onChange={this.handleChangeInput}
                      />
                      <Form.File.Label
                        data-browse="File"
                        className="text-white bg-dark border-white"
                        name="thumbnailFilm"
                        // onChange={this.handleChangeInput}
                      >
                        <MdAttachFile
                          style={{ color: 'red', fontWeight: 'bold' }}
                        />
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
              <div onClick={this.handleSubmit} className="mt-4 mb-2">
                <Button primary> Save </Button>
              </div>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
// const mapStateToProps = (ownProps) => {
//   let id = ownProps.match.params.id;
//   return {
//     id,
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     music: state.musicReducer,
//     artist: state.musicReducer,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return {
    addEpisode: (file) => dispatch(addEpisode(file)),
  };
};
export default connect(null, mapDispatchToProps)(ModalEpisode);
// export default connect(mapStateToProps, mapDispatchToProps)(AddMusic);
