import React from 'react';
import { Link } from 'gatsby';

import Layout from '@/layouts/layout';
import SEO from '@/components/seo';

const SecondPage: React.FC = () => (
  <Layout>
    <SEO title="Page two" meta={[]} />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
