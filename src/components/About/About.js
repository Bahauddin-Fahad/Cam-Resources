import axios from "axios";
import React, { useEffect, useState } from "react";
const About = () => {
  const [specs, setSpecs] = useState([]);

  useEffect(() => {
    axios.get("specs.json").then((data) => setSpecs(data.data));
  }, []);

  return (
    <div>
      <h2 className=" text-4xl font-bold mb-6">Specifications</h2>
      {specs.map((spec) => (
        <div className=" text-white font-semibold font-serif border-2 rounded-md border-slate-800 flex items-center max-w-md mx-auto bg-teal-600 mb-3">
          <div className="mr-4 p-2 w-56 text-left">
            <div>{spec.name} :</div>
          </div>
          <div className="p-2 w-56">
            <div>{spec.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
