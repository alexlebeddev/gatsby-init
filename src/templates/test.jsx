import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import _ from 'lodash';

import PageWrapper from '../component/pageWrapper';

class Test extends Component {
  render() {
    console.log(_.omit(this.props, ['i18n']))
    return (
      <PageWrapper {...this.props}>
        {JSON.stringify(_.omit(this.props, ['i18n']))}
        <br />
        {this.props.location.params.ccc}
        <br />
        {this.props.location.pathname}
        <br />
        {this.props.t('test')}
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

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Test));
