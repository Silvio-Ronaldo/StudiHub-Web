import React from 'react';

import {
  Container,
  LinkList,
  StyledLink,
} from '../../styles/components/MenuList';

type Props = {
  visible: boolean;
  header: string;
};

const MenuList: React.FC<Props> = ({ visible, header }) => {
  return (
    <Container visible={visible} header={header}>
      <LinkList>
        <li>
          <StyledLink to="/#somos">Quem Somos</StyledLink>
        </li>
        <li>
          <StyledLink to="/#aprender">Quero aprender</StyledLink>
        </li>
        <li>
          <StyledLink to="/#ensinar">Quero ensinar</StyledLink>
        </li>
        <li>
          <StyledLink to="/#baixar">Download</StyledLink>
        </li>
      </LinkList>
    </Container>
  );
};

export default MenuList;
