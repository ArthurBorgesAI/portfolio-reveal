import React from "react";

import Text from '../Text';

import { ContainerStyled, CardStyled, PhoneIcon, MailIcon, LocationIcon } from './styles';

const Information = () => {

return(
    <ContainerStyled>

        <CardStyled>
            <PhoneIcon />
            <div>
                <Text content="Fone" />
                <Text content="(34) 99270-7797" />
            </div>
        </CardStyled>


        <CardStyled>
            <MailIcon />
            <div>
                <Text content="E-mail" />
                <Text content="arthurborgesti@outlook.com" />
            </div>
        </CardStyled>


        <CardStyled>
            <LocationIcon />
            <div>
                <Text content="Localização" />
                <Text content="Uberlândia - MG" />
            </div>
        </CardStyled>

    </ContainerStyled>

);

}

export default Information;