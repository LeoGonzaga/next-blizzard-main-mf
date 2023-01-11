/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import Diablo from "../../../assets/diablo.png";
import Wow from "../../../assets/wow.png";
import HearthStone from "../../../assets/heartstone.png";
import Dgame from "../../../assets/dgame.png";
import SC from "../../../assets/sc.png";
import DiabloLogo from "../../../assets/diablo-logo.png";

import { Styles } from "./styles";
import DefaultButton from "../Buttons/DefaultButton";
const GAMES = [
  {
    image: Diablo,
    title: "Retorna à escuridão com o game Diablo IV",
  },
  {
    image: Wow,
    title: "Retorna à escuridão com o game Diablo IV",
  },
  {
    image: HearthStone,
    title: "Retorna à escuridão com o game Diablo IV",
  },
  {
    image: Dgame,
    title: "Retorna à escuridão com o game Diablo IV",
  },
  {
    image: SC,
    title: "Retorna à escuridão com o game Diablo IV",
  },
];

export const Banner = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.Wrapper>
        {GAMES.map((game) => (
          <Image src={game.image} alt={game.title} key={game.title} />
        ))}
      </Styles.Wrapper>

      <Styles.Content>
        <Styles.Text>
          <h1>Retorne à escuridão com o game Diablo IV</h1>
          <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
          <DefaultButton name="Jogue agora" hide />
        </Styles.Text>

        <Styles.Trailler>
          <Image src={DiabloLogo} alt="Diablo" />
          <button>ASSISTA O TRAILER</button>
          <Styles.Blur />

          <Styles.Video />
        </Styles.Trailler>
      </Styles.Content>
    </Styles.Container>
  );
};
