
import React,{StrictMode} from 'react';
import FarmerPage from './components/farmer-page';
import {mokeNavigation,mokeInfo,mokeCards} from "./mokes/moke-main";
import {MokeCheckbox} from "./mokes/moke-order"
import products from './mokes/products';
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from './const';
import MainOrder from './components/order-page/main/main';
import MainIndex from './components/main/main';
import ScrollToTop from './components/scroll/scroll-top';

function App() {
  return (
      <StrictMode>
      <GlobalStyle></GlobalStyle>
      
      <Router>
        
        <Routes>
        
        <Route path={AppRoute.MAIN} element={<FarmerPage mokeNavigation= {mokeNavigation} mokeInfo={mokeInfo}  mokeCards={mokeCards} />}>
          <Route
            path={AppRoute.MAIN} index
            element={<MainIndex mokeNavigation= {mokeNavigation} mokeInfo={mokeInfo}  mokeCards={mokeCards}/>}
          />
          <Route
            path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
            element={<MainOrder mokeNavigation= {mokeNavigation} MokeCheckbox={MokeCheckbox} products={products} />}
          />
          </Route>
        </Routes>
      </Router>
      
      
      </StrictMode>
  );
}

export default App;
