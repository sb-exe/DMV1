import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Filter, LayoutGrid, List, X, Calendar, DollarSign } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import CampaignCard from '../components/CampaignCard';
import { getPlatformIcon } from '../utils/platformIcons';

const adPerformanceData = [
  { month: 'Jan', spend: 12000, conversions: 450, revenue: 45000 },
  { month: 'Feb', spend: 15000, conversions: 520, revenue: 52000 },
  { month: 'Mar', spend: 18000, conversions: 610, revenue: 61000 },
  { month: 'Apr', spend: 14000, conversions: 480, revenue: 48000 },
  { month: 'May', spend: 16000, conversions: 550, revenue: 55000 },
  { month: 'Jun', spend: 13000, conversions: 440, revenue: 44000 },
];

const emailPerformanceData = [
  { month: 'Jan', sent: 10000, opened: 4500, clicked: 1200 },
  { month: 'Feb', sent: 12000, opened: 5400, clicked: 1500 },
  { month: 'Mar', sent: 15000, opened: 6750, clicked: 1800 },
  { month: 'Apr', sent: 11000, opened: 4950, clicked: 1320 },
  { month: 'May', sent: 13000, opened: 5850, clicked: 1560 },
  { month: 'Jun', sent: 14000, opened: 6300, clicked: 1680 },
];

const adCampaigns = [
  {
    name: 'Summer Collection Launch',
    description: 'Promotional campaign for new summer products',
    type: 'Search',
    platforms: ['Google Ads'],
    status: 'Active',
    progress: 75,
    conversions: 1250,
    budget: '$5,000',
    roas: '3.2x',
    startDate: 'Jun 1, 2024',
    endDate: 'Aug 31, 2024'
  },
  {
    name: 'Brand Awareness',
    description: 'Display campaign across social media',
    type: 'Display',
    platforms: ['Meta', 'Instagram'],
    status: 'Active',
    progress: 60,
    conversions: 850,
    budget: '$3,500',
    roas: '2.8x',
    startDate: 'Jul 1, 2024',
    endDate: 'Sep 30, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80'
  },
  {
    name: 'Holiday Special',
    description: 'End of year promotion campaign',
    type: 'Search',
    platforms: ['Bing Ads'],
    status: 'Draft',
    progress: 0,
    conversions: 0,
    budget: '$7,500',
    roas: '-',
    startDate: 'Dec 1, 2024',
    endDate: 'Dec 31, 2024'
  },
  {
    name: 'Social Media Retargeting',
    description: 'Retargeting campaign for website visitors',
    type: 'Display',
    platforms: ['Meta', 'Instagram', 'TikTok'],
    status: 'Paused',
    progress: 45,
    conversions: 320,
    budget: '$2,000',
    roas: '2.1x',
    startDate: 'May 15, 2024',
    endDate: 'Jun 15, 2024',
    thumbnail: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=300&q=80'
  }
];

const emailCampaigns = [
  {
    name: 'June Newsletter',
    description: 'Monthly newsletter with product updates',
    type: 'Email',
    status: 'Sent',
    progress: 100,
    recipients: 5000,
    openRate: '24.5%',
    clickRate: '12.3%',
    unsubscribeRate: '0.5%',
    subject: 'Check out our latest products! 🚀',
    from: 'marketing@company.com',
    sentDate: 'Jun 1, 2024'
  },
  {
    name: 'Product Launch',
    description: 'New summer collection announcement',
    type: 'Email',
    status: 'Scheduled',
    progress: 0,
    recipients: 7500,
    subject: 'Introducing our Summer Collection ☀️',
    from: 'marketing@company.com',
    scheduledDate: 'Jul 15, 2024'
  }
];

const Campaigns = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [campaignType, setCampaignType] = useState<'ad' | 'email'>('ad');
  const [selectedEmail, setSelectedEmail] = useState<any>(null);
  const [editCampaign, setEditCampaign] = useState<any>(null);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditCampaign(null);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Campaigns</h1>
          <p className="text-gray-600 mt-1">Manage your marketing campaigns</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-500'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
          <button
            onClick={() => navigate('/campaigns/create')}
            className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setCampaignType('ad')}
            className={`px-4 py-2 rounded-lg font-medium ${
              campaignType === 'ad'
                ? 'bg-red-50 text-red-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Ad Campaigns
          </button>
          <button
            onClick={() => setCampaignType('email')}
            className={`px-4 py-2 rounded-lg font-medium ${
              campaignType === 'email'
                ? 'bg-red-50 text-red-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Email Marketing
          </button>
        </div>
      </div>

      {campaignType === 'ad' && (
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Ad Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="spend" name="Ad Spend" stroke="#3B82F6" />
                <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue" stroke="#10B981" />
                <Line yAxisId="right" type="monotone" dataKey="conversions" name="Conversions" stroke="#6366F1" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {campaignType === 'email' && (
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Email Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={emailPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="sent" name="Sent" fill="#3B82F6" fillOpacity={0.1} stroke="#3B82F6" />
                <Area type="monotone" dataKey="opened" name="Opened" fill="#10B981" fillOpacity={0.1} stroke="#10B981" />
                <Area type="monotone" dataKey="clicked" name="Clicked" fill="#6366F1" fillOpacity={0.1} stroke="#6366F1" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {campaignType === 'ad' ? (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-6">
            {adCampaigns.map((campaign, index) => (
              <CampaignCard
                key={index}
                {...campaign}
                onEdit={() => setEditCampaign(campaign)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 font-medium grid grid-cols-8 gap-4">
              <div className="col-span-2">Campaign</div>
              <div>Type</div>
              <div>Platform</div>
              <div>Status</div>
              <div>Budget</div>
              <div>ROAS</div>
              <div>Actions</div>
            </div>
            <div className="divide-y divide-gray-200">
              {adCampaigns.map((campaign, index) => (
                <div key={index} className="px-6 py-4 grid grid-cols-8 gap-4 items-center">
                  <div className="col-span-2">
                    <div className="font-medium text-gray-900">{campaign.name}</div>
                    <div className="text-sm text-gray-500">{campaign.description}</div>
                  </div>
                  <div>{campaign.type}</div>
                  <div className="flex items-center space-x-2">
                    {campaign.platforms.map((platform, i) => (
                      <div key={i} className="p-1 bg-gray-50 rounded">
                        {getPlatformIcon(platform)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === 'Active' ? 'bg-green-50 text-green-700' :
                      campaign.status === 'Paused' ? 'bg-yellow-50 text-yellow-700' :
                      'bg-gray-50 text-gray-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div className="font-medium">{campaign.budget}</div>
                  <div>{campaign.roas}</div>
                  <div>
                    <button 
                      onClick={() => setEditCampaign(campaign)}
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      ) : (
        viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-6">
            {emailCampaigns.map((campaign, index) => (
              <CampaignCard
                key={index}
                {...campaign}
                onEdit={() => setSelectedEmail(campaign)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="px-6 py-4 border-b border-gray-200 font-medium grid grid-cols-7 gap-4">
              <div className="col-span-2">Campaign</div>
              <div>Status</div>
              <div>Recipients</div>
              <div>Open Rate</div>
              <div>Click Rate</div>
              <div>Actions</div>
            </div>
            <div className="divide-y divide-gray-200">
              {emailCampaigns.map((campaign, index) => (
                <div key={index} className="px-6 py-4 grid grid-cols-7 gap-4 items-center">
                  <div className="col-span-2">
                    <div className="font-medium text-gray-900">{campaign.name}</div>
                    <div className="text-sm text-gray-500">{campaign.subject}</div>
                  </div>
                  <div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      campaign.status === 'Sent' ? 'bg-green-50 text-green-700' :
                      campaign.status === 'Scheduled' ? 'bg-red-50 text-red-700' :
                      'bg-gray-50 text-gray-700'
                    }`}>
                      {campaign.status}
                    </span>
                  </div>
                  <div>{campaign.recipients?.toLocaleString()}</div>
                  <div>{campaign.openRate || '-'}</div>
                  <div>{campaign.clickRate || '-'}</div>
                  <div>
                    <button
                      onClick={() => setSelectedEmail(campaign)}
                      className="text-red-600 hover:text-red-700 font-medium"
                    >
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}

      {/* Email Preview Modal */}
      {selectedEmail && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedEmail.name}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">From: {selectedEmail.from}</p>
                    <p className="text-sm text-gray-600">Subject: {selectedEmail.subject}</p>
                    <p className="text-sm text-gray-600">
                      {selectedEmail.status === 'Sent' ? `Sent: ${selectedEmail.sentDate}` : `Scheduled: ${selectedEmail.scheduledDate}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedEmail(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              {selectedEmail.status === 'Sent' && (
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Open Rate</div>
                    <div className="text-xl font-semibold text-gray-900">{selectedEmail.openRate}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Click Rate</div>
                    <div className="text-xl font-semibold text-gray-900">{selectedEmail.clickRate}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Unsubscribe Rate</div>
                    <div className="text-xl font-semibold text-gray-900">{selectedEmail.unsubscribeRate}</div>
                  </div>
                </div>
              )}

              <img
                src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&q=80&w=800"
                alt="Email preview"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Ad Campaign Edit Modal */}
      {editCampaign && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Edit Campaign</h3>
                  <p className="text-sm text-gray-600 mt-1">{editCampaign.name}</p>
                </div>
                <button
                  onClick={() => setEditCampaign(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleEditSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      defaultValue={editCampaign.budget.replace('$', '')}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="date"
                        defaultValue={editCampaign.startDate}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="date"
                        defaultValue={editCampaign.endDate}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select 
                    defaultValue={editCampaign.status}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Paused">Paused</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setEditCampaign(null)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Campaigns;