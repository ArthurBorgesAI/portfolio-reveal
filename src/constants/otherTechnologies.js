import styled, { css } from 'styled-components';
import { Adobephotoshop, Adobepremierepro } from '@styled-icons/simple-icons'

const flipOnHover = css`
    transition: transform .3s;
    :hover{
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
}
`;

const PhotoshopIcon = styled(Adobephotoshop)`
    color: #081e35;
    ${flipOnHover}
`;

const PremiereIcon = styled(Adobepremierepro)`
    color: #201c57;
    ${flipOnHover}
`;

const otherTechnologies = [
    { id: "photoshop", name: "Photoshop", icon: <PhotoshopIcon /> },
    { id: "premiere", name: "PremierePro", icon: <PremiereIcon /> },
];

export default otherTechnologies;