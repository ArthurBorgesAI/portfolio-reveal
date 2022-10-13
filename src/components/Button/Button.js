import React from 'react';

import * as S from './styles';

const Button = (props) => {
    const { content, href } = props;
    return(
        <S.Button href={href}> {content} </S.Button>
    )
}

export default Button;