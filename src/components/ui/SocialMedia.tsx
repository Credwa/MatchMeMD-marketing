import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  socialMedia: 'facebook' | 'twitter' | 'instagram' | 'youtube';
  link: string;
  height: number;
  width: number;
}

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
    <a href={link} target="_blank" style={{ padding: '3rem .5rem' }} rel="noopener noreferrer">
      <img src={data[socialMedia].publicURL} alt={data[socialMedia].relativePath} height={height} width={width} />
    </a>
  );
};

export default SocialMedia;
