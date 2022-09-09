import React from "react";
import './style.css';

function LogoTitle({mokeNavigation}){
  return( 
    <div className="logo-title__wrapper">
        <img className="logo-title__logo" src={mokeNavigation.img.src} width={mokeNavigation.img.width} height={mokeNavigation.img.height}/>
        <p className="logo-title__title">
            Фермерские продукты
        </p>
    </div>
        )

}
export default LogoTitle