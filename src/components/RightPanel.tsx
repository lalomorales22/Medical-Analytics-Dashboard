import React from 'react';
import { AlertCircle, Clock, BellRing } from 'lucide-react';

const RightPanel = () => {
  const alerts = [
    { id: 1, type: 'critical', message: 'Patient #2847 requires immediate attention', time: '2m ago' },
    { id: 2, type: 'warning', message: 'Lab results ready for review', time: '5m ago' },
    { id: 3, type: 'info', message: 'New appointment scheduled', time: '15m ago' },
  ];

  const getAlertStyles = (type: string) => {
    switch (type) {
      case 'critical':
        return 'bg-red-50 border-red-200 text-red-700';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-700';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-700';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Alerts</h3>
        <BellRing className="text-pink-500" size={20} />
      </div>

      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-3 rounded-lg border ${getAlertStyles(alert.type)} flex items-start space-x-3`}
          >
            <AlertCircle className="flex-shrink-0 mt-1" size={16} />
            <div className="flex-1">
              <p className="text-sm">{alert.message}</p>
              <div className="flex items-center mt-1 text-xs opacity-75">
                <Clock size={12} className="mr-1" />
                {alert.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;