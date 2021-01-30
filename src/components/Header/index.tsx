import React, { useState, useEffect } from 'react';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

import {
  Container,
  Content,
  Brand,
  LinkList,
  StyledLink,
} from '../../styles/components/Header';

const Header: React.FC = () => {
  const [header, setHeader] = useState('header');

  const listenScrollEvent = (event: any): any => {
    if (window.scrollY < 400) {
      return setHeader('header');
    }

    return setHeader('header2');
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, [header]);

  return (
    <Container visibility={header}>
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
