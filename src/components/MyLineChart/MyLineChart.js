import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import UseChartData from "../../Hooks/UseChartData";

const MyLineChart = () => {
  const [data] = UseChartData();
  return (
    <div className="flex flex-col items-center -z-50">
      <h2 className=" text-2xl font-bold text-teal-500 mb-4">
        MONTH WISE SELL
      </h2>
      <LineChart
        width={450}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line
          type="monotone"
          dataKey={"sell"}
          strokeWidth={3}
          stroke="#2DD4BF"
        ></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis dataKey={"sell"}></YAxis>
        <Tooltip />
        <Legend></Legend>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
