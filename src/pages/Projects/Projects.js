import React from "react";

import * as S from './styles';

import PokedexImgList from "../../constants/PokedexImgList";

import Text from '../../components/Text';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Container from '../../components/Container';
import Button from '../../components/Button';
import Slideshow from '../../components/SlideShow';

import { Roll } from "react-awesome-reveal";

const Projects = () => {
    return (
        <S.Screen id="projects">
            <S.Content>
                <Title content="Projetos" />

                <S.ProjectsContainer>

                    <S.CarouselContainer>
                        <Subtitle content="Publicados" />
                        <S.ProjectsCarousel>
                                <S.SlideShowContainer>
                                    <Slideshow imgList={ PokedexImgList } />
                                </S.SlideShowContainer>
                        </S.ProjectsCarousel>
                        <Button content={<Text content="Ver mais" />} href="/" />
                    </S.CarouselContainer>
                    
              
                    <S.CarouselContainer>
                        <Subtitle content="GitHub" />
                        <S.ProjectsCarousel>
                            <Roll cascade duration='300'>
                                <Container height="10rem" width="15rem">
                                    
                                </Container>
                            </Roll>
                        </S.ProjectsCarousel>
                        <Button content={<Text content="Github" />} href="/" />
                    </S.CarouselContainer>
                    

                </S.ProjectsContainer>
                

            </S.Content>
        </S.Screen>
    )
}

export default Projects;