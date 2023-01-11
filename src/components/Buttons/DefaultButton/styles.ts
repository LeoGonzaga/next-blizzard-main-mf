import styled from "styled-components";

const Container = styled.button`
  background: #00aeff;
  padding: 10px 25px 10px 25px;
  height: 41px;
  border-radius: 3px;
  border: none;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s all ease-in-out;

  display: flex;
  align-items: center;
  font-size: 16px;
  &:hover {
    background-color: #40c2ff;
  }

  img {
    margin-right: 10px;
  }
`;

export const Styles = {
  Container,
};
