import dynamic from "next/dynamic";
import React from "react";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import { useGame } from "../../store";
import { Styles } from "./styles";

export const Home = (): JSX.Element => {
  // @ts-ignore
  const Card = dynamic(() => import("components/card"), {
    loading: () => <p>Loading caused by client page transition ...</p>,
    ssr: false,
  });

  const game = useGame((state: any) => state.game);
  return (
    <Styles.Container bgCover={game.index}>
      <Styles.Wrapper>
        <Navbar />
        <Banner />
        {/* <Card /> */}
      </Styles.Wrapper>
    </Styles.Container>
  );
};
