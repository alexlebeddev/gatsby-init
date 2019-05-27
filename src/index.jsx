import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './index.css';
import store from './store';

const Index = ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
);

Index.propTypes = {
  element: PropTypes.element,
};

Index.defaultProps = {
  element: null,
};

export default Index;
