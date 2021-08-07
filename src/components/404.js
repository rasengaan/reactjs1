import { LightMode } from "../context/context"

export default ()=>{
    return(
        <LightMode.Consumer>
            {
                context=>(
                    <div className={`container-flex bg-${context.mode} text-center text-danger pt-3`} style={{minHeight:'93%'}}>
                        <h1 style={{fontSize:'calc(1rem + 1vw)'}}>
                            CHECK URL SOMETHING NOT RIGHT
                        </h1>
                    </div>
                )
            }
        </LightMode.Consumer>
    )
}