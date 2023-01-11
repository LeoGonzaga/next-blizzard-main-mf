import styled from "styled-components";

const Container = styled.div`
  padding: 111px 98px 0px 98px;

  display: flex;
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
    filter: grayscale(100%);
    transition: 0.2s all ease-in-out;

    &:hover {
      filter: grayscale(0%);
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin-top: 34px;
  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110.2%;
    width: 562px;
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
    width: 158px;
  }
`;

const Blur = styled.div`
  position: absolute;
  bottom: -15px;
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
  button {
    color: #fff;
    text-align: right;
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    margin-top: 92px;
    margin-bottom: 8px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;

const Video = styled.div`
  z-index: 1;
  border-radius: 4px;
  width: 280px;
  height: 150px;
  transition: 0.3s all ease-in;
  background-image: url("https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiablo-animation-cover.1fc3b485.png&w=384&q=75");
  &:hover {
    background-size: cover;
    background-image: url("https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiablo-animation.96278818.gif&w=640&q=75");
  }
`;

export const Styles = {
  Container,
  Wrapper,
  Text,
  Trailler,
  Content,
  Video,
  Blur,
};
