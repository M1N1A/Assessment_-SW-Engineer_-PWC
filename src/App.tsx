import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Country from './Components/Pages/Country';
import CountryDetails from './Components/Pages/CountryDetails';

function App() {
  return (
    <>
    <React.Fragment>
       <BrowserRouter>
           <Routes>
               <Route path='/' element={
                 <Home/>
               }/>
               <Route path='/country' element={
                 <Country/>
               }/>
               <Route path='/country/:name' element={
                 <Country/>
               }/>
               <Route path='/country/details/:name' element={
                 <CountryDetails/>
               }/>
           </Routes>
       </BrowserRouter>
       </React.Fragment>
  </>
  );
}

export default App;
