import './barchartContainer.css'

import Barchart from './barchart'

const BarchartConatiner = () => {
    return (
        <div className="barchartContainer" style={{height:"650px"}}>

            <div style={{ display: "flex", alignItems: "center", margin: "12px 0px" }}>
                <span style={{ fontSize: "40px", color: "#EF233C", marginRight: "8px" }}> | </span>
                <div className="title">Your Products</div>
            </div>

            <div className="chartDiv" >
                <Barchart />
            </div>

        </div>
    )
}

export default BarchartConatiner