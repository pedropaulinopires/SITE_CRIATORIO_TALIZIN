import React, { useState } from "react";
import style from "../style/Menu.module.css"
import logo_criatorio from "../svg/logo.svg"


const Menu: React.FC = () => {

    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => { setMenuActive(x => !x) };
    window.addEventListener('resize', () => setMenuActive(false));

    return (
        <>
            
            <header className={style.menu}>
                {/* Logo */}
                <img src={logo_criatorio} alt="logo-criatorio-talizin" />

                {/* Botão menu mobile */}
                <div className={`${style.btn_menu} ${menuActive ? style.active : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>

            {/* Conteudo menu mobile*/}
            <div className={``}>
            </div>
        </>
    )
}

export default Menu;