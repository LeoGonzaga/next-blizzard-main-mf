import { create } from "zustand";
import DiabloLogo from "../../assets/diablo-logo.png";

export const useGame = create((set) => ({
  game: {
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
  changeGame: (value: any) => set(() => ({ game: value })),
}));
