import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { age: '0-20', male: 15, female: 20 },
  { age: '21-40', male: 25, female: 30 },
  { age: '41-60', male: 35, female: 32 },
  { age: '61-80', male: 28, female: 25 },
  { age: '80+', male: 18, female: 22 },
];

const PatientStats = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-[300px]">
      <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="male" fill="#ec4899" name="Male" />
          <Bar dataKey="female" fill="#f472b6" name="Female" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientStats;