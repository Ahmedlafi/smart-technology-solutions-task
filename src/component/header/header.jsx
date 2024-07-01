import React from "react";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from 'react-i18next';
import '../../style/header.css';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
            <Navbar />
            <div className="header-text">
                <h1 className="header_title">{t('Header.title')}</h1>
                <button className="btn header_main_btn">{t('Header.btn')}</button>
                
            </div>
        </header>
    );
};

export default Header;
