import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { data } from './Data';
import './slider.css';


const ImageSlider = () => {
    const [curr, setCurr] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurr(curr === length - 1 ? 0 : curr + 1);
    }
    const prevSlide = () => {
        setCurr(curr === 0 ? length - 1 : curr - 1);
    }

    if (!Array.isArray(data) || data.length <= 0)
        return null;

    return (
        <>
    
        <div className='container-fluid slider' style={{marginTop:"40px"}}>
            <section >
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {data.map((slide, ind) => {
                    return (
                        <div className={ind === curr ? 'slide active' : 'slide'} key={ind}>
                            {ind === curr && (
                                <img src={slide.image} alt={ind} className='images' />
                            )}
                        </div>
                    );
                })};
            </section>
            </div>
        </>
    )
}

export default ImageSlider