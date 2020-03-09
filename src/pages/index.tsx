import HomeCTASection from '@/containers/home/CTASection';
import HomeProductsSection from '@/containers/home/ProductsSection';
import HomeTestimonialsSection from '@/containers/home/TestimonialsSection';
import HomeVideoSection from '@/containers/home/VideoSection';
import Layout from '@/layouts/Layout';
import React from 'react';
import SEO from '@/components/SEO';


const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" meta={[]} />
    <HomeCTASection />
    <HomeVideoSection />
    <HomeProductsSection />
    <HomeTestimonialsSection />
  </Layout>
);

export default IndexPage;
