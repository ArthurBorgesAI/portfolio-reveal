import React from 'react';

import {ButtonStyled} from './styles';

const Button = (props) => {
    const { content, href } = props;
    return(
        <ButtonStyled href={href} target="_blank"> {content} </ButtonStyled>
    )
}

export default Button;