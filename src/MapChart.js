import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const MapChart = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 600;
    const height = 250;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("border", "1px solid black");

    d3.json(
      "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
    )
      .then((data) => {
        console.log("Data loaded: ", data);

        const projection = d3
          .geoMercator()
          .scale(150)
          .translate([width / 2, height / 1.5]);

        const path = d3.geoPath().projection(projection);

        svg
          .selectAll("path")
          .data(data.features)
          .enter()
          .append("path")
          .attr("d", path)
          .attr("fill", "#ccc")
          .attr("stroke", "#333")
          .attr("stroke-width", 0.5);
      })
      .catch((error) => {
        console.error("Error fetching GeoJSON data: ", error);
      });
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default MapChart;
