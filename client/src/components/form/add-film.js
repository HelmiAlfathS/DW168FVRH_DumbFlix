import React, { Component } from 'react';
import { Form, Row, Container, Col } from 'react-bootstrap';
import Button from '../button';
import './form.css';
import { MdAttachFile } from 'react-icons/md';
import AdderEpisode from './adderEpisode';
import { addFilm } from '../../redux/actions/fimAction';
import { addEpisode } from '../../redux/actions/episodeAction';
import { connect } from 'react-redux';

class AddFilmForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: {},
      newForm: [],
      displayLink: '',
      // eps: {},
      // array: [],
    };
    this.formAdder = this.formAdder.bind(this);
  }
  formAdder() {
    const formEpisode = this.state.newForm.concat(AdderEpisode);
    this.setState({ newForm: formEpisode });
  }

  handleChangeInput = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    const { film } = this.state;
    this.setState({
      film: {
        ...film,
        [e.target.name]:
          e.target.type === 'file' ? e.target.files[0] : e.target.value,
      },
    });
    // this.handleSubmitEps = this.handleSubmitEps.bind(this);
    // this.handleChangeEps = this.handleChangeEps.bind(this);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.film);
    await this.props.addFilm(this.state.film);
    // const { eps } = this.state;
    // this.setState({
    //   eps: {
    //     ...eps,
    //     filmId: this.props.filmNow.film.id,
    //   },
    // });
    // await this.props.addEpisode(this.state.eps);
    // this.setState({ film: {} });
    // console.log(this.state.film);
    // console.log(this.state.eps);
    // console.log(this.state.array);
    // document.getElementById('formAddFilm').reset();
  };

  handleLink = (e) => {
    const { film } = this.state;

    console.log(e.target.name + ' : ' + e.target.value);
    this.setState({
      displayLink: e.target.value,
      film: {
        ...film,
        [e.target.name]: e.target.value,
      },
    });
  };

  // ----------------------------------- EPisode
  handleSubmitEps = async (e) => {
    e.preventDefault();
    await this.props.addEpisode(this.state.eps);
    this.setState({ eps: {} });
    document.getElementById('formAdderEps').reset();
  };
  handleChangeEps = (e) => {
    console.log(e.target.name + ' : ' + e.target.value);
    const { eps } = this.state;
    this.setState({
      eps: {
        ...eps,
        [e.target.name]:
          e.target.type === 'file' ? e.target.files[0] : e.target.value,
      },
      array: [...this.state.array, this.state.eps],
    });
  };
  // ----------------------------------------------------------------------------

  render() {
    const { film: filmNow } = this.props.filmNow;
    console.log(filmNow);
    const formEpisode = this.state.newForm.map((Element, index) => {
      return (
        <Element
          key={index}
          index={index}
          submit={this.handleSubmitEps}
          change={this.handleChangeEps}
        />
      );
    });

    return (
      <div>
        <Container>
          <Form id="formAddFilm">
            <Row>
              <Col md={10}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    name="title"
                    onChange={this.handleChangeInput}
                    // value={film.title ? film.title : ''}
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.File id="formcheck-api-custom" custom>
                  <Form.File.Input
                    name="thumbnailFilm"
                    isValid
                    onChange={this.handleChangeInput}
                  />
                  <Form.File.Label
                    data-browse="File"
                    className="text-white bg-dark border-white"
                    name="thumbnailFilm"
                    onChange={this.handleChangeInput}
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
                placeholder="Year"
                name="year"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <Form.Group controlId="">
              <Form.Control
                as="select"
                placeholder="Category"
                name="categoryId"
                // onChange={this.handleLink}
                onChange={this.handleChangeInput}
              >
                <option value={1} defaultValue>
                  Movie
                </option>
                <option value={2}>Tv Series</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="">
              <Form.Control
                as="textarea"
                rows="3"
                placeholder="Description"
                name="description"
                onChange={this.handleChangeInput}
              />
            </Form.Group>
            <div onClick={this.handleSubmit} className="mt-3">
              <Button primary className="stretch">
                {' '}
                Save{' '}
              </Button>
            </div>
            {/* {this.state.displayLink === '1' ? (
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="linkFilm"
                  name="linkFilm"
                  onChange={this.handleChangeInput}
                  style={{ display: false }}
                />
              </Form.Group>
            ) : (
              <>
                <div>{formEpisode}</div>

                <div className="justify-center">
                  <button
                    onClick={this.formAdder}
                    className="bg-dark text-white font-weight-bold border-white"
                    style={{ width: '100%' }}
                  >
                    +
                  </button>
                </div>
              </>
            )} */}
            {/* <Row className="mt-5">
              <Col md={10}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Title Episode"
                    name=""
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.File id="formcheck-api-custom" custom>
                  <Form.File.Input isValid />
                  <Form.File.Label
                    data-browse="File"
                    className="text-white bg-dark border-white"
                    name="thumbnailFilm"
                  >
                    <MdAttachFile
                      style={{ color: 'red', fontWeight: 'bold' }}
                    />
                  </Form.File.Label>
                </Form.File>
              </Col>
            </Row>

            
            -----------------------------------------------------------------------
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Link Film"
                name="linkFilm"
              />
            </Form.Group> */}
            {/* <Button primary className="stretch">
              {' '}
              Save{' '}
            </Button> */}
            <div className="new-form-wrapper">{formEpisode}</div>{' '}
          </Form>

          <div className="justify-center my-3">
            <button
              onClick={this.formAdder}
              className="bg-dark text-white font-weight-bold border-white"
              style={{ width: '100%' }}
            >
              +
            </button>
          </div>

          {/* ------------------------------------------------------------------------------------- */}
        </Container>
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
    addFilm: (file) => dispatch(addFilm(file)),
    addEpisode: (file) => dispatch(addEpisode(file)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFilmForm);
