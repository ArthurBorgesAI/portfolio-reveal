import React from 'react';

import * as S from './styles';

import Header from '../../components/Header';
import Container from '../../components/Container';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import Text from '../../components/Text';
import Socialmedias from '../../components/Socialmedias';
import Information from '../../components/Information';

import { Fade } from "react-awesome-reveal";


const About = () => {
    const imgSrc = require('../../assets/perfil.jpg');

    return (
        <S.Screen id="about">
            <Header />

            <S.Content>
                <Fade duration='2000'>
                    <Container height='45rem' width='21rem'>
                        <S.Subcontainer>
                            <S.Picture src={imgSrc} alt='Profile' />
                            <Subtitle content="Arthur Borges" />
                            <S.Profession>
                                <Text content="Web Dev" />
                            </S.Profession>
                            <Socialmedias />
                        </S.Subcontainer>
                        <Information />
                    </Container>

                    <S.RevealingContainer content= { `Amante de tecnologia, sempre me interessei por computadores e sistemas digitais.
 
                    Já trabalhei com manutenção de computadores e suporte ao usuário; edição de vídeo e criação de conteúdo; e operação de softwares da Justiça Eleitoral.
                    
                    Durante a faculdade trabalhei com o desenvolvimento de modelos preditivos, sendo o principal um modelo de ConvNets para identificação de espécies de plantas.
                    
                    Hoje busco trabalhar como Dev, algo que sempre almejei.`}>
                        <Title content="Sobre mim" />
                    </S.RevealingContainer>
                </Fade>


            </S.Content>
        </S.Screen>

    );
}

export default About;