import React from 'react';
import { Search, Bell, Filter, MoreVertical, ArrowUpRight } from 'lucide-react';
import LeadCard from './LeadCard';
import StatsCard from './StatsCard';

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-auto p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-medium">JD</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Leads"
          value="2,543"
          change="+12.5%"
          positive={true}
        />
        <StatsCard
          title="Converted"
          value="1,567"
          change="+8.2%"
          positive={true}
        />
        <StatsCard
          title="Pending"
          value="892"
          change="-2.4%"
          positive={false}
        />
        <StatsCard
          title="Revenue"
          value="$125.4k"
          change="+15.3%"
          positive={true}
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Recent Leads</h2>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Add Lead
              </button>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          <LeadCard
            name="Sarah Thompson"
            email="sarah.t@example.com"
            company="TechCorp Inc."
            status="Qualified"
            value="$12,000"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
            source="facebook"
          />
          <LeadCard
            name="Michael Chen"
            email="m.chen@example.com"
            company="Global Solutions"
            status="New"
            value="$8,500"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
            source="phone"
          />
          <LeadCard
            name="Emily Rodriguez"
            email="emily.r@example.com"
            company="Innovate Labs"
            status="Contacted"
            value="$15,750"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
            source="linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;