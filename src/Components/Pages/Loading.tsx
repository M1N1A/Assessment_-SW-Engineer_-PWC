import React from 'react';
import loadingImg from "../../Assests/Images/loading.gif";

interface IProps {
}

let Loading: React.FC<IProps> = ({}) => {
    return (
        <>
            <div className="spinner">
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <img src={loadingImg} alt="" className="d-block m-auto"/>
                </div>
            </div>
        </>
    )
};
export default Loading;