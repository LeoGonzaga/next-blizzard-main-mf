import dynamic from "next/dynamic";
import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { Styles } from "./styles";

export const Home = (): JSX.Element => {
  // @ts-ignore
  const Sidebar = dynamic(() => import("components/sidebar"), {
    loading: () => <p>Loading caused by client page transition ...</p>,
  });
  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Navbar />
        <Banner />
      </Styles.Wrapper>
    </Styles.Container>
  );
};
