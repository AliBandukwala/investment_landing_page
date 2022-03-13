import { useState, useEffect, useRef } from "react"
import * as d3 from 'd3'

import './barchart.css'

const chartData = [
    { product: "LIQID Cash", value: 920 },
    { product: "LIQID Real Estate", value: 630 },
    { product: "LIQID Wealth", value: 850 },
    { product: "LIQID Private Equity", value: 220 },
    { product: "LIQID Venture", value: 510 },
]

const Barchart = () => {

    const d3Chart = useRef() // reference to D3 Chart

    const updateSize = useRef(false) // reference for updating the screen size

    const [dim, setDim] = useState({ width: window.innerWidth, height: window.innerHeight }) // state to manage the screen size and chart accordingly

    const margin = { top: 50, right: 30, bottom: 30, left: 60 }

    // Color codes for each bar in the chart
    var colors = d3.scaleOrdinal()
        .domain(['LIQID Cash', 'LIQID Real Estate', 'LIQID Wealth', 'LIQID Private Equity', 'LIQID Venture'])
        .range(['#C9B7C5', '#AFDDAF', '#076283', '#79C6C0', '#FFE163'])

    // Method to draw the chart:
    const drawChart = () => {
        const chartWidth = parseInt(d3.select("#d3BarChart").style("width")) - margin.left - margin.right
        const chartHeight = parseInt(d3.select("#d3BarChart").style("height")) - margin.top - margin.bottom

        const svg = d3.select(d3Chart.current)
            .attr("width", chartWidth + margin.left + margin.right)
            .attr("height", chartHeight + margin.top + margin.bottom)

        const x = d3.scaleBand()
            .domain(d3.range(chartData.length))
            .range([margin.left, chartWidth - margin.right])
            .padding(0.1)

        svg.append("g")
            .attr("transform", "translate(0," + chartHeight + ")")
            .call(d3.axisBottom(x).tickFormat(i => chartData[i].product).tickSizeOuter(0))

        const max = d3.max(chartData, d => d.value)

        const y = d3.scaleLinear()
            .domain([0, max])
            .range([chartHeight, margin.top])

        svg.append("g")
            .attr("transform", "translate(" + margin.left + ",0)")
            .call(d3.axisLeft(y))


        // Code for showing tooltip on hover on each bar (doesn't work):
        // Show tooltip on mouse enter event: 
        const mouseEnter = (d, i) => {

            console.log(d3.select(this).attr("x"))
            let xPos = parseFloat(d3.select(this).attr("x") + x.bandwidth()/2)
            let yPos = parseFloat(d3.select(this).attr("y")/2 )

            d3.select("#tooltip")
                    .style("left", xPos+"px")
                    .style("top", yPos+"px")
                    .select("#value").text(i.value)

            d3.select("#tooltip").classed("hidden", false)
        };

        // Hide tooltip on mouse leave event:
        const mouseLeave = (event, d) => {
            d3.select("#tooltip").classed("hidden", true)
        }

        svg.append("g")
            .selectAll("rect")
            .data(chartData)
            .join("rect")
            .attr("fill", function (d, i) { return colors(d.product) })
            .attr("x", (d, i) => x(i))
            .attr("y", d => y(d.value))
            .attr("height", d => y(0) - y(d.value))
            .attr("width", x.bandwidth()) 
            .on("mouseout", mouseLeave)
            .on("mouseover", mouseEnter)    
            
        /* Code for Text with price values above each bar (doesn't work):
        svg.selectAll(".bar-title")
            .data(chartData)
            .enter()
            .append("text")
            .classed('bar-title', true)
            .attr('text-anchor', 'middle')
            .attr("x", d => x(d.product) + x.bandwidth()/2)
            .attr("y", d => y(d.value) - 5)
            .text(d => `${d.value}`);*/
    }

    // method to handle the resizing of the chart according to the screen size:
    const handleResize = () => {
        setDim({ width: window.innerWidth, height: window.innerHeight })

        if (updateSize.current) {
            d3.selectAll("g").remove()
        }
        else {
            updateSize.current = true
        }
    }

    useEffect(() => {
        var resize;
        window.addEventListener("resize", () => {
            clearTimeout(resize);
            resize = setTimeout(handleResize, 300); // adding debounce to the resize event handler for performance optimization
        })

        drawChart(dim)

    }, [dim])

    return (
        <div id="d3BarChart" className="d3BarChart">

            <div id="tooltip" className="hidden">
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <strong>Total: </strong>
                    <span id="value">100</span>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <strong>Initial Investment: </strong>
                    <span>85</span>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <strong>Growth: </strong>
                    <span>1.000%</span>
                </div>
            </div>

            <svg ref={d3Chart}></svg>
        </div>
    )
}

export default Barchart