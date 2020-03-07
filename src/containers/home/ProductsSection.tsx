import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  margin-top: 5rem;
  @media (min-width: 768px) {
    margin-top: 20rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 30% auto;
  }

  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    margin-top: 30rem;
    max-width: ${VALUES.PAGE_MAX_WIDTH}px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProductsSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      discussionForum: file(relativePath: { eq: "discussion-forum.svg" }) {
        publicURL
        relativePath
      }
      leaderboard: file(relativePath: { eq: "leaderboard.svg" }) {
        publicURL
        relativePath
      }
    }
  `);

  console.log(data);

  const isLargeScreen = useMediaQuery({ minWidth: VALUES.PAGE_MAX_WIDTH });
  let containerStyle = {};
  if (isLargeScreen) {
    containerStyle = {
      width: '100vw',
      margin: 'auto'
    };
  }
  return (
    <div style={containerStyle}>
      <Section>
        <Title level={3} style={{ color: `${COLORS.MMD_PRIMARY_10}` }}>
          Full-flegded discussion forum
        </Title>
        <Paragraph
          style={{
            color: `${COLORS.MMD_PRIMARY_9}`,
            fontSize: VALUES.FONT_16.SIZE,
            lineHeight: VALUES.FONT_16.LINE_HEIGHT,
            maxWidth: '40rem'
          }}
        >
          Get on demand access to our library of content with fun courses and labs. Learn at home on your devices, or
          download content on our mobile version for on the go offline learning.
        </Paragraph>
        <MDButton
          type="primary"
          size="large"
          style={{
            backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
            borderColor: `${COLORS.MMD_SECONDARY_4}`,
            fontSize: '.875rem',
            width: '48%',
            minWidth: '9rem',
            maxWidth: '15rem',
            margin: '2rem 0 3rem 0'
          }}
        >
          Learn more
        </MDButton>

        <img
          src={data.discussionForum.publicURL}
          alt="doctor looks at patient electronic chart tablet"
          style={{ maxHeight: '40rem' }}
        />
      </Section>

      <Section>
        <Title level={3} style={{ color: `${COLORS.MMD_PRIMARY_10}` }}>
          See how you compare
        </Title>
        <Paragraph
          style={{
            color: `${COLORS.MMD_PRIMARY_9}`,
            fontSize: VALUES.FONT_16.SIZE,
            lineHeight: VALUES.FONT_16.LINE_HEIGHT,
            maxWidth: '40rem'
          }}
        >
          Challenge easy to difficullt questions and see how you compare with other medical students around the world
          on our leaderboard.
        </Paragraph>
        <MDButton
          type="primary"
          size="large"
          style={{
            backgroundColor: `${COLORS.MMD_SECONDARY_5}`,
            borderColor: `${COLORS.MMD_SECONDARY_4}`,
            fontSize: '.875rem',
            width: '48%',
            minWidth: '9rem',
            maxWidth: '15rem',
            margin: '2rem 0 3rem 0'
          }}
        >
          Learn more
        </MDButton>

        <img
          src={data.leaderboard.publicURL}
          alt="doctor looks at patient electronic chart tablet"
          style={{ maxHeight: '40rem' }}
        />
      </Section>
    </div>
  );
};

export default ProductsSection;
