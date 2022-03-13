import { memo } from "react"

// Using memo() to memoize the pure functional component for same props:
const AppbarActions = memo(({logo, text, selected, className}) => {
    return(
        <div className={className}
            style={{
                color: selected? "#EF233C" : "white",  
                display: "flex", 
                alignItems: "center", 
                font: "normal 300 16px/21px Roboto",
                marginRight: "25px",
            }}
        >
            <img alt="" src={logo} width="20px" height="20px" style={{marginRight:"8px"}} />
            {text}
        </div>
    )
})

export default AppbarActions