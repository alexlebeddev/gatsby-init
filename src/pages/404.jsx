import React from 'react';
import PageWrapper from '../component/pageWrapper';

const NotFoundPage = props => (
  <PageWrapper {...props}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageWrapper>
);

export default NotFoundPage;
