import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyPieChart from "../MyPieChart/MyPieChart";
const Dashboard = () => {
  return (
    <div className=" grid grid-cols-2 gap-y-12 mb-10 px-10 py-4">
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
      <MyBarChart></MyBarChart>
      <MyPieChart></MyPieChart>
    </div>
  );
};

export default Dashboard;
