import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalaryChart = () => {
  const data = [
    { year: '2019', February: 100, March: 150, April: 200 },
    { year: '2020', February: 200, March: 250, April: 300 },
    { year: '2021', February: 300, March: 350, April: 400 },
    { year: '2022', February: 400, March: 450, April: 500 },
  ];

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="February" stroke="#F4A26C" />
      <Line type="monotone" dataKey="March" stroke="#3FAEA3" />
      <Line type="monotone" dataKey="April" stroke="#914DF0" />
    </LineChart>
  );
};

export default SalaryChart;
