import React, { useEffect, useState } from 'react'

import { useParams, useSearchParams } from "react-router-dom";


import Footer from '../Pages/Footer';
import Header from '../Pages/Header';
import dash from "../../Assests/Images/dash.png";

const Home = () => {


    return (
        <>
            <Header />
            <img src={dash} style={{width:"-webkit-fill-available"}}></img>
            <Footer />
        </>
    )
}

export default Home