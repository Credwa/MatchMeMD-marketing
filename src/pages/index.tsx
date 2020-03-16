import HomeCTASection from '@/containers/home/CTASection';
import HomeProductsSection from '@/containers/home/ProductsSection';
import HomeTestimonialsSection from '@/containers/home/TestimonialsSection';
import HomeVideoSection from '@/containers/home/VideoSection';
import Layout from '@/layouts/Layout';
import React from 'react';
import ReadyCTA from '@/containers/ReadyCTA';
import SEO from '@/components/SEO';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" meta={[]} />
    <HomeCTASection />
    <HomeVideoSection />
    <HomeProductsSection />
    <HomeTestimonialsSection />
    <ReadyCTA />
    <a href="https://loading.io/icon/" style={{ position: 'absolute', opacity: '0' }}>
      The backrounds was provided by loading io
    </a>
  </Layout>
);

export default IndexPage;
