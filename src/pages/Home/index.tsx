import React from 'react';

import { Container } from '../../styles/pages/Home';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import Contents from '../../components/Contents';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Contents />
      <Footer />
    </Container>
  );
};

export default Home;
