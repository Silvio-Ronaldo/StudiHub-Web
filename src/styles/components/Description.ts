import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.theme.colors.secondary};

  max-width: 400px;

  margin-top: 15px;
  padding-top: 18px;
  line-height: 2em;

  text-align: left;

  @media (max-width: 1210px) {
    display: flex;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  }
`;
