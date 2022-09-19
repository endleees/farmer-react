
import React,{useState} from 'react';
import FarmerPage from './components/farmer-page';
import {mokeNavigation,mokeInfo,mokeCards} from "./moke";
import { GlobalStyle } from "./styles";


function App() {
  return (
      <>
      <GlobalStyle></GlobalStyle>
      <FarmerPage mokeNavigation= {mokeNavigation} mokeInfo= {mokeInfo} mokeCards={mokeCards}/>
      
      </>
  );
}

export default App;
