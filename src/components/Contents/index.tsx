import React from 'react';

import { Container } from '../../styles/components/Contents';

import Card from '../Card';
import Animation from '../Animation';

const Contents: React.FC = () => {
  return (
    <Container>
      <Card />

      <Animation />
    </Container>
  );
};

export default Contents;
