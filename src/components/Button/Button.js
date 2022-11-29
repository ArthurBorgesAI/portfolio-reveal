import React from 'react';

import * as S from './styles';

const Button = (props) => {
    const { content, href } = props;
    return(
        <S.Button href={href} target="_blank"> {content} </S.Button>
    )
}

export default Button;