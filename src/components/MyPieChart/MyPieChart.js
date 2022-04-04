import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import UseChartData from "../../Hooks/UseChartData";

const MyPieChart = () => {
  const [data] = UseChartData();
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <h2 className=" text-2xl font-bold text-teal-500">
        INVESTMENT VS REVENUE
      </h2>
      <PieChart width={450} height={350}>
        <Pie
          data={data}
          dataKey={"investment"}
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#6078F0"
        ></Pie>
        <Pie
          data={data}
          dataKey={"revenue"}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#2DD4BF"
          label
        ></Pie>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default MyPieChart;
