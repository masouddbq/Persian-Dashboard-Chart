import React from "react";
import HomeFeatures from "./HomeFeatures";
import Chart from "../../Components/Chart/Chart";
import xAxisData from "../../datas";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";


const Home = () => {
  return (
    <div className="text-center w-full">
      <HomeFeatures />
      <Chart grid title="فروش ماهانه" data={xAxisData} dataKey="sale" />
      <div className="flex">
      <WidgetSm />
      </div>
    </div>
  );
};

export default Home;
