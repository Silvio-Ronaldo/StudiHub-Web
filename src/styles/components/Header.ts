import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const Container = styled.header<{ visibility: string }>`
  background-color: ${props =>
    props.visibility === 'header'
      ? 'transparent'
      : `${props.theme.colors.primary}`};

  border-bottom: ${props =>
    props.visibility === 'header'
      ? 'none'
      : `1px solid ${props.theme.colors.lightBackground}`};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;

  color: ${props => props.theme.colors.text};

  box-shadow: none;
  border-radius: 3px;

  width: 100vw;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 20px;

  position: fixed;
  transition: all 150ms ease 0s;
  z-index: 1100;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  min-height: 50px;
  width: 100vw;

  margin: 0 auto;
  padding: 0 15px;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }

  @media (min-width: 600px) {
    min-height: 64px;
  }

  @media (min-width: 600px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const TopLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;

export const BrandGroup = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
`;

export const Logo = styled.img`
  height: 50px;
  width: 50px;

  margin-right: 20px;
`;

export const Name = styled.div`
  flex: 1;
`;

export const LinkList = styled.ul`
  margin: 0;
  padding-top: 0;
  padding-left: 0;
  padding-bottom: 0;

  font-size: 0.9rem;
  list-style: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  line-height: 1.5em;

  @media (max-width: 1210px) {
    display: none;
  }

  li {
    float: left;
    display: block;
    position: relative;

    width: auto;
    margin: 0;
    padding: 0 16px;

    border-radius: 3px;

    &:hover {
      box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
        0 7px 10px -5px rgba(0, 0, 0, 0.15);
      transition: all 150ms ease 0s;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  position: relative;

  background: transparent;
  color: inherit;

  box-shadow: none;
  text-decoration: none;
  line-height: 20px;
  text-transform: uppercase;

  margin: 0;
  padding: 0.9rem;

  min-height: auto;

  text-align: center;
  white-space: nowrap;
  will-change: box-shadow, transform;
  touch-action: manipulation;
`;

export const Menu = styled.button`
  display: none;

  width: 40px;
  height: 40px;
  border: none;

  background-color: transparent;

  will-change: box-shadow, transform;
  touch-action: manipulation;

  &:hover {
    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
      0 7px 10px -5px rgba(0, 0, 0, 0.15);
    transition: all 150ms ease 0s;
    cursor: pointer;
  }

  @media (max-width: 1210px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
