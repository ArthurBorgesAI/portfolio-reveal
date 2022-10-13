import React from "react";

import * as S from './styles';

import Subtitle from '../../components/Subtitle';
import Container from '../../components/Container';
import Button from '../../components/Button';

const Projects = () => {
    return(
        <S.Screen>
            <S.Content>
                <Subtitle content="Projetos"/>

                <S.ProjectsContainer>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                    <Container height="90%"  width="90%"></Container>
                </S.ProjectsContainer>

                <Button content="GitHub" href="/"/> 
            </S.Content>
        </S.Screen>
    )
}

export default Projects;