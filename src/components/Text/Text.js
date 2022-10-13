import React from "react";
import * as S from "./styles";

const Text = (props) => {
    const { content } = props;
    return(
        <S.Text> {content} </S.Text>
    );
 }

export default Text;