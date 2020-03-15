import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { VALUES } from '@/themes/variables';

interface Props {
  socialMedia: 'facebook' | 'twitter' | 'instagram' | 'youtube';
  link: string;
  height: number;
  width: number;
}

const SocialMediaLink = styled.a`
  padding: 3rem 0.5rem;
  @media (min-width: ${VALUES.TABLET_MIN_WIDTH}px) {
    padding: 0 0.5rem;
  }
`;

const SocialMedia: React.FC<Props> = ({ socialMedia, link, height, width }) => {
  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
        relativePath
      }
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
        relativePath
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
        relativePath
      }
      youtube: file(relativePath: { eq: "youtube.svg" }) {
        publicURL
        relativePath
      }
    }
  `);
  return (
    <SocialMediaLink href={link} target="_blank" rel="noopener noreferrer">
      <img src={data[socialMedia].publicURL} alt={data[socialMedia].relativePath} height={height} width={width} />
    </SocialMediaLink>
  );
};

export default SocialMedia;
