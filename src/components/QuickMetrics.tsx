import React from 'react';
import { Clock, UserCheck, Stethoscope, ClipboardCheck } from 'lucide-react';

const QuickMetrics = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <div className="flex items-center space-x-3">
        <Clock className="text-pink-500" />
        <div>
          <h4 className="text-sm font-medium text-gray-600">Avg. Wait Time</h4>
          <p className="text-xl font-bold">14.5 min</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <UserCheck className="text-pink-500" />
        <div>
          <h4 className="text-sm font-medium text-gray-600">Patient Satisfaction</h4>
          <p className="text-xl font-bold">94%</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Stethoscope className="text-pink-500" />
        <div>
          <h4 className="text-sm font-medium text-gray-600">Consultations Today</h4>
          <p className="text-xl font-bold">128</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <ClipboardCheck className="text-pink-500" />
        <div>
          <h4 className="text-sm font-medium text-gray-600">Completed Cases</h4>
          <p className="text-xl font-bold">1,284</p>
        </div>
      </div>
    </div>
  );
};

export default QuickMetrics;