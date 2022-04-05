import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import UseChartData from "../../Hooks/UseChartData";

const MyPieChart = () => {
  const [data] = UseChartData();
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-bold text-teal-500 mb-6">
        INVESTMENT VS REVENUE
      </h2>
      <PieChart width={350} height={250}>
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
