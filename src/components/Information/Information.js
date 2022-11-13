import React from "react";
import * as S from './styles';

import Text from '../Text';

const Information = () => {

return(
    <S.Container>

        <S.Card>
            <S.PhoneIcon />
            <div>
                <Text content="Fone" />
                <Text content="(34) 99270-7797" />
            </div>
        </S.Card>


        <S.Card>
            <S.MailIcon />
            <div>
                <Text content="E-mail" />
                <Text content="arthurborgesti@outlook.com" />
            </div>
        </S.Card>


        <S.Card>
            <S.LocationIcon />
            <div>
                <Text content="Localização" />
                <Text content="Uberlândia - MG" />
            </div>
        </S.Card>

    </S.Container>

);

}

export default Information;