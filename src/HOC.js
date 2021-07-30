import React, { useEffect } from "react";

export default (WrappedComponent,data)=>{
    return ()=>{

        useEffect(() => {
            console.log(data);
        }, [])

        return(
            <WrappedComponent data={data}></WrappedComponent>
        )
    }
}