import React from "react";

import Button from '../Button';

import * as S from './styles'

const Socialmedias = () => {

    const socialNetworks = [
        { name: "linkedin", icon: <S.LinkedinIcon />, path: 'https://www.linkedin.com/in/arthur-borges-796620132/' },
        { name: "github", icon: <S.GithubIcon />, path: 'https://github.com/ArthurBorgesAI' },
        { name: "instagram", icon: <S.InstagramIcon />, path: 'https://www.instagram.com/arthurborgesg/' },
    ];

    return (
        <S.Container>
            {socialNetworks.map((network) => (
                <Button href={network.path} id={network.name} key={network.name} target="_blank" content={network.icon} />      
            ))}
        </S.Container>
    );
}

export default Socialmedias;