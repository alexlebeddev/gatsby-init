import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageWrapper from '../component/pageWrapper';

class Home extends Component {
  render() {
    return (
      <PageWrapper {...this.props}>
        home
      </PageWrapper>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
