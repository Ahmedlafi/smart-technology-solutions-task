import React from "react";
import Slider from "../Slider/slider";
import { useTranslation } from 'react-i18next';
import OwlCarouselComponent from "../responsive-carousel/responsive-carousel";
import '../../style/sliderSection.css';

const SliderSection = () => {
    const { t, i18n } = useTranslation();

    const isArabic = i18n.language === 'ar';

    return (
        <section className="slider-section">
            <div className={`section-title ${isArabic ? 'rtl-title' : ''}`}>
                {t('ourShop')}
            </div>
            <Slider/>
            <OwlCarouselComponent />
        </section>
    );
};

export default SliderSection;
