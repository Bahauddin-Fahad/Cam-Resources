import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import UseChartData from "../../Hooks/UseChartData";

const MyBarChart = () => {
  const [data] = UseChartData();
  return (
    <div className="flex flex-col items-center">
      <h2 className=" text-2xl font-bold text-teal-500 mb-4">
        INVESTMENT VS REVENUE
      </h2>

      <BarChart width={450} height={350} data={data}>
        <CartesianGrid strokeDasharray="5 4"></CartesianGrid>
        <Bar dataKey={"investment"} stackId="a" fill="#6078F0"></Bar>
        <Bar dataKey={"revenue"} stackId="a" fill="#2DD4BF"></Bar>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"investment"}></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </BarChart>
    </div>
  );
};

export default MyBarChart;
