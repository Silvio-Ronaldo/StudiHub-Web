import React from 'react';

import { Container } from '../../styles/pages/Home';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Contents from '../../components/Contents';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Contents />
    </Container>
  );
};

export default Home;
