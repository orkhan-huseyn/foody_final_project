import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const OrdersChart = () => {
  const data = [
    { name: 'KFC', value: 30 },
    { name: 'KLM', value: 40 },
    { name: 'American Express', value: 50 },
  ];

  const COLORS = ['#EB5757', '#A84069', '#BB6BD9'];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default OrdersChart;
