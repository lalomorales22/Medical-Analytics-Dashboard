import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', value: 65 },
  { date: 'Feb', value: 72 },
  { date: 'Mar', value: 68 },
  { date: 'Apr', value: 75 },
  { date: 'May', value: 82 },
  { date: 'Jun', value: 78 },
];

const HistoricalChart = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Recovery Trends</h3>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#ec4899" fill="#fce7f3" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HistoricalChart;