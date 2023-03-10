/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import Diablo from "../../../assets/diablo.png";
import Wow from "../../../assets/wow.png";
import HearthStone from "../../../assets/heartstone.png";

import DefaultButton from "../Buttons/DefaultButton";
import useBanner from "./useBanner";
import { Styles } from "./styles";
const GAMES = [Diablo, HearthStone, Wow];

export const Banner = (): JSX.Element => {
  const { handleSelectGame, game, timer } = useBanner();
  return (
    <>
      <Styles.Container>
        <Styles.Wrapper>
          {GAMES.map((value, index) => (
            <Styles.GrayScale key={index} isSelected={index === game.index}>
              <Image
                src={value}
                alt="Icones"
                onClick={() => handleSelectGame(index)}
              />
            </Styles.GrayScale>
          ))}
        </Styles.Wrapper>

        <Styles.Content>
          <Styles.Text>
            <h1>{game.title}</h1>
            <p>{game.subtitle}</p>
            <DefaultButton name={game.button} />
          </Styles.Text>

          <Styles.Trailler>
            <Image src={game.logo} alt="Diablo" width={291} height={160} />
            <button>ASSISTA O TRAILER</button>
            <Styles.Blur />

            <Styles.Video thumb={game.thumb} video={game.trailler} />
          </Styles.Trailler>
        </Styles.Content>
      </Styles.Container>
      <Styles.Line value={timer} />
    </>
  );
};
