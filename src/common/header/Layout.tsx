import React, { FC, ReactNode } from 'react';
import Navbar from "components/Navbar/Navbar";

export const Layout: FC<PropsType> = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
};

type PropsType = {
    children: ReactNode
}
