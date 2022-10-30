import React from "react";

import * as S from './styles';

import Subtitle from '../../components/Subtitle';
import Container from '../../components/Container';
import Button from '../../components/Button';

import { Bounce } from "react-awesome-reveal";

const Projects = () => {
    return (
        <S.Screen id="projects">
            <S.Content>

                <S.ProjectsContainer>
                    <Subtitle content="Projetos" />
                    <S.ProjectsGrid>
                        <Bounce cascade duration='300' damping={0.1}>
                            <Container height="10rem" width="15rem"></Container>
                            <Container height="10rem" width="15rem"></Container>
                            <Container height="10rem" width="15rem"></Container>
                        </Bounce>
                    </S.ProjectsGrid>
                    <Button content="Ver mais" href="/" />
                </S.ProjectsContainer>
                

                <S.ProjectsContainer>
                    <Subtitle content="GitHub - ultimos projetos" />
                    <S.ProjectsGrid>
                        <Bounce cascade duration='300' damping={0.1}>
                            <Container height="10rem" width="15rem"></Container>
                            <Container height="10rem" width="15rem"></Container>
                            <Container height="10rem" width="15rem"></Container>
                        </Bounce>
                    </S.ProjectsGrid>
                    <Button content="Github" href="/" />
                </S.ProjectsContainer>
                

            </S.Content>
        </S.Screen>
    )
}

export default Projects;