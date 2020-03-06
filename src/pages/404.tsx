import React from 'react';

import Layout from '@/layouts/Layout';
import SEO from '@/components/SEO';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" meta={[]} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
