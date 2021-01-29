import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 0;
`;

export const Content = styled.div`
  max-width: 1140px;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const TitleBox = styled.div`
  color: ${props => props.theme.colors.primary};

  margin: 1.75rem 0 0.9rem;

  min-height: 32px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
`;

export const Title = styled.h2`
  font-size: 2.25rem;

  line-height: 1.5em;
  margin-bottom: 10px;
`;
