import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AnatomyModel from './components/AnatomyModel';
import VitalStats from './components/VitalStats';
import HistoricalChart from './components/HistoricalChart';
import ResourceAllocation from './components/ResourceAllocation';
import PatientStats from './components/PatientStats';
import QuickMetrics from './components/QuickMetrics';
import RightPanel from './components/RightPanel';
import { Brain, Heart, Activity } from 'lucide-react';

const systemTabs = [
  { id: 'nervous', label: 'Nervous System', icon: Brain },
  { id: 'cardio', label: 'Cardiovascular', icon: Heart },
  { id: 'muscular', label: 'Muscular', icon: Activity },
];

function App() {
  const [activeSystem, setActiveSystem] = useState('nervous');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-72 space-y-6">
            <Sidebar />
            <QuickMetrics />
            <ResourceAllocation />
          </div>

          {/* Center Content */}
          <div className="flex-1 space-y-6 min-w-[600px]">
            {/* System Tabs */}
            <div className="bg-white p-4 rounded-lg shadow-lg backdrop-blur-sm bg-opacity-90">
              <div className="flex space-x-4">
                {systemTabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSystem(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
                        activeSystem === tab.id
                          ? 'bg-pink-100 text-pink-600 shadow-md scale-105'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Model */}
            <AnatomyModel activeSystem={activeSystem} />

            {/* Vital Stats */}
            <VitalStats />
          </div>

          {/* Right Panel */}
          <div className="w-80 space-y-6">
            <RightPanel />
            <HistoricalChart />
            <PatientStats />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;