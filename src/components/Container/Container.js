import React from "react";
import { ContainerStyled }from "./styles";

const Container = (props) => {
    const {width, height} = props;
    return(
        <ContainerStyled width={width} height={height}>
            {props.children}
        </ContainerStyled>
    );
}

export default Container;