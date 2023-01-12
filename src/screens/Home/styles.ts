import styled from "styled-components";
import { FadeInAnimation } from "../../utils/animations";

const Container = styled.div<{ bgCover: number }>`
  background-image: ${(props) =>
    ` linear-gradient(to bottom, transparent 0%, #000 80%),url(background-${props.bgCover}.png)`};
  height: 736px;
  background-size: cover;
  animation: ${FadeInAnimation} 0.6s ease-in;
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
