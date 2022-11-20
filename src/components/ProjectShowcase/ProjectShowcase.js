import React from 'react';

import Slideshow from '../../components/SlideShow';
import Text from '../../components/Text';

import * as S from './styles.js';

const ProjectShowcase = props => {
    const { name, imgList } = props;
    return(
        <S.Project>
            <Text content={name} />
            <S.ImagesCarousel>
                <S.SlideShowContainer>
                    <Slideshow imgList={imgList} />
                </S.SlideShowContainer>
            </S.ImagesCarousel>
        </S.Project>
    )
}

export default ProjectShowcase;