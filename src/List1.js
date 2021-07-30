import React from "react";

export default (props)=>{

    return(
        <div>
            <ul>
                {
                    props.data.map((ele)=>{
                        return(
                            <li>{ele}</li>
                        )})
                }
            </ul>
        </div>
    )
}