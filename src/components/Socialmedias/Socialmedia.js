import React from "react";

import Button from "../Button";
import socialNetworks from "../../constants/socialNetworks";

import { ContainerStyled } from "./styles";

const Socialmedias = () => {
  return (
    <ContainerStyled>
      {socialNetworks.map((network) => (
        <Button
          href={network.path}
          id={network.name}
          key={network.name}
          target="_blank"
          content={network.icon}
        />
      ))}
    </ContainerStyled>
  );
};

export default Socialmedias;
