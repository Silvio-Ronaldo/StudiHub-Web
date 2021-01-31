import React, { useLayoutEffect, useState, useEffect } from 'react';
import { FiTwitter, FiInstagram, FiFacebook, FiMenu } from 'react-icons/fi';

import {
  Container,
  Content,
  TopLink,
  BrandGroup,
  Logo,
  Name,
  LinkList,
  StyledLink,
  Menu,
} from '../../styles/components/Header';

import MenuList from '../MenuList';
import logoSvg from '../../assets/logo-sem-titulo.svg';

const Header: React.FC = () => {
  const [clicked, setClicked] = useState(false);
  const [weight, setWeight] = useState(0);
  const [header, setHeader] = useState('header');

  useLayoutEffect(() => {
    function updateSize() {
      setWeight(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const listenScrollEvent = () => {
    if (window.scrollY < 400) {
      return setHeader('header');
    }

    return setHeader('header2');
  };

  function handleClick() {
    if (clicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, [header]);

  return (
    <Container visibility={header}>
      <MenuList visible={weight < 1210 && clicked} header={header} />
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
              <StyledLink target="_blank" to="//google.com">
                <FiTwitter fill="true" />
              </StyledLink>
            </li>
            <li>
              <StyledLink
                target="_blank"
                to="//www.instagram.com/_studihub/?hl=pt-br"
              >
                <FiInstagram fill="true" />
              </StyledLink>
            </li>
            <li>
              <StyledLink target="_blank" to="//google.com">
                <FiFacebook fill="true" />
              </StyledLink>
            </li>
          </LinkList>
        </div>

        <Menu onClick={handleClick}>
          <FiMenu color="white" size="24" />
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
