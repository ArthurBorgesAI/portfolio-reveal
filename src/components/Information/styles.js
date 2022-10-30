import styled from "styled-components";
import {Phone} from "@styled-icons/boxicons-solid";
import {EmailOutline} from '@styled-icons/evaicons-outline';
import {Location} from '@styled-icons/entypo';


export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #256D85;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: left;
    width: 80%;
    border-radius: 5px;

    transition: transform .3s;
    :hover{
        transform: scale(1.2);
    }
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    padding-bottom: .8rem;
    margin-bottom: .8rem;
    border-bottom: 1px solid #444;
    width: 100%;

    h3{
        color: #FFF3E4;
        font-size: .8rem;
        margin-bottom: .5rem;
    }

    p{
        color: #FFF3E4;
        font-weight: bold;
        word-break: break-word;
    }

    svg{
        background-color: #111;
        padding: 0.4rem;
        width: 2rem;
        height: 2rem;
        border-radius: 5px;
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