import React, { Component, Fragment } from 'react';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth';
import { Route, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaTicketAlt,
  FaSearchLocation,
  FaTransgender,
  FaFilm,
} from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { IconContext } from 'react-icons';

class Profilicon extends Component {
  handleLogout = () => {
    try {
      this.props.logout();
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { data } = this.props.auth;
    return (
      <Styles>
        <IconContext.Provider
          value={{
            color: '#E50914',
            size: '18px',
            style: { marginRight: '20px', marginLeft: '5px' },
          }}
        >
          <DropdownButton
            className="d-flex"
            id="dropdown-basic-button"
            drop="down"
            title={
              <div className="d-flex">
                <img
                  className="profil-icon"
                  src="http://w3schools-fa.ir/howto/img_snow.jpg"
                />
                <p
                  className="text-white ml-2 font-weight-bold"
                  style={{ marginBottom: '0', marginTop: '3px' }}
                >
                  {data.fullName}
                </p>
              </div>
            }
            variant="dark"
          >
            <Dropdown.Menu style={{ marginLeft: '-50px' }}>
              {data.role !== 1 ? (
                <>
                  <Dropdown.Item href="/payment">
                    <MdPayment />
                    Pay
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/profil"
                    style={{
                      borderBottom: '2px solid #A8A8A8',
                    }}
                  >
                    <FaUserCircle /> Profil
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.handleLogout}>
                    <RiLogoutCircleLine /> Logout
                  </Dropdown.Item>
                </>
              ) : (
                false
              )}
              {data.role === 1 ? (
                <>
                  <Dropdown.Item href="/movie-list">
                    {' '}
                    <FaFilm />
                    List Film
                  </Dropdown.Item>

                  <Dropdown.Item href="/transaction" className="botline">
                    <MdPayment />
                    Transaction
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/profil"
                    className="botline"
                    style={{ borderBottom: '2px solid #A8A8A8' }}
                  >
                    <FaUserCircle /> Profil
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.handleLogout}>
                    <RiLogoutCircleLine /> Logout
                  </Dropdown.Item>
                </>
              ) : (
                false
              )}
            </Dropdown.Menu>
          </DropdownButton>
        </IconContext.Provider>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.authReducer.isLogin,
    auth: state.authReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profilicon)
);

const Styles = styled.div`
  .btn {
    background-color: rgba(0, 0, 0, 0);
    border: rgba(0, 0, 0, 0);
    margin-top: -10px
  }
  .btn:focus {
    background-color: rgba(0, 0, 0, 0);
    border: rgba(0, 0, 0, 0);
    rgba(0, 0, 0, 0);
    background: rgba(0, 0, 0, 0);
  }
  .profil-icon{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid white;
  }
  .show {
    background-color: red;
    background: #1F1F1F; 
    border: rgba(0, 0, 0, 0);
    color: red;
  }

  .dropdown-item{
    background-color: #1F1F1F;
    // margin-top: 5px;
    // margin-bottom: 5px;
  }
  .dropdown-item{
    padding: 7px;
    margin-right: 20px
  }
  .dropdown-menu {
    background-color: #1f1f1f;
    width: 10 px !important;
    position: absolute;
    top: 22px;
    right: 200px;
    padding: 1px;
    border: none;
    z-index: 2;
  }
  .dropdown-toggle::after {
    display: none;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}
`;
