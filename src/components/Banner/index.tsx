import { url } from 'inspector';
import React from 'react';

import {
  Container,
  ExternalBox,
  ContentBox,
} from '../../styles/components/Banner';

const Banner: React.FC = () => {
  return (
    <Container>
      <ExternalBox>
        <ContentBox>
          <div>
            <h1>StudiHub</h1>
            <h3>Conectando o futuro.</h3>
          </div>
        </ContentBox>
      </ExternalBox>
    </Container>
  );
};

export default Banner;
