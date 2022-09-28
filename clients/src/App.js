
import React,{StrictMode} from 'react';
import FarmerPage from './components/farmer-page';
import {mokeNavigation,mokeInfo,mokeCards} from "./mokes/moke-main";
import {MokeCheckbox} from "./mokes/moke-order"
import products from './mokes/products';
import { GlobalStyle } from "./styles";


function App() {
  return (
      <StrictMode>
      <GlobalStyle></GlobalStyle>
      <FarmerPage mokeNavigation= {mokeNavigation} MokeCheckbox={MokeCheckbox} products={products} />
      
      </StrictMode>
  );
}

export default App;
