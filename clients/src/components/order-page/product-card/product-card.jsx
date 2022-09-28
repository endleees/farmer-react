import React from "react";
import { TitleSize } from "../../../styled/title/title";
import { ProductImage, ProductTitle, Price, ContentWrapper } from "./styled";
import Div from "../../../styled/wrappers/main-page/styled";
import Tabs from "./tabs/tabs";
import OptionsList from "./options-list/option-list";
function ProductCart({ product }) {
   const tabsList = [
      {
        title: "Oписание",
        content: product.description
      },
      {
        title: "Характеристики",
        content: <OptionsList list={product.specifications} />
      },
      {
        title: "Свойства",
        content: <OptionsList list={product.structure} />
      }
    ];
  return (
    <Div>
      <ProductImage src={product.image} />
      <ContentWrapper>
        <ProductTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </ProductTitle>
        <Tabs maxContentHeiht="105px" tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </ContentWrapper>
    </Div>
  );
}

export default ProductCart;