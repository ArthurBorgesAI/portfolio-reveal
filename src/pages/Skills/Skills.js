import React from 'react';

import Subtitle from '../../components/Subtitle';
import Text from '../../components/Text';

import * as S from './styles';

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

    return (
        <S.Screen>
            <S.Content>
                <Subtitle content="Tecnologias" />

                <S.TechsContainer>
                    <Subtitle content="Desenvolvimento Web" />
                    <S.Grid>
                        {technologies.map((tech) => (
                            <S.Card id={tech.id} key={tech.id}>
                                {tech.icon}
                                <Text content={tech.name} />
                            </S.Card>
                        ))}
                    </S.Grid>
                </S.TechsContainer>
                
                <S.TechsContainer>
                    <Subtitle content="Outras tecnologias" />
                    <S.Grid>
                        {technologies.map((tech) => (
                            <S.Card id={tech.id} key={tech.id}>
                                {tech.icon}
                                <Text content={tech.name} />
                            </S.Card>
                        ))}
                    </S.Grid>
                </S.TechsContainer>
                
            </S.Content>    
        </S.Screen>    
        
    );
}

export default Skills;