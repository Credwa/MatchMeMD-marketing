import React from 'react';
import styled from 'styled-components';
import Typography from 'antd/es/typography';
import { Avatar } from 'antd';
import { COLORS, VALUES } from '@/themes/variables';
import { UserOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
const Figure = styled.figure`
  margin-right: 1rem;
  background: ${COLORS.MMD_BACKGROUND};
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 1rem;
  height: max-content !important;
  display: inline-block;
`;

const FigureDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

interface TestimonialProps {
  name: string;
  testimonial: string;
  imageSource?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, testimonial, imageSource }) => {
  return (
    <Figure>
      <FigureDetails>
        <Avatar
          size="large"
          style={{ backgroundColor: `${COLORS.MMD_PRIMARY_6}`, alignSelf: 'center', marginBottom: '1rem' }}
          icon={<UserOutlined />}
        ></Avatar>
        <Title
          level={4}
          style={{
            alignSelf: 'center',
            color: `${COLORS.MMD_PRIMARY_10}`,
            fontSize: VALUES.FONT_16.SIZE,
            lineHeight: VALUES.FONT_16.LINE_HEIGHT
          }}
        >
          {name}
        </Title>
        <Paragraph>
          <q>{testimonial}</q>
        </Paragraph>
      </FigureDetails>
    </Figure>
  );
};

export default Testimonial;
