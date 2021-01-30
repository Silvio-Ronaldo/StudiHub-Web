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

      <Card
        title="Preciso de uma ajudinha e agora?"
        text="Com o StudiHub você pode encontrar alguém que já passou pelas mesmas dificuldades.
              Basta acessar o aplicativo, cadastrar-se como um hubinino,
              selecionar a matéria que você precisa de uma ajudinha
              e escolher alguém que encaixe no seu momento e possibilidades. Prontinho!
              Ao marcar um hub - o encontro presencial - você está dando um passo na sua aprendizagem."
        image="https://i.imgur.com/UpGtsoG.jpg"
      />
      <div style={{ marginTop: 10 }}>
        <Animation animation="studentGirl" />
      </div>

      <Card
        title="Quero compartilhar o que eu sei e ajudar alguém!"
        text="Parabéns, essa é uma bela atitude e merece toda a nossa admiração. Com o StudiHub você pode
              cadastrar-se como um hubber, escolher a(s) matéria(s) que você tem algo a compartilhar,
              definir seus critérios, como gratuidade ou não, e esperar alguém lhe solicitar. A cada hub
              realizado, sua avaliação na plataforma aumenta e você será melhor recomendado."
        image="https://i.imgur.com/lAFhg1O.jpg"
      />
      <div style={{ marginTop: 10 }}>
        <Animation animation="welcome" />
      </div>

      <Card
        title="Como acessar o StudiHub?"
        text="Para baixar nosso aplicativo, basta acessar a loja de aplicativos do seu celular
              e procurar por StudiHub. Nosso aplicativo é leve, intuitivo e seguro.
              Todos os dados fornecidos são mantidos em consonância à Lei Geral de Proteção de Dados.
              Estamos em constante evolução para oferecer a melhor experiência de aprendizado e
              conhecimento. Juntos por uma melhor experiência universitária."
        image="https://i.imgur.com/iaskwSc.jpg"
      />
    </Container>
  );
};

export default Contents;
