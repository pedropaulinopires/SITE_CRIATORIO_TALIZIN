import React from "react";
import style from "../style/Menu.module.css"
import logo_criatorio from "../svg/logo.svg"

const Menu: React.FC = () => {
    return (
        <header className={style.menu}>
            <img src={logo_criatorio} alt="logo-criatorio-talizin" />

            <div className={style.btn_menu}>
                <div className={style.line1}></div>
                <div className={style.line2}></div>
                <div className={style.line3}></div>
            </div>

        </header>
    )
}

export default Menu;