import React from 'react';
import preloaderPic from "../../assets/images/Spin-1s-200px.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloaderPic} />
        </div>
    );
};

export default Preloader;