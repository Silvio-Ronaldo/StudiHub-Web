import styled from 'styled-components';

export const Container = styled.div`
  margin: -60px 30px 0;

  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  z-index: 3;
  position: relative;

  background: ${props => props.theme.colors.text};
`;
