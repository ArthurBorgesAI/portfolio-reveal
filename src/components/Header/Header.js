import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import * as S from './styles';

const Header = () => {
    return(
        <S.Header>

            <BrowserRouter>
                <S.Link href="/"> Acessar Currículo </S.Link>
                    <S.LinkContainer>
                        <S.Link smooth to="#about">Sobre mim</S.Link>
                        <S.Link  smooth to="#projects">Projetos</S.Link>
                        <S.Link smooth to="#skills">Tecnologias</S.Link>
                    </S.LinkContainer>
            </BrowserRouter>
                
        </S.Header>
    )
    
}

export default Header;