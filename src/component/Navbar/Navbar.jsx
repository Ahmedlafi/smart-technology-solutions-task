import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../style/navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLanguageChange = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      const newLang = i18n.language === 'en' ? 'ar' : 'en';
      i18n.changeLanguage(newLang);
      setIsTransitioning(false);
    }, 500); 
  };

  const renderLinks = () => (
    <>
      <li>{t('navbar.shop')}</li>
      <li>{t('navbar.about')}</li>
      <li>{t('navbar.news')}</li>
      <li>{t('navbar.contact')}</li>
      <li>
        <button className='localization-btn' onClick={handleLanguageChange}>
          {i18n.language === 'en' ? 'العربية' : 'English'}
        </button>
      </li>
    </>
  );

  const renderLinksReversed = () => (
    <>
      <li>
        <button className='localization-btn' onClick={handleLanguageChange}>
          {i18n.language === 'en' ? 'العربية' : 'English'}
        </button>
      </li>
      <li>{t('navbar.contact')}</li>
      <li>{t('navbar.news')}</li>
      <li>{t('navbar.about')}</li>
      <li>{t('navbar.shop')}</li>
    </>
  );

  return (
    <nav className='navbar'>
      {i18n.language === 'ar' ? (
        <>
          <ul className={`navbar-links rtl ${isTransitioning ? 'hide' : ''}`}>
            {renderLinksReversed()}
          </ul>
          <div>Brainwave.io</div>
        </>
      ) : (
        <>
          <div>Brainwave.io</div>
          <ul className={`navbar-links ltr ${isTransitioning ? 'hide' : ''}`}>
            {renderLinks()}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
