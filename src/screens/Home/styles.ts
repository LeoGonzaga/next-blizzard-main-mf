import styled from "styled-components";
const Container = styled.div`
  background-image: url("background1.png");
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
