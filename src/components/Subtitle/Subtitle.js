import React from "react";
import * as S from "./styles";

const Subtitle = (props) => {
    const { content } = props;
    return (
        <S.Subtitle> {content} </S.Subtitle>
    )
}

export default Subtitle;