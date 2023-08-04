import React from "react";

import { Slide } from "react-awesome-reveal";
import { Space } from "antd";

import Title from "../../components/Title";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../constants/projects";

import * as S from "./styles";

const Projects = () => {
  return (
    <S.Screen id="projects">
      <Title content="Projetos" />
      <Slide triggerOnce duration={500}>
        <Space
          wrap
          size={"large"}
          align="center"
          style={{ width: "100%", justifyContent: "center" }}
        >
          {projects.map((e) => {
            return (
              <ProjectCard
                name={e.name}
                link={e.link}
                img={e.img}
                key={e.name}
              />
            );
          })}
        </Space>
      </Slide>
        
    </S.Screen>
  );
};

export default Projects;
