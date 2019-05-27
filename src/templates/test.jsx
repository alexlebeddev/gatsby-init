import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageWrapper from '../component/pageWrapper';

class Test extends Component {
  render() {
    return (
      <PageWrapper {...this.props}>
        test
      </PageWrapper>
    );
  }
}

Test.propTypes = {
};

Test.defaultProps = {
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
