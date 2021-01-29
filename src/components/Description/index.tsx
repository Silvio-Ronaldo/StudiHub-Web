import React from 'react';

import { Container } from '../../styles/components/Description';

interface PropsDescription {
  text: string;
}

const Description: React.FC<PropsDescription> = ({
  text,
}: PropsDescription) => {
  return (
    <Container>
      <p>{text}</p>
    </Container>
  );
};

export default Description;
