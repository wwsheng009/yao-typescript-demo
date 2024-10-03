import * as d3 from 'd3';

// yao run scripts.tests.d3.main
function main() {
  const data = [30, 86, 168, 281, 303, 365];
  const scaled = d3.scaleLinear().domain([0, 365]).range([0, 100]);
  const result = data.map((d) => scaled(d));
  console.log(result); // [8.22, 23.56, 46.03, 76.99, 82.98, 100]
}
