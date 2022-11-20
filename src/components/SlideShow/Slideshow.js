import React, { useState, useRef, useEffect } from "react";

import * as S from './styles';


const Slideshow = props => {
    const {imgList} = props;
    const delay = 2500;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === imgList.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);

      return(
        <S.Container>
            <S.Slider index={-index*100} >

                {imgList.map((Image, index) => (
                          <S.Image key={index} src={Image} alt="project screenshot" />
                ))}

            </S.Slider>
        </S.Container>
      )

}

export default Slideshow;