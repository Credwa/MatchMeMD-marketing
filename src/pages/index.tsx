import React from 'react';
import MDButton from '@/components/ui/MDButton';
import Layout from '@/layouts/Layout';
import SEO from '@/components/SEO';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" meta={[]} />
    <MDButton type="primary">Hello</MDButton>
  </Layout>
);

export default IndexPage;
