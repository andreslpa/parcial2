import * as d3 from "d3";
import { useRef, useEffect } from "react";
import { useIntl } from "react-intl";

const Visualization = (props) => {
  const canvas = useRef();
  const intl = useIntl();

  const data = props.series;

  const ylabel = intl.formatMessage({ id: "seasonsHeader" });
  const xlabel = intl.formatMessage({ id: "episodesHeader" });

  const width = 700;
  const height = 500;
  const margin = { top: 10, left: 50, bottom: 40, right: 10 };

  const drawChart = () => {
    d3.select(canvas.current).selectAll("*").remove();

    const svg = d3
      .select(canvas.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    let g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.episodes)])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.seasons)])
      .range([height - margin.bottom, margin.top]);

    const circles = g.selectAll("circle").data(data);

    circles
      .enter()
      .append("circle")
      .style("fill", "orange")
      .attr("class", "circle")
      .attr("cx", (d) => 12 + x(d.episodes))
      .attr("cy", (d) => y(d.seasons))
      .attr("r", 10);

    const labels = g.selectAll("text").data(data);

    labels
      .enter()
      .append("text")
      .attr("dominant-baseline", "central")
      .attr("x", (d) => 25 + x(d.episodes))
      .attr("y", (d) => y(d.seasons))
      .style("fill", "black")
      .text((d) => d.name);

    g.append("g")
      .classed("x--axis", true)
      .call(d3.axisBottom(x))
      .attr("transform", `translate(0, ${height - margin.bottom})`);

    g.append("g")
      .classed("y--axis", true)
      .call(d3.axisLeft(y))
      .attr("transform", `translate(${margin.left}, 0)`);

    svg
      .append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height)
      .text(xlabel);

    svg
      .append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", margin.left)
      .attr("transform", "rotate(-90)")
      .text(ylabel);
  };
  useEffect(
      () => 
      drawChart()
      , [data]);

  return <div ref={canvas}></div>;
};

export default Visualization;
