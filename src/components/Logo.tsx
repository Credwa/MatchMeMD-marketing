import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
      alt={data.logo.relativePath}
      width={width}
      height={height}
      style={{ paddingTop: '10px' }}
    />
  );
};

export default Logo;
