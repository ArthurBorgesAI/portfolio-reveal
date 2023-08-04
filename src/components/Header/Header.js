import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import {HeaderStyled, LinkStyled, LinkContainerStyled } from './styles';

import PDF from '../../assets/Curriculo.pdf';

const Header = () => {
    return(
        <HeaderStyled>

            <BrowserRouter>
                <a href={PDF} without rel="noopener noreferrer" target="_blank"> Acessar Currículo </a>
                    <LinkContainerStyled>
                        <LinkStyled smooth to="#about">Sobre mim</LinkStyled>
                        <LinkStyled smooth to="#projects">Projetos</LinkStyled>
                        <LinkStyled smooth to="#skills">Tecnologias</LinkStyled>
                    </LinkContainerStyled>
            </BrowserRouter>
                
        </HeaderStyled>
    )
    
}

export default Header;