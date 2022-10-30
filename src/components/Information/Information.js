import React from "react";
import * as S from './styles';


const Information = () => {

return(
    <S.Container>

        <S.Card>
            <S.PhoneIcon />
            <div>
                <h3>Phone</h3>
                <p>(34) 99270-7797</p>
            </div>
        </S.Card>


        <S.Card>
            <S.MailIcon />
            <div>
                <h3>E-mail</h3>
                <p>arthurborgesti@outlook.com</p>
            </div>
        </S.Card>


        <S.Card>
            <S.LocationIcon />
            <div>
                <h3>Localização</h3>
                <p>Uberlândia - MG</p>
            </div>
        </S.Card>

    </S.Container>

);

}

export default Information;