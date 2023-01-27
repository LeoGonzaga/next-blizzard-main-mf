import dynamic from "next/dynamic";
import React from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
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
        <React.Suspense fallback="loading button...">
          {/* @ts-ignore */}
          <Card />
        </React.Suspense>
        <Footer />
      </Styles.Wrapper>
    </Styles.Container>
  );
};
