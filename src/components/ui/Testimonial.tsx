import React from 'react';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

interface TestimonialProps {
  name: string;
  testimonial: string;
  imageSource?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, testimonial, imageSource }) => {
  return (
    <figure style={{ marginRight: '3rem' }}>
      <Card>
        <Meta
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={name}
          description={`<pre>&quot;${testimonial}&quot;<pre>`}
        />
      </Card>
    </figure>
  );
};

export default Testimonial;
