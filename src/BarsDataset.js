import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "./dataset/data";

const chartSetting = {
  yAxis: [
    {
      label: "Electric Range",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(0px, 0)",
    },
  },
};

const BarsDataset = () => {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "year" }]}
      series={[
        { dataKey: "modely", label: "MODEL Y", valueFormatter },
        { dataKey: "x5", label: "X5", valueFormatter },
        { dataKey: "boltev", label: "BOLT EV", valueFormatter },
        { dataKey: "q5e", label: "Q5E", valueFormatter },
      ]}
      {...chartSetting}
    />
  );
};

export default BarsDataset;
