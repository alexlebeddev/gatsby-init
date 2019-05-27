import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import * as queryString from 'query-string';
import { match } from '@reach/router/lib/utils';

import 'bootstrap/dist/css/bootstrap.css';

import {
  setToken,
  dropUser,
  dropToken,
  loginConfirm,
} from './action/auth';


class App extends Component {
  constructor(...props) {
    super(...props);

    const {
      location,
      pageResources,
    } = props[0];

    location.searchParams = location.search ? queryString.parse(location.search) : {};
    const parseURL = match(pageResources.page.path, location.pathname);

    location.params = parseURL ? parseURL.params : {};

    this.state = {
      view: this.checkAuth(props[0]),
    };
  }

  componentWillReceiveProps(props) {
    const {
      token,
      user,
    } = this.props;

    if (props.token !== token
      || props.user !== user) {
      this.setState({
        view: this.checkAuth(props),
      });
    }
  }

  checkAuth = (props) => {
    const {
      loginConfirmCall,
      dropTokenCall,
      dropUserCall,
      setTokenCall,
      navigate,
    } = this.props;

    if (props.token && !props.user) {
      loginConfirmCall();
      return false;
    }

    if (!props.token) {
      try {
        const lSore = JSON.parse(localStorage.getItem('token'));
        if (lSore) {
          setTokenCall(lSore);

          if (props.location.pathname === '/login') {
            navigate('/home');
          }

          return false;
        }
      } catch (e) {  }
      dropTokenCall();
      dropUserCall();
      return true;
    }

    if (props.token && props.location.pathname === '/login') {
      navigate('/home');
      return false;
    }

    return true;
  }

  render() {
    const {
      children,
      loaderView,
    } = this.props;

    const { view } = this.state;

    return (
      <>
        {view ? children : null}
        <br />
        <Link to="/home/">home</Link>

        <br />
        <Link to="/test/fff?gg=gg">test</Link>

        <br />
        <Link to="/login">login</Link>

        {loaderView && (
          <div className="loader fade show" tabIndex="-1">
            <Spinner animation="border" variant="primary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
  user: PropTypes.shape(),
  token: PropTypes.shape(),
  location: PropTypes.shape().isRequired,
  pageResources: PropTypes.shape().isRequired,
  loaderView: PropTypes.bool,
  setTokenCall: PropTypes.func.isRequired,
  dropTokenCall: PropTypes.func.isRequired,
  dropUserCall: PropTypes.func.isRequired,
  loginConfirmCall: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: null,
  token: null,
  loaderView: false,
  children: null,
};

const mapStateToProps = store => ({
  user: store.auth.user,
  token: store.auth.token,
  loaderView: store.loader.view,
});

const mapDispatchToProps = dispatch => ({
  setTokenCall: data => dispatch(setToken(data)),
  dropTokenCall: () => dispatch(dropToken()),
  dropUserCall: () => dispatch(dropUser()),
  loginConfirmCall: () => dispatch(loginConfirm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
