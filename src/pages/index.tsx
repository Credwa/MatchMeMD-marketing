import React from 'react';
import { Link } from 'gatsby';
import Button from 'antd/es/button';
import Layout from '@/layouts/layout';
import SEO from '@/components/seo';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" meta={[]} />
    <Button type="primary">Hello</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
