import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: number;
  icon?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, unit, trend, icon }) => {
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-2">
        {icon && <div className="text-pink-500 transform transition-transform duration-200 hover:scale-110">{icon}</div>}
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {unit && <span className="ml-1 text-gray-500 text-sm">{unit}</span>}
      </div>
      {trend !== undefined && (
        <div className={`mt-2 text-sm flex items-center ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          <span className="transform transition-transform duration-200 hover:scale-110">
            {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;