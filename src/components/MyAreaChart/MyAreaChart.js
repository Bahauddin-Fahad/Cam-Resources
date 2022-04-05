import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import UseChartData from "../../Hooks/UseChartData";

const MyAreaChart = () => {
  const [data] = UseChartData();
  return (
    <div className="flex flex-col items-center">
      <h2 className=" text-xl font-bold text-teal-500 mb-6">
        INVESTMENT VS REVENUE
      </h2>
      <AreaChart
        width={350}
        height={250}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 4"></CartesianGrid>
        <Area
          type={"monotone"}
          dataKey={"investment"}
          stackId="a"
          stroke="#6078F0"
          fill="#6078F0"
        ></Area>
        <Area
          type={"monotone"}
          dataKey={"revenue"}
          stackId="a"
          stroke="#27ac9b"
          fill="#2DD4BF"
        ></Area>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"investment"}></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
