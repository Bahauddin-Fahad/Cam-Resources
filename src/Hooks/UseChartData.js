import axios from "axios";
import { useEffect, useState } from "react";
const UseChartData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((data) => setData(data.data));
  }, []);
  return [data, setData];
};

export default UseChartData;
