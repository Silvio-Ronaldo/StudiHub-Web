import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  color: ${props => props.theme.colors.text};
  background-color: transparent !important;

  box-shadow: none;
  border-radius: 3px;

  width: 100%;
  padding-top: 25px;
  margin-bottom: 20px;

  position: fixed;
  transition: all 150ms ease 0s;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  min-height: 50px;
  width: 100%;
  max-width: 1140px;

  margin: 0 auto;
  padding: 0 15px;
`;

export const Brand = styled.div`
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
