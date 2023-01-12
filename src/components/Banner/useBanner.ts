import { useState } from "react";
import { useGame } from "../../store";
import DiabloLogo from "../../../assets/diablo-logo.png";
import HearthLogo from "../../../assets/heart-logo.png";
import WowLogo from "../../../assets/wow-logo.png";
import DiabloBackground from "../../../assets/background1.png";
import HearthBackground from "../../../assets/background2.png";

const PAYLOAD = [
  {
    background:
      "https://github.com/joaotuliojt/blizzard/blob/main/src/assets/banners_hero/hearthstone-bg.png",
    title: "Retorne à escuridão com o game Diablo IV",
    subtitle: "O retorno de Lilith traz uma era de escuridão e sofrimento",
    logo: DiabloLogo,
    button: "Jogue agora",
    index: 0,
    trailler:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiablo-animation.96278818.gif&w=640&q=75",
    thumb:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiablo-animation-cover.1fc3b485.png&w=384&q=75",
  },
  {
    background:
      "https://github.com/joaotuliojt/blizzard/blob/main/src/assets/banners_hero/hearthstone-bg.png",
    title: "Novo pacote de expansão de Hearthstone",
    subtitle: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    logo: HearthLogo,
    index: 1,
    button: "Reserve agora na pré-venda",
    trailler:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhearthstone-animation.10378712.gif&w=640&q=75",
    thumb:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhearthstone-animation-cover.2e33f744.png&w=384&q=75",
  },
  {
    background:
      "https://github.com/joaotuliojt/blizzard/blob/main/src/assets/banners_hero/hearthstone-bg.png",
    title: "Desbrave as Terras Sombrias em Shadowlands! ",
    subtitle: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    logo: WowLogo,
    index: 2,
    button: "Reserve agora na pré-venda",
    trailler:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwow-animation.c57250cd.gif&w=640&q=75",
    thumb:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwow-animation-cover.3c95475e.png&w=384&q=75",
  },
  {
    background:
      "https://github.com/joaotuliojt/blizzard/blob/main/src/assets/banners_hero/hearthstone-bg.png",
    title: "Novo pacote de expansão de Hearthstone",
    subtitle: "O que jaz além do mundo que você conhece?",
    logo: HearthLogo,
    index: 1,
    button: "Reserve agora na pré-venda",
    trailler:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhearthstone-animation.10378712.gif&w=640&q=75",
    thumb:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhearthstone-animation-cover.2e33f744.png&w=384&q=75",
  },
  {
    background:
      "https://github.com/joaotuliojt/blizzard/blob/main/src/assets/banners_hero/hearthstone-bg.png",
    title: "Novo pacote de expansão de Hearthstone",
    subtitle: "A Horda e a Aliança se encontraram no Vale Alterac para lutar",
    logo: HearthLogo,
    index: 2,
    button: "Reserve agora na pré-venda",
    trailler:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhearthstone-animation.10378712.gif&w=640&q=75",
    thumb:
      "https://blizzard-qpx5s16fs-joaotuliojt.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhearthstone-animation-cover.2e33f744.png&w=384&q=75",
  },
];

const useBanner = () => {
  const game = useGame((state: any) => state.game);
  const changegame = useGame((state: any) => state.changeGame);

  const handleSelectGame = (value: number) => {
    changegame(PAYLOAD[value]);
  };

  return { handleSelectGame, game };
};

export default useBanner;
