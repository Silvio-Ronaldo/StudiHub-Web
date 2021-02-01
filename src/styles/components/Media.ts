import styled from 'styled-components';

export const Container = styled.div<{ image: string }>`
  background-image: url(${props => props.image});
  transform: translate3d(0px, 0px, 0px);

  border: 0;
  width: 600px;
  max-width: 600px;
  height: 380px;
  max-height: 600px;

  margin: 40px 0 0 0;
  display: flex;
  padding: 0;
  overflow: hidden;
  position: relative;
  align-items: center;
  background-size: cover;

  border-radius: 3px;
  box-shadow: 2px 2px 3px ${props => props.theme.colors.lightBackground};

  @media (max-width: 768px) {
    display: none;
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

  @media (max-width: 1210px) {
    justify-content: center;
  }
`;
