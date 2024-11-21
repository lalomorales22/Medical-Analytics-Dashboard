import React from 'react';
import { Heart, Activity, Droplet, Gauge } from 'lucide-react';
import MetricCard from './MetricCard';

const VitalStats = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <MetricCard
        title="Heart Rate"
        value={75}
        unit="bpm"
        trend={2}
        icon={<Heart />}
      />
      <MetricCard
        title="Respiratory Rate"
        value={16}
        unit="rpm"
        trend={-1}
        icon={<Gauge />}
      />
      <MetricCard
        title="Blood Pressure"
        value="120/80"
        unit="mmHg"
        icon={<Activity />}
      />
      <MetricCard
        title="Oxygen Level"
        value={98}
        unit="%"
        trend={1}
        icon={<Droplet />}
      />
    </div>
  );
};

export default VitalStats;