import styled from "styled-components";
import { UpDownAnimation } from "../../utils/animations";

const Container = styled.div`
  background-image: url("bg.png");
  width: 100vw;
  height: 100%;

  display: flex;
  margin-top: -10px;
  z-index: -1;
`;

const Infos = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Images = styled.div`
  display: flex;
  align-items: center;
`;

const FixedImage = styled.div`
  position: absolute;
  z-index: 0;
`;

const FloatImage = styled.div`
  z-index: 1;
  position: relative;
  left: 30%;
  animation: ${UpDownAnimation} 2s infinite alternate-reverse ease-in-out;
`;

export const Styles = {
  Container,
  Infos,
  Images,
  FixedImage,
  FloatImage,
};
