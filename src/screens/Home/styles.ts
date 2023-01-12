import styled from "styled-components";

const Container = styled.div<{ bgCover: number }>`
  background-image: ${(props) => `url(background-${props.bgCover}.png)`};
  height: 736px;
  background-size: cover;

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1700px;
`;

export const Styles = {
  Container,
  Wrapper,
};
