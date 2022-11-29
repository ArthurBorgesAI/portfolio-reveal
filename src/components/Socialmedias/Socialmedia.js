import React from "react";

import Button from '../Button';
import socialNetworks from "../../constants/socialNetworks";

import * as S from './styles'

const Socialmedias = () => {

    return (
        <S.Container>
            {socialNetworks.map((network) => (
                <Button href={network.path} id={network.name} key={network.name} target="_blank" content={network.icon} />
            ))}
        </S.Container>
    );
}

export default Socialmedias;