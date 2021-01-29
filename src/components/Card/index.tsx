import React from 'react';

import {
  Container,
  Content,
  TitleBox,
  Title,
} from '../../styles/components/Card';

import Description from '../Description';
import Media from '../Media';

const Card: React.FC = () => {
  return (
    <Container>
      <Content>
        <TitleBox>
          <Title>O que é o StudiHub?</Title>
        </TitleBox>

        <Description
          text="Somos uma plataforma de educação que conecta estudantes universitários e
                estimula a troca de conhecimentos. Nosso objetivo é entregar à você
                uma ponte que o conecte a outros estudantes nos momentos de dificuldade,
                quando você precisa de uma ajudinha com o conteúdo, seja de Física
                Experimental, História Antiga ou Anatomia. Por outro lado, sabe aquela
                matéria que você mandou bem demais? Então, com o StudiHub você compartilha
                o que sabe marcando um hub. Acreditamos no diálogo, no ensino,
                na troca humana como a melhor forma de aprender!"
        />

        <Media />
      </Content>
    </Container>
  );
};

export default Card;
