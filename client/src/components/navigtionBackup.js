import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './button';
import Profilicon from './profilicon';
import dumbflix_logo from '../assets/dumbflix_logo.png';
import LoginForm from './form/login';
import RegistrationForm from './form/registration';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { register, login, logout } from '../redux/actions/auth';

class NavigationBackup extends Component {
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
  handleLogout = () => {
    try {
      this.props.logout();
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const guest = (
      <Fragment>
        <div onClick={this.popUpModalregister}>
          <Button> Register </Button>
        </div>
        <div onClick={this.popUpModalLogin}>
          <Button primary>Login</Button>
        </div>
      </Fragment>
    );
    const userloged = (
      <Fragment>
        {/* <div onClick={this.handleLogout}>
          <Button> Logout </Button>
        </div> */}
        <Profilicon />
      </Fragment>
    ); // buat lebih dinamis dong , jngan usera daong //simpan dispatch logoit
    let token = false;
    if (localStorage.token) {
      token = true;
    }
    return (
      <Styles>
        <Navbar className="black" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                {/* <a href="/">Home</a> */}
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
              <div className="center">{token ? userloged : guest}</div>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" className=" d-flex justify-content-center">
            <img
              src={dumbflix_logo}
              width="100"
              height=""
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
          </Navbar.Brand>
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

const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};

export default withRouter(
  connect(mapStateToProps, { register, login, logout })(NavigationBackup)
);

const Styles = styled.div`
  .navbar {
    background-color: #1f1f1f;
  }

  .navbar-brand {
    color: white;
    position: absolute;
    left: calc(50% - 50px);
    // top: 8px;
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
    // .center {
    //   display: block;
    //   margin: 0 auto;
    //   width: 100%;

    //   Button {
    //     margin: 5px;
    //     width: 100%;
    //   }
    // }
    .navbar-brand {
      color: white;
      position: absolute;
      left: calc(50% - 50px);
      top: 8px;
    }
  }
`;

// const Logo = styled.img`
//   width: 8rem;
//   height: 3.5rem;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
