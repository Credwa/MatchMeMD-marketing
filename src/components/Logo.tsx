import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  width: number;
  height?: number;
}

const Logo: React.FC<Props> = ({ width, height }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "MatchMeMD-logo.svg" }) {
        publicURL
        relativePath
      }
    }
  `);
  return (
    <img
      src={data.logo.publicURL}
      alt="MatchMeMD Logo"
      style={{ paddingTop: '.625rem', width: '35vw', maxWidth: '10rem' }}
    />
  );
};

export default Logo;
