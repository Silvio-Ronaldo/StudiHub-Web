import React from 'react';

import { Container } from '../../styles/components/Media';

interface PropsMedia {
  image: string;
}

const Media: React.FC<PropsMedia> = ({ image }: PropsMedia) => {
  return <Container image={image} />;
};

export default Media;
