import React, { useState, useRef, useEffect } from "react";

import * as S from './styles';


const Slideshow = props => {
    const {imgList} = props;
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
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
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
          resetTimeout();
        };
      }, [index]);

      return(
        <S.Container>
            <S.Slider style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >

                {colors.map((backgroundColor, index) => (
                        <S.SlideBox
                            key={index}
                            style={ {backgroundColor} }
                        ></S.SlideBox>
                ))}

            </S.Slider>
        </S.Container>
      )

}

export default Slideshow;