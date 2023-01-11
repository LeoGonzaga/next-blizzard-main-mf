import React from "react";
import { Styles } from "./styles";
import UserIcon from "../../../../assets/icons.png";
import Image from "next/image";

type DefautlButtonType = {
  name: string;
  hide?: boolean;
};

export const DefaultButton = ({ name, hide }: DefautlButtonType) => {
  return (
    <Styles.Container>
      {!hide && <Image src={UserIcon} alt="User" />}
      <span>{name}</span>
    </Styles.Container>
  );
};
