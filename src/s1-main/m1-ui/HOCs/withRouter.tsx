import React, {ComponentType} from "react";
import {Params, useParams} from "react-router-dom";



export function withRouter<T>(Component: ComponentType<T & { params: Params }>) {

    function ComponentWithRouterProp(props: T) {
        return (
            <Component
                {...props}
                params={useParams()}
            />
        );
    }

    return ComponentWithRouterProp;
}
