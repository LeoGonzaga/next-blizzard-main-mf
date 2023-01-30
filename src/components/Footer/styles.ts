import styled from "styled-components";
import { ParticlesAnimation, UpDownAnimation } from "../../utils/animations";

const Container = styled.div`
  background-image: url("bg.png");
  height: 100%;
  background-size: cover;
  display: flex;
  margin-top: -10px;
  z-index: -1;

  margin-left: 100px;
`;

const Infos = styled.div`
  width: 30%;
  margin-top: 100px;
  padding-left: 80px;
  display: flex;
  flex-direction: column;
  color: #fff;

  div {
    display: flex;
    margin: 10px 0px;
    img {
      margin-right: 10px;
    }
  }

  p {
    font-size: 14px;
    color: #828792;
    font-family: "Poppins";
  }

  img {
    margin-bottom: 10px;
  }

  button {
    width: 230px;
    margin: 20px 0px;
  }
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
  animation: ${UpDownAnimation} 3s infinite alternate-reverse ease-in-out;
`;

const Particles = styled.div`
  width: 3px;
  height: 10px;
  background-color: #fff;
  position: absolute;
  opacity: 0.5;
`;

export const Styles = {
  Container,
  Infos,
  Images,
  FixedImage,
  FloatImage,
  Particles,
};
