import React from "react";
import { Card, Carousel } from "antd";
import { EyeTwoTone } from "@ant-design/icons";
import { CarouselContainer } from "./styles";

const ProjectCard = (props) => {
  const { name, link, img } = props;
  return (
    <Card
      title={name}
      extra={
        <a href={link} target="_blank" rel="noreferrer">
          <EyeTwoTone style={{ fontSize: "2rem" }} />
        </a>
      }
      bodyStyle={{ background: "#333333", padding: "0", paddingBottom: "-10px"  }}
      headStyle={{ background: "#ccc" }}
      bordered={false}
      hoverable={true}

    >
      <CarouselContainer>
        <Carousel autoplay style={{ padding: "0" }}>
            <img src={img} alt="project preview" />
            <img src={img} alt="project preview" />
        </Carousel>
      </CarouselContainer>
    </Card>
  );
};

export default ProjectCard;
