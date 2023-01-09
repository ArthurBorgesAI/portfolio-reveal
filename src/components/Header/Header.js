import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import * as S from './styles';

import PDF from '../../assets/Curriculo.pdf';

const Header = () => {
    return(
        <S.Header>

            <BrowserRouter>
                <a href={PDF} without rel="noopener noreferrer" target="_blank"> Acessar Currículo </a>
                    <S.LinkContainer>
                        <S.Link smooth to="#about">Sobre mim</S.Link>
                        <S.Link smooth to="#projects">Projetos</S.Link>
                        <S.Link smooth to="#skills">Tecnologias</S.Link>
                    </S.LinkContainer>
            </BrowserRouter>
                
        </S.Header>
    )
    
}

export default Header;