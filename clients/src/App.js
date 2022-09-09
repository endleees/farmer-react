
import React,{useState} from 'react';
import FarmerPage from './components/farmer-page';
import {mokeNavigation,mokeInfo,mokeCards} from "./moke";


function App() {
  return (
      <>
      <FarmerPage mokeNavigation= {mokeNavigation} mokeInfo= {mokeInfo} mokeCards={mokeCards}/>
      
      </>
  );
}

export default App;
