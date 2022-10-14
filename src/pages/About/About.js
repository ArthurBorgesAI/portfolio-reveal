import React from 'react';
import * as S from './styles';

import Container from '../../components/Container';
import Title from '../../components/Title';

const About = () => {
    const imgSrc = require('../../assets/perfil.jpg');

    return(
        <S.Screen>
            <S.Header>
                 <S.Link href="/">a</S.Link>
                 <S.LinkContainer>
                    <S.Link href="/">a</S.Link>
                    <S.Link href="/">a</S.Link>
                    <S.Link href="/">a</S.Link>
                 </S.LinkContainer>
            </S.Header>

            <S.Content>
                <Title content="Arthur Borges"/>
                <S.ContainersBox>
                    <Container height='50vh' width='15vw'>
                        <S.Picture src={imgSrc} alt='Profile' />
                    </Container>
                    <Container height='70vh' width='50vw'> 
                        a 
                    </Container>
                </S.ContainersBox>
                
            </S.Content>
        </S.Screen>

    );
}

export default About;