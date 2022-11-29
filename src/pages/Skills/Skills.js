import React from 'react';

import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Text from '../../components/Text';
import technologies from '../../constants/technologies';
import otherTechnologies from '../../constants/otherTechnologies';

import * as S from './styles';

import { Bounce } from "react-awesome-reveal";

const Skills = () => {

    return (
        <S.Screen id="skills">
            <S.Content>


                <S.TechsContainer>
                    <Title content="Tecnologias" />
                    <Subtitle content="Desenvolvimento Web" />
                    <S.Grid>
                        <Bounce cascade duration='300' fraction='1' damping={0.1}>
                            {technologies.map((tech) => (
                                <S.Card id={tech.id} key={tech.id}>
                                    {tech.icon}
                                    <Text content={tech.name} />
                                </S.Card>
                            ))}
                        </Bounce>
                    </S.Grid>

                </S.TechsContainer>

                <S.TechsContainer>
                    <Subtitle content="Outras tecnologias" />
                    <S.Grid>
                        <Bounce delay='1' cascade duration="100" damping={0.1}>
                            {otherTechnologies.map((tech) => (
                                <S.Card id={tech.id} key={tech.id}>
                                    {tech.icon}
                                    <Text content={tech.name} />
                                </S.Card>
                            ))}
                        </Bounce>
                    </S.Grid>

                </S.TechsContainer>

            </S.Content>
        </S.Screen>

    );
}

export default Skills;