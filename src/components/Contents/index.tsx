import React from 'react';

import { Container } from '../../styles/components/Contents';

import Card from '../Card';
import Animation from '../Animation';

const Contents: React.FC = () => {
  return (
    <Container>
      <Card
        title="O que é o StudiHub?"
        text="Somos uma plataforma de educação que conecta estudantes universitários e
              estimula a troca de conhecimentos. Nosso objetivo é entregar à você
              uma ponte que o conecte a outros estudantes nos momentos de dificuldade,
              quando você precisa de uma ajudinha com o conteúdo, seja de Física
              Experimental, História Antiga ou Anatomia. Por outro lado, sabe aquela
              matéria que você mandou bem demais? Então, com o StudiHub você compartilha
              o que sabe marcando um hub. Acreditamos no diálogo, no ensino,
              na troca humana como a melhor forma de aprender!"
        image="https://i.imgur.com/LsBCuTr.jpg"
      />

      <div style={{ marginTop: 10 }}>
        <Animation animation="studentsLearning" />
      </div>
    </Container>
  );
};

export default Contents;
