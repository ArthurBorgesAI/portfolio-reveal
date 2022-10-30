import styled from "styled-components";
import { Linkedin, Github, Instagram } from '@styled-icons/boxicons-logos';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`;

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .3em;
    background-color: #256D85;
    border-radius: 5px;
    color: #333;
    font-size: 1.7rem;

    transition: transform .3s;
    :hover{
        box-shadow: 0 0 11px #000;
        transform: scale(1.3);
    }
`;

export const LinkedinIcon = styled(Linkedin)`
    color: #0072b1;
    height: 20px;
    width: 20px;
`;

export const GithubIcon = styled(Github)`
    color: #111;
    height: 20px;
    width: 20px;
`;

export const InstagramIcon = styled(Instagram)`
    color: #bc2a8d;
    height: 20px;
    width: 20px;
`;