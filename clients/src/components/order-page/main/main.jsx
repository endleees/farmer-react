import React,{useState} from "react";
import PageMain from "../../../styled/main/main";
import Div from "../../../styled/wrappers/main-page/styled";
import AsideOrder from "../../aside-order/aside-order";
import { CustomSwiper, Form } from "./styled";

import "swiper/css" ;
import ProductCart from "../product-card/product-card";



function MainOrder ({MokeCheckbox,products}){
    return(
        <PageMain PageColor>
            <Form>
                <Div orderCards > 
                    <AsideOrder  MokeCheckbox= {MokeCheckbox} products={products}>
                    </AsideOrder>
                    
                </Div>
                
           </Form>
        </PageMain>
      
    )
}
export default MainOrder