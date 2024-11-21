import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'ICU', value: 35 },
  { name: 'Emergency', value: 25 },
  { name: 'Outpatient', value: 20 },
  { name: 'Surgery', value: 20 },
];

const COLORS = ['#ec4899', '#f472b6', '#f9a8d4', '#fbcfe8'];

const ResourceAllocation = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-64">
      <h3 className="text-lg font-semibold mb-4">Department Distribution</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResourceAllocation;