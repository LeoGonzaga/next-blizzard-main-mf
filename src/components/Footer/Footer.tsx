import Image from "next/image";
import React from "react";
import Store from "../../../assets/store.png";
import WowStore from "../../../assets/store-wo.png";
import { Styles } from "./styles";

export const Footer = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.Infos>
        <h1>Baixe agora o battle.net</h1>

        <span>Seus jogos em um só lugar</span>

        <span>Seus jogos em um só lugar</span>

        <span>Seus jogos em um só lugar</span>
      </Styles.Infos>

      <Styles.Images>
        <Styles.FloatImage>
          <Image src={WowStore} alt="" />
        </Styles.FloatImage>
        <Styles.FixedImage>
          <Image src={Store} alt="" />
        </Styles.FixedImage>
      </Styles.Images>
    </Styles.Container>
  );
};
