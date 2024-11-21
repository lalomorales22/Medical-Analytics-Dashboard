import React from 'react';
import { Users, Calendar, DollarSign } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-6">
        <div className="p-4 bg-pink-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Users className="text-pink-500" size={24} />
            <span className="text-2xl font-bold text-gray-800">39</span>
          </div>
          <p className="text-sm text-gray-600">Active Cases</p>
        </div>

        <div className="p-4 bg-pink-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="text-pink-500" size={24} />
            <span className="text-2xl font-bold text-gray-800">35</span>
          </div>
          <p className="text-sm text-gray-600">Scheduled Follow-ups</p>
        </div>

        <div className="p-4 bg-pink-50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="text-pink-500" size={24} />
            <span className="text-2xl font-bold text-gray-800">$32,630</span>
          </div>
          <p className="text-sm text-gray-600">Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;