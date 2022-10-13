import React from "react";
import * as S from "./styles";

const Container = (props) => {
    const {width, height} = props;
    return(
        <S.Container width={width} height={height}>
            {props.children}
        </S.Container>
    );
}

export default Container;