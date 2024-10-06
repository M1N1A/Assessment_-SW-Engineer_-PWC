import React from 'react';
import NoResult from "../../Assests/Images/noResults.jpeg";

interface IProps {
}

let NotFound: React.FC<IProps> = ({}) => {
    return (
        <>
            <div className="spinner">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <img src={NoResult} alt="" className="d-block m-auto"/>
                </div>
            </div>
        </>
    )
};
export default NotFound;