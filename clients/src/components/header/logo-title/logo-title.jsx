import React from "react";
import P from "../../../styled/p/p";
import Div from "../../../styled/wrappers/main-page/styled";


function LogoTitle({mokeNavigation}){
  return( 
    <Div footerWrapper>
        <img className="logo-title__logo" src={mokeNavigation.img.src} width={mokeNavigation.img.width} height={mokeNavigation.img.height}/>
        <P logoTitle>
            Фермерские продукты
        </P>
    </Div>
        )

}
export default LogoTitle