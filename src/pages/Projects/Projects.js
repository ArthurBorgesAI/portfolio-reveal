import React from "react";

import { Pagination } from 'antd';
import { Roll } from "react-awesome-reveal";

import PokedexImgList from "../../constants/PokedexImgList";

import Text from '../../components/Text';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Button from '../../components/Button';
import ProjectShowcase from '../../components/ProjectShowcase';



import * as S from './styles';
const Projects = () => {

    return (
        <S.Screen id="projects">
            <S.Content>
                <Title content="Projetos" />

                <S.Container>

                    <S.ProjectSection>
                        <Pagination simple defaultCurrent={1} total={3} pageSize={1}> 
                            <Subtitle content="Publicados" />

                            <ProjectShowcase name="Pokedex App" imgList={PokedexImgList} />

                            <Button content={<Text content="Ver mais" />} href="/" />
                        </Pagination>
                    </S.ProjectSection>
                


                    <S.ProjectSection>
                        <Subtitle content="Publicados" />

                        <ProjectShowcase name="Pokedex App" imgList={PokedexImgList} />

                        <Button content={<Text content="Ver mais" />} href="/" />
                    </S.ProjectSection>
                    

                </S.Container>
                

            </S.Content>
        </S.Screen>
    )
}

export default Projects;