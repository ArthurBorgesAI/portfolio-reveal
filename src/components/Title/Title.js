import React from "react";
import {TitleStyled} from "./styles";

const Title = (props) => {
    const { content } = props;
    return (
        <TitleStyled>{content}</TitleStyled>
    )
}

export default Title;