import React from 'react';
import Lottie from 'react-lottie';

import { Container } from '../../styles/components/Animation';

import studentGirl from '../../lotties/41240-student.json';
import studentsLearning from '../../lotties/30305-back-to-school.json';

interface animationProps {
  animation: string;
}

const Animation: React.FC<animationProps> = ({ animation }: animationProps) => {
  function chooseAnimation(data: string) {
    switch (data) {
      case 'studentGirl':
        return studentGirl;
      case 'studentsLearning':
        return studentsLearning;
      default:
        return false;
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chooseAnimation(animation),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
};

export default Animation;
