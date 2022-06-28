import React from "react";

import {Store} from "redux";
import {ReducersType} from "./state/redux-store";

const StoreContext = React.createContext<Store<ReducersType> | null>(null)

export default StoreContext;