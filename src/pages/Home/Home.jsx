import React from "react";
import HomeFeatures from "./HomeFeatures";
import Chart from "../../Components/Chart/Chart";
import xAxisData from "../../datas";

const Home = () => {
  return (
    <div className="text-center w-full">
      <HomeFeatures />
      <Chart grid title="Monthly Sales" data={xAxisData} dataKey="sale" />
    </div>
  );
};

export default Home;
