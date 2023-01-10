import React from "react";
import Navbar from "../../components/Navbar";
import { Styles } from "./styles";

export const Home = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Navbar />
      </Styles.Wrapper>
    </Styles.Container>
  );
};
