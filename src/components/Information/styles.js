import styled from "styled-components";
import {Phone} from "@styled-icons/boxicons-solid";
import {EmailOutline} from '@styled-icons/evaicons-outline';
import {Location} from '@styled-icons/entypo';


export const ContainerStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: left;
    width: 90%;
    border-radius: 5px;
`;

export const CardStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    padding-bottom: .8rem;
    margin-bottom: .8rem;
    border-bottom: 1px solid #444;
    width: 100%;

    svg{
        background-color: #0f0f0f;
        padding: 0.4rem;
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
    }

    :nth-child(3){
        border-bottom: 0px;
        margin-bottom: 0px;
        padding-bottom: 0px;
    }
`;

export const PhoneIcon = styled(Phone)`
    color: #e93b81;
`;

export const MailIcon = styled(EmailOutline)`
    color: #c17ceb;
`;

export const LocationIcon = styled(Location)`
    color: #6ab5b9;
`;