import styled from "styled-components";

const Container = styled.button`
  background: transparent;
  padding: 10px 25px 10px 25px;
  height: 41px;
  border-radius: 3px;
  border: 0.79px solid #ffffff;
  font-size: 14px;
  color: #fff;
  margin-right: 16px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s all ease-in-out;

  &:hover {
    background-color: #fff;
    line-height: 21px;
    text-align: center;
    color: #0b0d12;
   
  }
`;

export const Styles = {
  Container,
};
