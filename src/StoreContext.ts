import React, {ReactNode} from "react";

import {Store} from "redux";
import {ReducersType, store} from "./state/redux-store";

const StoreContext = React.createContext({} as Store<ReducersType>)

export default StoreContext


//Это то что типо необязательно знать как создать свой провайдер
//если используешь реактовский стор

/*
type ProviderType = {
    store: Store<ReducersType>
    children: ReactNode
}

const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}*/
