import React from 'react';
import { User, Phone, Car, Home, LineChart } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: 'personal', icon: User, label: 'Personal Info' },
    { id: 'contacts', icon: Phone, label: 'Contacts' },
    { id: 'vehicles', icon: Car, label: 'Vehicles' },
    { id: 'realEstate', icon: Home, label: 'Real Estate' },
    { id: 'investments', icon: LineChart, label: 'Investments' },
  ];

  return (
    <div className="border-b border-[#2D2D2F]/10">
      <nav className="flex -mb-px">
        {tabs.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`group inline-flex items-center px-6 py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer ${
              activeTab === id
                ? 'border-[#2173FF] text-[#2173FF]'
                : 'border-transparent text-[#2D2D2F]/60 hover:text-[#2D2D2F] hover:border-[#2D2D2F]/30'
            }`}
          >
            <Icon className="w-5 h-5 mr-2" />
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;