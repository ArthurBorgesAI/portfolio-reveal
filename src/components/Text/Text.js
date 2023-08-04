import React from "react";
import {TextStyled} from "./styles";

const Text = (props) => {
    const { content } = props;
    return (
        <TextStyled> {content} </TextStyled>
    );
}

export default Text;