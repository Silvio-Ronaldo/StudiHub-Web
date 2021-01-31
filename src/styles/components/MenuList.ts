import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

export const Container = styled.div<{ visible: boolean; header: string }>`
  position: absolute;
  width: 260px;
  right: 30px;
  top: calc(70% + 0px);
  background: ${props =>
    props.header === 'header'
      ? `rgba(0, 0, 0, 0.6)`
      : props.theme.colors.primary};
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
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
