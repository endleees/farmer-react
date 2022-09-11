import React from "react";
import "./style.css";
import LogoTitle from "../header/logo-title/logo-title";

function Footer({mokeNavigation}){
    return (
        <footer className="footer">
            <div className="footer__wrapper">
        <LogoTitle mokeNavigation= {mokeNavigation}></LogoTitle>
        <span className="footer__created">
            Создано 2021
        </span>
        </div>
        </footer>
    )
}
export default Footer