import React from "react";
import {SubtitleStyled} from "./styles";

const Subtitle = (props) => {
    const { content } = props;
    return (
        <SubtitleStyled> {content} </SubtitleStyled>
    )
}

export default Subtitle;