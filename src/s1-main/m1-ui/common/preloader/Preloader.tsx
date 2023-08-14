import React from 'react';
import preloaderPic from "s1-main/m1-ui/images/loading.svg";

const Preloader = () => {
    return (
        <div>
            <img src={preloaderPic} />
        </div>
    );
};

export default Preloader;