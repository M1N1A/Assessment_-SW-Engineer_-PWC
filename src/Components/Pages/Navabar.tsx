import React from 'react'
import {Link} from "react-router-dom";

interface IProps{}
interface IState{}
let Navabar:React.FC<IProps> =() =>{
   
    return(
        <>
            
            <section className="ftco-section">
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light navbarOverride" id="ftco-navbar">
                <div className="container">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fa fa-bars"></span> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                            <Link to={'/'} className="nav-link text-decoration-none text-light">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/country'} className="nav-link text-decoration-none text-light">Country List</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </section>
        </>
    );

}

export default Navabar;