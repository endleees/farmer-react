import React,{useState} from "react";
import P from "../../styled/p/p";
import Title, {TitleSize} from "../../styled/title/title";
import Div from "../../styled/wrappers/main-page/styled";
import BuyButton from "../header/buy-button/buy-button";
import CheckboxList from "./checkBox-list/checkBox-list";
import { AddressInput, Aside, PriceLabel, PriceValue, CheckboxLabel } from "./styled";
import { Swiper,SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Scrollbar } from 'swiper';
import ProductCart from "../order-page/product-card/product-card";
import { CustomSwiper } from "../order-page/main/styled";
import Price from "../price/price";


 function AsideOrder ({MokeCheckbox, products}) { 
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const handleOnClickProduct = (value, index) => {
   if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0)

   }
 };
 const selectProducts = selectProductIds
      .map((id) => products
      .find((product)=>product.id === id));
   const fullPrice = selectProducts.reduce(
      (sum, product) => (sum += product.price),
      0
   );
   const [address, setAddress] = useState("");
   const handleBuyClick = () => {
      // eslint-disable-next-line no-alert
      alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
        (product) => `${product.name} - ${product.price} руб.\n`
      )}
      Итого: ${fullPrice} руб.
      Доставка по адресу: ${address}.`);
   };
   return products && products.length ? (
      <>
      <Aside>
         <Div orderPurchase marginBottom="18">
            <P orderCheckboxTitles>
            {MokeCheckbox.title}
            </P>
            <Div orderCheckbox>
            <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
            />
            </Div>
         </Div>
         <Div orderPurchase >
            <Title size={TitleSize.SMALL} marginBottom={24}>
              Сделать заказ
            </Title>
            <AddressInput value={address}
               onChange={(e) => setAddress(e.target.value)} 
               placeholder="Введите адрес доставки" 
            />
            <PriceLabel >Цена</PriceLabel>
            <Price  value={fullPrice}>0</Price>
            <BuyButton buttonSize={100} onClick={handleBuyClick} disabled={!(selectProductIds.length && address)}>Купить</BuyButton>
         </Div>
         
      </Aside>
      <CustomSwiper  spaceBetween={12}
      modules ={[Mousewheel, Pagination, Scrollbar]}
      direction="vertical"
      onSwiper={setSwiperRef}
    slidesPerView="auto"
    scrollbar={{ draggable: true }}
    mousewheel
    pagination={{
      type: "fanction"
    }}
  >
  {products.map((product) => (
    <SwiperSlide key={product.id}>
      <ProductCart product={product} />
    </SwiperSlide>
  ))}

</CustomSwiper>
</>
   ): ("Продукты были слишком вкусные и их разобрали.");
}
export default AsideOrder