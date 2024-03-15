import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function NetworkDiagram(){
    const areaChart = useRef()
    const dimensions = {width:400, height:200}
   
    
    
      useEffect(() => {


        const svg = d3.select(areaChart.current)
                    .attr('width', dimensions.width)
                    .attr('height', dimensions.height)
                    .style('background-color','white')

        const nodo = svg
                    .selectAll("circle")
                    .data(data)
                    .enter()
                    .append("circle")
                      .attr("r", d => d.valor   /* Math.floor((Math.random() * 40) + 1) */ )
                      .style("fill", "#69b3a2")

        const link = svg
                      .selectAll("line")
                      .data(links)
                      .enter()
                      .append("line")
                        .style("stroke", "#aaa")

        var simulation = d3.forceSimulation(nodes)                 // Force algorithm is applied to data.nodes
      .force("link", d3.forceLink()                               // This force provides links between nodes
            .id(function(d) { return d.id; })                     // This provide  the id of a node
            .links(data.links)                                    // and this the list of links
      )
      .force("charge", d3.forceManyBody().strength(-500))         // This adds repulsion between nodes. Play with the -400 for the repulsion strength
      .force("center", d3.forceCenter(dimensions.width / 2, dimensions.height / 2))     // This force attracts nodes to the center of the svg area
      .on("end", ticked);
      //.on("tick", () => this.tick());

      function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });
    
        nodo
             .attr("cx", function (d) { return d.x+6; })
             .attr("cy", function(d) { return d.y-6; });
      } 
       

      svg.selectAll("*").exit();

    
      }, [data]);
    
      return <svg ref={areaChart}> </svg>;
};
export default NetworkDiagram;