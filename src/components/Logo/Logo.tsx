import Image from 'next/image';
import React from 'react';
import LogoImage from "../../../assets/logo.png"


export const Logo = ():JSX.Element => {
  return <Image src={LogoImage} alt="log" />;
}