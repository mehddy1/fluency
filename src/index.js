import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import Menu from './Menu'
import Slider from './Slider';
import MenuBottom from './MenuBottom';
import Footer from './Footer';
import CardProduct from './CardProduct';
import ServiceCard from './ServiceCard';
import YouTube from './YouTube';
import Media from './Media';
import FormRequestServices from './FormReauestServices'
import reportWebVitals from './reportWebVitals';

import { db, auth } from './data/firebase.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Menu />
      <MenuBottom />
      <App />
      <Slider />
      <Media />
      <YouTube />
      <FormRequestServices />
      <Footer />
      
    </StyledEngineProvider>
  </React.StrictMode>
);


console.log(db);
console.log(auth);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
