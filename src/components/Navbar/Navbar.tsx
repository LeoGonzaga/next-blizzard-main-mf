import React from "react";
import DefaultButton from "../Buttons/DefaultButton";
import OutlineButton from "../Buttons/OutlineButton";
import { Logo } from "../Logo/Logo";

import { Styles } from "./styles";

export const Navbar = (): JSX.Element => {
  return (
    <Styles.Container>
      <Logo />

      <Styles.WrapperButtons>
        <OutlineButton />
        <DefaultButton name="Logar" />
      </Styles.WrapperButtons>
    </Styles.Container>
  );
};
