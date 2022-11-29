import React, { useState } from "react";

import { Roll } from "react-awesome-reveal";

import PUBLICADOS from "../../constants/PUBLICADOS";
import GITHUB from "../../constants/GITHUB";

import Text from '../../components/Text';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import ProjectShowcase from '../../components/ProjectShowcase';

import * as S from './styles';


const Projects = () => {
    const [projectPublicado, setProjectPublicado] = useState(PUBLICADOS[0]);
    const [projectGithub, setProjectGithub] = useState(GITHUB[0]);
    const [currentPublicado, setCurrentPublicado] = useState(1);
    const [currentGithub, setCurrentGithub] = useState(1);

    const changeHandlerPublicado = page => {
        setCurrentPublicado(page);
        setProjectPublicado(PUBLICADOS[page - 1])
    }
    const changeHandlerGithub = page => {
        setCurrentGithub(page);
        setProjectGithub(GITHUB[page - 1])
    }

    return (
        <S.Screen id="projects">
            <S.Content>
                <Title content="Projetos" />

                <S.Container>

                    <S.ProjectSection>
                        <Subtitle content="Publicados" />

                        <S.PaginationStyled simple current={currentPublicado} total={3} pageSize={1} onChange={changeHandlerPublicado} />
                        <ProjectShowcase name={projectPublicado.name} imgList={projectPublicado.imgList} />

                        <Button content={<Text content="Ver mais" />} href='https://github.com/ArthurBorgesAI'/>
                    </S.ProjectSection>



                    <S.ProjectSection>
                        <Subtitle content="GitHub" />

                        <S.PaginationStyled simple current={currentGithub} total={3} pageSize={1} onChange={changeHandlerGithub} />
                        <ProjectShowcase name={projectGithub.name} imgList={projectGithub.imgList} />

                        <Button content={<Text content="GitHub" />} href='https://github.com/ArthurBorgesAI' />
                    </S.ProjectSection>


                </S.Container>


            </S.Content>
        </S.Screen>
    )
}

export default Projects;