import React from 'react';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

import {
  Container,
  Content,
  Brand,
  LinkList,
  StyledLink,
} from '../../styles/components/Header';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Brand>StudiHub</Brand>

        <div>
          <LinkList>
            <li>
              <StyledLink to="https://google.com">Quem Somos</StyledLink>
            </li>
            <li>
              <StyledLink to="https://google.com">Como funciona</StyledLink>
            </li>
            <li>
              <StyledLink to="https://google.com">Download</StyledLink>
            </li>
            <li>
              <StyledLink to="https://google.com">
                <FiTwitter fill="true" />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="https://google.com">
                <FiInstagram fill="true" />
              </StyledLink>
            </li>
            <li>
              <StyledLink to="https://google.com">
                <FiFacebook fill="true" />
              </StyledLink>
            </li>
          </LinkList>
        </div>
      </Content>
    </Container>
  );
};

export default Header;
