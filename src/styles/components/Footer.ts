import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10%;

  background-color: ${props => props.theme.colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;

  span {
    font-size: 1rem;
    font-weight: 300;

    color: ${props => props.theme.colors.text};

    padding: 10px 0;

    @media (max-width: 440px) {
      font-size: 0.8rem;
    }

    @media (max-width: 340px) {
      font-size: 0.6rem;
    }
  }
`;
