import React, { Component } from 'react';
import { Form, Row, Container, Col, Modal } from 'react-bootstrap';
import Button from '../button';
import { addEpisode } from '../../redux/actions/episodeAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './form.css';

class AddEpisodeForm extends Component {
  constsructor(props) {
    super(props);
    this.state = {
      eps: {},
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
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Body>
            <Container>
              <Modal.Title className="text-white mb-3 form-title">
                Log in
              </Modal.Title>
              <Form id="formAddEps" onSubmit={this.handleSubmit}>
                <Row>
                  <Col md={10}>
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Total Episode"
                        name=""
                      />
                    </Form.Group>
                  </Col>
                  <Col md={2}>
                    <Form.File id="formcheck-api-custom" custom>
                      <Form.File.Input isValid />
                      <Form.File.Label
                        data-browse="Icon"
                        className="text-white bg-dark border-white"
                      >
                        Attach Some File
                      </Form.File.Label>
                    </Form.File>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Control type="text" placeholder="Link Film" name="" />
                </Form.Group>
              </Form>
              <div onClick={this.props.closeModal}>
                <Button primary className="">
                  {' '}
                  Add{' '}
                </Button>
              </div>

              <p className="text-white text-center">
                {' '}
                Don't have an account? click
                <span>
                  <Link to="#">Here</Link>
                </span>
              </p>
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    episode: state.addEpisode,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addEpisode: (file) => dispatch(addEpisode(file)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddEpisodeForm);
