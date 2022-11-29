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

                    <S.RevealingContainer content=" Lorem ipsum dolor sit amet. Vel labore iure quo galisum nostrum et impedit consectetur qui consequuntur voluptatem non sequi iure vel consequuntur repellendus ut nostrum quaerat. ">
                        <Title content="Sobre mim" />
                    </S.RevealingContainer>
                </Fade>


            </S.Content>
        </S.Screen>

    );
}

export default About;