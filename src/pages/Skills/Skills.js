import React from 'react';

import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Text from '../../components/Text';

import * as S from './styles';

import { Bounce } from "react-awesome-reveal";

const Skills = () => {
    const technologies = [
        { id: "html", name: "HTML5", icon: <S.HtmlIcon /> },
        { id: "css", name: "CSS3", icon: <S.CssIcon /> },
        { id: "js", name: "JavaScript", icon: <S.JsIcon /> },
        { id: "python", name: "Phyton", icon: <S.PythonIcon /> },
        { id: "node", name: "Node.js", icon: <S.NodeIcon /> },
        { id: "mysql", name: "MySQL", icon: <S.MysqlIcon /> },
        { id: "react", name: "React", icon: <S.ReactIcon /> },
        { id: "django", name: "Django", icon: <S.DjangoIcon /> },
    ];

    const otherTechnologies = [
        { id: "photoshop", name: "Photoshop", icon: <S.PhotoshopIcon /> },
        { id: "premiere", name: "PremierePro", icon: <S.PremiereIcon /> },
    ];

    return (
        <S.Screen id="skills">
            <S.Content>
                

                <S.TechsContainer>
                    <Title content="Tecnologias" />
                    <Subtitle content="Desenvolvimento Web" />
                    <S.Grid>
                        <Bounce cascade duration='300' fraction='1'  damping={0.1}>
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