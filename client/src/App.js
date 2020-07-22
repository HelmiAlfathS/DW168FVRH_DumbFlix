import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import GlobalStyle from './components/global';
import Home from './pages/home';
import Movie from './pages/movies';
import Series from './pages/series';
import Contact from './pages/contact';
import Transaksi from './pages/payment';
import DetailTransaction from './pages/transaction';
import AddFilm from './pages/addFilm';
import MovieAdmin from './pages/movieAdmin';
import ContactEdit from './pages/contactEdit';
import Profil from './pages/profil';
import NavigationBar from './components/navigationBar';
import NavigationBackup from './components/navigtionBackup';
import Home2 from './pages/home2';
import Detail from './pages/detail';
import { login, register } from './redux/actions/auth';
import { connect } from 'react-redux';
import './App.scss';
import { Alert } from 'react-bootstrap';

// import Modals from './components/testmodal';

// import Jumbotron from './components/hero'

class App extends React.Component {
  render() {
    const { data: dataUser } = this.props.auth;
    const PrivateRouteAdmin = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          dataUser.role === 1 ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
    const PrivateRouteUser = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          dataUser.role === 0 ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
    const PrivateRouteAuth = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          dataUser.subscribe ? (
            <Component {...props} />
          ) : (
            <Redirect to="/payment" />
          )
        }
      />
    );
    return (
      <Fragment>
        <GlobalStyle />
        <Router>
          <NavigationBackup />
          <Switch>
            {/* Public Page */}
            <Route exact path="/" component={Home} />

            {/* Auth Page */}
            <PrivateRouteAdmin
              exact
              path="/transaction"
              component={DetailTransaction}
            />
            <PrivateRouteAdmin
              exact
              path="/movie-list"
              component={MovieAdmin}
            />
            <PrivateRouteAuth exact path="/detail/:id" component={Detail} />

            <Route path="/profil" component={Profil} />
            <Route path="/movie" component={Movie} />
            <Route path="/series" component={Series} />
            <Route path="/contact" component={Contact} />
            <Route path="/home2" component={Home2} />

            <Route path="/contactedit" component={ContactEdit} />
            <Route path="/payment" component={Transaksi} />

            <Route path="/film" component={AddFilm} />
          </Switch>

          {/* <Jumbotron /> */}
        </Router>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.authReducer,
  };
};
export default connect(mapStateToProps, { login, register })(App);
