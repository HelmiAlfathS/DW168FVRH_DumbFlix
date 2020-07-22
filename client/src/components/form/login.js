import React, { Component } from 'react';
import { Form, Modal, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
// import { login } from '../../redux/actions/register';
import { login } from '../../redux/actions/auth';
import Button from '../button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      user: {},
    };
  }
  handleChangeInput = (e) => {
    const { user } = this.state;
    this.setState({
      user: { ...user, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.user);
    await this.props.login(this.state.user); //this state user itu body yg menyimpan data
    this.props.closeModal();
    this.setState({ user: {} });
    // this.props.history.push('/contactedit');

    //masukan action login dari redux please this.props.login(data)
  };
  render() {
    const { data, loading, error } = this.props;
    const { show, user } = this.state;
    return (
      <>
        <Styles>
          <Modal show={this.props.show}>
            <Modal.Header
              closeButton
              onClick={this.props.closeModal}
            ></Modal.Header>
            <Modal.Body closeButton>
              <Container>
                <Modal.Title className="text-white mb-3 form-title">
                  Log in
                </Modal.Title>
                <Form>
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={this.handleChangeInput}
                      value={user.email ? user.email : ''}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleChangeInput}
                      value={user.password ? user.password : ''}
                    />
                  </Form.Group>
                </Form>
                <div onClick={this.handleSubmit}>
                  <Button primary className="stretch">
                    {' '}
                    Log in{' '}
                  </Button>
                </div>

                <p className="text-white text-center">
                  {' '}
                  Don't have an account?
                  <span>
                    <Link to="#">Here</Link>
                  </span>
                </p>
              </Container>
            </Modal.Body>
          </Modal>
        </Styles>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { data, loading, error } = state.authReducer; //namanya register krn ambil dari initial state register  di registerR reducer yg didalamnya juga ada login
  return {
    data,
    loading,
    error,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    login,
  })(LoginForm)
);
const Styles = styled.div``;
