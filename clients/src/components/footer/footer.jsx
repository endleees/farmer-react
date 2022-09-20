import React from "react";

import LogoTitle from "../header/logo-title/logo-title";
import Div from "../../styled/wrappers/main-page/styled";
import PageFooter from "../../styled/footer/footer";
import Span from "../../styled/span/span";

function Footer({mokeNavigation}){
    return (
        <PageFooter>
            <Div footerWrapper>
                <LogoTitle mokeNavigation= {mokeNavigation}></LogoTitle>
                <Span>
                    Создано 2021
                </Span>
            </Div>
        </PageFooter>
    )
}
export default Footer