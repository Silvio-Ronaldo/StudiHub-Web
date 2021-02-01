import styled from 'styled-components';

export const Container = styled.div`
  padding: 70px 0;
`;

export const Content = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

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

  @media (max-width: 1210px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
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

export const InfoGroup = styled.div<{ order: string }>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1210px) {
    flex-direction: ${props =>
      props.order === 'reverse' ? 'row-reverse' : 'row'};
  }

  @media (max-width: 1210px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
  }
`;
