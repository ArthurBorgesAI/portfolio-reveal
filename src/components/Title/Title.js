import React from "react";
import * as S from "./styles";

const Title = (props) => {
    const {content} = props;
    return(
        <S.Title>{content}</S.Title>
    )
}

export default Title;