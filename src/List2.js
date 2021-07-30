import React from "react";

export default (props)=>{

    return(
        <>
            <ul style={{listStyleType:'square'}}>
                {
                    props.data.map((ele)=>{
                        return(
                            <li>{ele}</li>
                        )})
                }
            </ul>
        </>
    )
}