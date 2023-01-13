import styled from "styled-components";
import { FadeInAnimation } from "../../utils/animations";

const Container = styled.div<{ bgCover: number }>`
  background-image: ${(props) =>
    ` linear-gradient(to bottom, transparent 0%, #020203 80%),url(background-${props.bgCover}.png)`};
  height: 736px;
  background-size: contain;
  animation: ${FadeInAnimation} 0.6s ease-in;
  transition: "animation 0.2s ease-out";
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
