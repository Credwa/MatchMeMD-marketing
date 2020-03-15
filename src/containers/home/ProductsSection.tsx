import Fade from 'react-reveal/Fade';
import MDButton from '@/components/ui/MDButton';
import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { COLORS, VALUES } from '@/themes/variables';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import { useMediaQuery } from 'react-responsive';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  margin-top: 5rem;

  .CTA {
    grid-area: CTA;
    padding-top: 3rem;
  }

  .svgImg {
    grid-area: img;
  }

  @media (min-width: 768px) {
    display: grid;
    margin-top: 5rem;
    grid-template-columns: 50% 50%;
    grid-template-rows: 30% 30% auto;
    grid-template-areas:
      'img CTA'
      'img CTA'
      'img .';
  }

  @media (min-width: ${VALUES.PAGE_MAX_WIDTH}px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
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
      }
      leaderboard: file(relativePath: { eq: "leaderboard.svg" }) {
        publicURL
      }
      devices: file(relativePath: { eq: "devices.svg" }) {
        publicURL
      }
    }
  `);

  const isLargeScreen = useMediaQuery({ minWidth: VALUES.PAGE_MAX_WIDTH });
  let containerStyle = {};
  if (isLargeScreen) {
    containerStyle = {
      width: '100vw',
      margin: 'auto',
      padding: `${VALUES.PAGE_PADDING}`
    };
  }
  return (
    <div style={containerStyle}>
      <Section>
        <div style={{ marginTop: '3rem' }}>
          <Fade left>
            <Title level={3} style={{ color: `${COLORS.MMD_PRIMARY_10}` }}>
              Full-flegded discussion forum
            </Title>
          </Fade>

          <Fade left>
            <Paragraph
              style={{
                color: `${COLORS.MMD_PRIMARY_9}`,
                fontSize: VALUES.FONT_16.SIZE,
                lineHeight: VALUES.FONT_16.LINE_HEIGHT,
                maxWidth: '40rem',
                opacity: `${VALUES.TEXT_OPACITY}`
              }}
            >
              Get on demand access to our library of content with fun courses and labs. Learn at home on your devices,
              or download content on our mobile version for on the go offline learning.
            </Paragraph>
          </Fade>

          <Fade right>
            <MDButton
              type="primary"
              size="large"
              style={{
                backgroundColor: `${COLORS.MMD_PRIMARY_6}`,
                borderColor: `${COLORS.MMD_PRIMARY_5}`,
                fontSize: '1rem',
                width: '48%',
                minWidth: '9rem',
                maxWidth: '15rem',
                margin: '2rem 0 3rem 0'
              }}
              onClick={event => navigate('/subscribe')}
            >
              Learn more
            </MDButton>
          </Fade>
        </div>

        <Fade right className="svgImg">
          <img
            src={data.discussionForum.publicURL}
            alt="doctor looks at patient electronic chart tablet"
            style={{ maxHeight: '40rem', width: '100%' }}
          />
        </Fade>
      </Section>

      <Section className="imageRight">
        <div className="CTA">
          <Fade left>
            <Title level={3} style={{ color: `${COLORS.MMD_PRIMARY_10}` }}>
              See how you compare
            </Title>
          </Fade>

          <Fade left>
            <Paragraph
              style={{
                color: `${COLORS.MMD_PRIMARY_9}`,
                fontSize: VALUES.FONT_16.SIZE,
                lineHeight: VALUES.FONT_16.LINE_HEIGHT,
                maxWidth: '40rem',
                opacity: `${VALUES.TEXT_OPACITY}`
              }}
            >
              Challenge easy to difficult questions and see how you compare with other medical students around the
              world on our leaderboard.
            </Paragraph>
          </Fade>

          <Fade right>
            <MDButton
              type="primary"
              size="large"
              style={{
                backgroundColor: `${COLORS.MMD_PRIMARY_6}`,
                borderColor: `${COLORS.MMD_PRIMARY_5}`,
                fontSize: '1rem',
                width: '48%',
                minWidth: '9rem',
                maxWidth: '15rem',
                margin: '2rem 0 3rem 0'
              }}
              onClick={event => navigate('/subscribe')}
            >
              Learn more
            </MDButton>
          </Fade>
        </div>
        <Fade right>
          <img
            src={data.leaderboard.publicURL}
            alt="doctor looks at patient electronic chart tablet"
            style={{ maxHeight: '40rem' }}
          />
        </Fade>
      </Section>

      <Section style={{ display: 'flex', flexDirection: 'column' }}>
        <Fade left>
          <Title
            level={2}
            style={{
              color: `${COLORS.MMD_PRIMARY_10}`,
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            Available everywhere
          </Title>
        </Fade>
        <Fade right>
          <img src={data.devices.publicURL} alt="Devices" style={{ maxHeight: '20rem', width: '100%' }} />
        </Fade>
      </Section>
    </div>
  );
};

export default ProductsSection;
