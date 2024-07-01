import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import item4 from "../../assets/item4.png";
import '../../style/slider.css';

const Slider = () => {
    const { t, i18n } = useTranslation();

    const slides = [
        {
            image: item1,
            caption: t('slider.slide1.title'),
            button: t('slider.slide1.button')
        },
        {
            image: item2,
            caption: t('slider.slide2.title'),
            button: t('slider.slide2.button')
        },
        {
            image: item3,
            caption: t('slider.slide3.title'),
            button: t('slider.slide3.button')
        },
        {
            image: item4,
            caption: t('slider.slide4.title'),
            button: t('slider.slide4.button')
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;

    return (
        <div className="slider">
            <div className="slides-container">
                {[prevIndex, currentSlide, nextIndex].map((index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{ backgroundImage: `url(${slides[index].image})` }}
                    >
                        <div className={i18n.language === 'ar' ? 'rtl-caption slide-content' : 'slide-content'}>

                            <h2 >{slides[index].caption}</h2>
                            <button className={i18n.language === 'ar' ? 'rtl-button' : ''}>{slides[index].button}</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
            <button className="next-btn" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
