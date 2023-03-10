import styled from "styled-components";
import { FadeInAnimation } from "../../utils/animations";

const Container = styled.div`
  padding: 3% 98px 0px 98px;

  display: flex;
  animation: ${FadeInAnimation} 0.6s ease-in;
  margin-bottom: 100px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 64px;
  margin-right: 141px;

  img {
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.2s all ease-in-out;
  }
`;

const GrayScale = styled.div<{ isSelected: boolean }>`
  filter: ${(props) => (props.isSelected ? "initial" : "grayscale(100%)")};
  transition: 0.2s ease all;

  &:hover {
    filter: grayscale(0);
  }
`;

const Text = styled.div`
  color: #fff;
  margin-top: 34px;

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110.2%;
    width: 602px;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    margin-top: 16px;
    font-style: normal;
    font-weight: 200;
  }

  button {
    margin-top: 32px;
    height: 52px;
    max-width: 331px;
  }
`;

const Blur = styled.div`
  position: absolute;
  bottom: 30px;
  z-index: 0px;
  width: 270px;
  height: 158px;
  background: #020203;
  opacity: 0.7;
  filter: blur(10px);
  border-radius: 4px;
`;

const Trailler = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-size: contain;
  button {
    color: #fff;
    text-align: right;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    margin-top: 52px;
    margin-bottom: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: 0.3s all ease;

    &:hover {
      filter: brightness(0.75);
    }
  }
`;

const Video = styled.div<{ thumb: string; video: string }>`
  z-index: 1;
  border-radius: 4px;
  width: 280px;
  height: 150px;
  transition: 0.3s all ease;
  background-image: url(${(props) => props.thumb});
  &:hover {
    background-size: cover;
    background-image: url(${(props) => props.video});
  }
`;

const Line = styled.div<{ value: number }>`
  width: ${(props) => props.value + "%"};
  height: 3px;
  background-color: #00aeff;

  position: absolute;
  left: 0px;
  margin-top: 30px;
  transition: 0.2s all ease;
`;

export const Styles = {
  Container,
  Wrapper,
  Text,
  Trailler,
  Content,
  Video,
  Blur,
  GrayScale,
  Line,
};
