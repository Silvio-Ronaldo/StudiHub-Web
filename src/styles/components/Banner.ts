import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('https://i.imgur.com/Ok8PSLD.jpg');
  transform: translate3d(0px, 0px, 0px);

  border: 0;
  height: 90vh;
  margin: 0;
  display: flex;
  padding: 0;
  overflow: hidden;
  position: relative;
  max-height: 1000px;
  align-items: center;
  background-size: cover;
  background-position: center center;
`;

export const ExternalBox = styled.div`
  max-width: 1140px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const ContentBox = styled.div`
  width: auto;
  margin-left: -15px;
  margin-right: -15px;

  div {
    width: 100%;
    position: relative;
    flex-basis: auto;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0;
  }

  h1 {
    display: inline-block;
    position: relative;

    font-size: 4.2rem;
    font-weight: 700;

    background-color: ${props => props.theme.colors.primary};

    padding: 10px;
    border-radius: 3px;

    box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12),
      0 7px 10px -5px rgba(0, 0, 0, 0.15);
  }

  h3 {
    margin: 10px 0 0;
    font-size: 1.3rem;
    max-width: 500px;

    padding: 0 10px;
  }
`;
