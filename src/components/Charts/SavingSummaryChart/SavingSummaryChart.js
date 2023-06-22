import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  defs,
  linearGradient,
  stop,
} from "recharts";

const data = [
  {
    name: "May 01",
    lastManth: 4000,
    thisManth: 2400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 3000,
    thisManth: 4400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 1000,
    thisManth: 5400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 2000,
    thisManth: 3400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 4400,
    thisManth: 1400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 2060,
    thisManth: 2400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 1000,
    thisManth: 2400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 1500,
    thisManth: 3400,
    amt: 2400,
  },
  {
    name: "May 01",
    lastManth: 4000,
    thisManth: 2400,
    amt: 2400,
  },
];

const SavingSummaryChart = () => {
  return (
    <AreaChart
      width={712}
      height={229}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid
        horizontal={false}
        strokeDasharray="3 3"
      />
      <YAxis axisLine={false} />
      <Tooltip />
      <defs>
        <linearGradient
          id="colorUv"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="20%"
            stopColor="rgba(41, 157, 145, 0.5)"
            stopOpacity={0.8}
          />
          <stop
            offset="80%"
            stopColor="rgba(217, 217, 217, 0)"
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="lastManth"
        stroke="rgba(41, 157, 145, 0.5)"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
      <Area
        type="monotone"
        dataKey="thisManth"
        stroke="rgba(209, 209, 209, 1)"
        fillOpacity={1}
        fill="transparent"
      />
    </AreaChart>
  );
};

export default SavingSummaryChart;
