import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Plus } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import StatsCard from '../components/StatsCard';
import LeadCard from '../components/LeadCard';
import CampaignCard from '../components/CampaignCard';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
];

const topCampaigns = [
  {
    id: 1,
    name: "Summer Sale 2024",
    description: "Promotional campaign for summer collection",
    status: "Active",
    progress: 75,
    conversions: 125,
    spend: "$3,750",
    startDate: "Jun 1, 2024",
    endDate: "Aug 31, 2024",
    type: "Search",
    platforms: ["Google Ads", "Bing Ads"]
  },
  {
    id: 2,
    name: "Product Launch",
    description: "New product line announcement",
    status: "Active",
    progress: 65,
    conversions: 98,
    spend: "$2,890",
    startDate: "Jul 15, 2024",
    endDate: "Aug 15, 2024",
    type: "Display",
    platforms: ["Meta", "Instagram", "TikTok"],
    thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80"
  }
];

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Leads"
          value="2,543"
          change="+12.5%"
          positive={true}
        />
        <StatsCard
          title="Active Campaigns"
          value="8"
          change="+3.2%"
          positive={true}
        />
        <StatsCard
          title="Qualified Calls"
          value="156"
          change="+15.8%"
          positive={true}
        />
        <StatsCard
          title="Conversion Rate"
          value="24.8%"
          change="+5.3%"
          positive={true}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Lead Growth</h2>
            <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Lead Sources</h2>
          <div className="space-y-4">
            {[
              { name: 'Website', value: 35, color: 'bg-blue-500' },
              { name: 'Social Media', value: 25, color: 'bg-green-500' },
              { name: 'Calls', value: 20, color: 'bg-purple-500' },
              { name: 'Referrals', value: 12, color: 'bg-yellow-500' },
              { name: 'Other', value: 8, color: 'bg-gray-500' },
            ].map((source) => (
              <div key={source.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{source.name}</span>
                  <span className="font-medium">{source.value}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`${source.color} h-2 rounded-full`}
                    style={{ width: `${source.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Top Performing Campaigns</h2>
          <a href="/campaigns" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All Campaigns →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {topCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Recent Leads</h2>
            <div className="flex items-center space-x-3">
              <a href="/leads" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All Leads →
              </a>
              <button 
                onClick={() => navigate('/leads/add')}
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
              >
                <Plus className="h-4 w-4 mr-2" />
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
            source="Facebook"
            score={92}
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
          />
          <LeadCard
            name="Michael Chen"
            email="m.chen@example.com"
            company="Global Solutions"
            status="New"
            value="$8,500"
            source="Phone"
            score={85}
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
          />
          <LeadCard
            name="Emily Rodriguez"
            email="emily.r@example.com"
            company="Innovate Labs"
            status="Contacted"
            value="$15,750"
            source="Google"
            score={78}
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;