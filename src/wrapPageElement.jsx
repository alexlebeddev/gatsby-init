import React from 'react';
import PropTypes from 'prop-types';
import * as queryString from 'query-string';
import { match } from '@reach/router/lib/utils';

const Index = ({ element, props }) => {
  const {
    location,
    pathContext,
  } = props;

  location.searchParams = location.search ? queryString.parse(location.search) : {};
  const parseURL = pathContext.slug ? match(pathContext.slug, location.pathname) : null;

  location.params = parseURL ? parseURL.params : {};

  return element;
};

Index.propTypes = {
  element: PropTypes.element.isRequired,
  props: PropTypes.shape({
    location: PropTypes.shape().isRequired,
    pathContext: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Index;
