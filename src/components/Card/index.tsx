import React from 'react';

import {
  Container,
  Content,
  TitleBox,
  Title,
  InfoGroup,
} from '../../styles/components/Card';

import Description from '../Description';
import Media from '../Media';

interface cardProps {
  title: string;
  text: string;
  image: string;
  order: string;
}

const Card: React.FC<cardProps> = ({
  title,
  text,
  image,
  order,
}: cardProps) => {
  return (
    <Container>
      <Content>
        <TitleBox>
          <Title>{title}</Title>
        </TitleBox>

        <InfoGroup order={order}>
          <Description text={text} />

          <Media image={image} />
        </InfoGroup>
      </Content>
    </Container>
  );
};

export default Card;
