import styled  from "styled-components";
import { Swiper } from "swiper/react";
const Form= styled.form`
   width: 1100px;
   margin: 0 auto;
`
const CustomSwiper = styled(Swiper)`
width: 727px;
max-height:768px;
display: flex;
.swiper-pagination {
   display: none;
 }

 .swiper-slide {
   flex-shrink: 1;
 }
`
export {Form,CustomSwiper}