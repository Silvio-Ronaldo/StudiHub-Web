import React from 'react';

import { Container } from '../../styles/components/Media';

interface PropsMedia {
  backgroundImage: string;
}

const Media: React.FC<PropsMedia> = ({ backgroundImage }: PropsMedia) => {
  return <Container image={backgroundImage} />;
};

export default Media;
