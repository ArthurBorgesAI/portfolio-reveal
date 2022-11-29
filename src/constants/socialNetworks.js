import styled from "styled-components";
import { Linkedin, Github, Instagram } from '@styled-icons/boxicons-logos';

const LinkedinIcon = styled(Linkedin)`
    color: #0072b1;
    height: 20px;
    width: 20px;
`;
const GithubIcon = styled(Github)`
    color: #111;
    height: 20px;
    width: 20px;
`;
const InstagramIcon = styled(Instagram)`
    color: #bc2a8d;
    height: 20px;
    width: 20px;
`;


const socialNetworks = [
    { name: "linkedin", icon: <LinkedinIcon />, path: 'https://www.linkedin.com/in/arthur-borges-796620132/' },
    { name: "github", icon: <GithubIcon />, path: 'https://github.com/ArthurBorgesAI' },
    { name: "instagram", icon: <InstagramIcon />, path: 'https://www.instagram.com/arthurborgesg/' },
];

export default socialNetworks;