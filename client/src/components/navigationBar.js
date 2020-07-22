import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './button';
import dumbflix_logo from '../assets/dumbflix_logo.png';
import LoginForm from './form/login';
import RegistrationForm from './form/registration';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showregister: false,
      isToggleOn: true,
    };

    this.popUpModalLogin = this.popUpModalLogin.bind(this);
    this.popUpModalregister = this.popUpModalregister.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // Method
  closeModal() {
    this.setState((state) => ({
      showlogin: false,
      showregister: false,
    }));
  }
  popUpModalLogin() {
    this.setState((state) => ({
      showlogin: true,
    }));
  }

  popUpModalregister() {
    this.setState((state) => ({
      showregister: true,
    }));
  }

  render() {
    return (
      <Styles>
        <Navbar className="black" variant="dark" expand="lg">
          <Logo fixed="top" src={dumbflix_logo} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Item>
                {/* <Nav.Link> */}
                <a href="/">Home</a>
                {/* <Link to="/">Home</Link> */}
                {/* </Nav.Link> */}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/series">TV Show</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/Movie">Movies</Link>
                </Nav.Link>
              </Nav.Item>
              <div className="center">
                <div onClick={this.popUpModalregister}>
                  <Button> Register </Button>
                </div>
                <div onClick={this.popUpModalLogin}>
                  <Button primary>Login</Button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Modal callback */}
        <LoginForm
          show={this.state.showlogin}
          openModal={this.popUpModalLogin}
          closeModal={this.closeModal}
        />
        <RegistrationForm
          showregister={this.state.showregister}
          openModalregister={this.popUpModalregister}
          closeModal={this.closeModal}
        />
      </Styles>
    );
  }
}

export default NavigationBar;

const Styles = styled.div`
  .navbar {
    background-color: #1f1f1f;
  }

  .navbar-brand {
    color: white;
    position: absolute;
    left: calc(50% - 50px);
    top: 8px;
  }

  .navbar-nav {
    width: 100%;
  }

  a,
  .navbar-nav .nav-link {
    font-family: 'Product sans';
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-right: 15px;

    &:hover {
      color: #e50914;
      text-decoration: none;
    }
  }

  .center {
    display: flex;
    margin-top: 5px;
    margin-left: auto !important;
    justify-content: flex-end;
  }

  @media (max-width: 900px) {
    .center {
      display: block;
      margin: 0 auto;
      width: 100%;

      Button {
        margin: 5px;
        width: 100%;
      }
    }
  }
`;

const Logo = styled.img`
  width: 8rem;
  height: 3.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
