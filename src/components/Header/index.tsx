import React, { useState, useEffect } from 'react';
import { FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

import {
  Container,
  Content,
  TopLink,
  BrandGroup,
  Logo,
  Name,
  LinkList,
  StyledLink,
} from '../../styles/components/Header';

import logoSvg from '../../assets/logo-sem-titulo.svg';

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
        <TopLink to="/#top">
          <BrandGroup>
            <Logo src={logoSvg} alt="logo StudiHub" />
            <Name>StudiHub</Name>
          </BrandGroup>
        </TopLink>

        <div>
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
