import Image from "next/image";
import React from "react";
import Store from "../../../assets/store.png";
import WowStore from "../../../assets/store-wo.png";
import BattleNet from "../../../assets/batllenet.png";
import Games from "../../../assets/games.png";
import Connect from "../../../assets/connect.png";
import Buy from "../../../assets/buy.png";
import Phone from "../../../assets/phone.png";
import DefaultButton from "../Buttons/DefaultButton";
import { Styles } from "./styles";

export const Footer = (): JSX.Element => {
  return (
    <Styles.Container>
      <Styles.Infos>
        <Image src={BattleNet} alt="" />
        <h1>Baixe agora o battle.net</h1>

        <div>
          <Image src={Games} alt="" />
          <p>Seus jogos em um só lugar</p>
        </div>

        <div>
          <Image src={Connect} alt="" />
          <p>Conecte-se aos seus amigos</p>
        </div>

        <div>
          <Image src={Buy} alt="" />
          <p>Compre jogos e itens digitais</p>
        </div>
        <DefaultButton name="Baixar para o MacOS" hide />

        <div>
          <Image src={Phone} alt="" />
          Também disponível como aplicativo móvel
        </div>
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
