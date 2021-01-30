import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10%;

  background-color: ${props => props.theme.colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1rem;
    font-weight: 300;

    color: ${props => props.theme.colors.text};

    padding: 10px 0;
  }
`;
