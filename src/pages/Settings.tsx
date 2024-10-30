import React, { useState } from 'react';
import { 
  X, Check, ExternalLink, AlertTriangle, ArrowUpRight,
  CreditCard, User, Lock, Bell, Globe, DollarSign
} from 'lucide-react';
import { getPlatformIcon } from '../utils/platformIcons';
import ManageApiModal from '../components/settings/ManageApiModal';
import ApiSetupModal from '../components/settings/ApiSetupModal';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('billing');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showApiSetup, setShowApiSetup] = useState(false);

  const connectedServices = [
    { 
      name: 'Google Ads',
      icon: 'google ads',
      status: 'Connected',
      lastSync: '2 hours ago'
    },
    { 
      name: 'Meta Ads',
      icon: 'meta',
      status: 'Connected',
      lastSync: '1 hour ago'
    },
    { 
      name: 'Google Analytics',
      icon: 'google analytics',
      status: 'Connected',
      lastSync: '30 minutes ago'
    }
  ];

  const availableServices = [
    { name: 'Bing Ads', icon: 'bing ads' },
    { name: 'Twitter Ads', icon: 'twitter' },
    { name: 'LinkedIn Ads', icon: 'linkedin' },
    { name: 'TikTok Ads', icon: 'tiktok' },
    { name: 'YouTube Ads', icon: 'youtube' },
    { name: 'Instagram Ads', icon: 'instagram' },
    { name: 'Mailchimp', icon: 'mailchimp' },
    { name: 'HubSpot', icon: 'hubspot' }
  ];

  const handleServiceConnect = (serviceName: string) => {
    setSelectedService(serviceName);
    setShowApiSetup(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'billing':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Plan</h2>
              
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Professional Plan</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  Billed monthly • Next billing date: April 1, 2024
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly subscription</span>
                  <span className="font-medium">$299/month</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Ad spend management (March 2024)</span>
                  <span className="font-medium">$4,500</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total for March 2024</span>
                    <span className="font-medium">$4,799</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-gray-500">Expires 12/25</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Update
                  </button>
                </div>

                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">Billing Address</div>
                      <div className="text-sm text-gray-500">123 Business St, Toronto, ON</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Update
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Billing History</h2>
              <div className="space-y-4">
                {[
                  { date: 'Mar 1, 2024', amount: '$4,799', status: 'Paid', items: ['Monthly subscription', 'Ad spend management'] },
                  { date: 'Feb 1, 2024', amount: '$4,299', status: 'Paid', items: ['Monthly subscription', 'Ad spend management'] },
                  { date: 'Jan 1, 2024', amount: '$4,599', status: 'Paid', items: ['Monthly subscription', 'Ad spend management'] }
                ].map((invoice, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium">{invoice.date}</div>
                      <div className="text-sm text-gray-500">{invoice.items.join(' • ')}</div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-green-600 text-sm">{invoice.status}</span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h2>
              <p className="text-gray-600 mb-4">
                Add an extra layer of security to your account by enabling two-factor authentication.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Enable 2FA
              </button>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Email Notifications</h2>
              <div className="space-y-4">
                {[
                  'New lead notifications',
                  'Campaign performance updates',
                  'Billing and invoice notifications',
                  'System updates and maintenance',
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-700">{setting}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'connections':
        return (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Connected Services</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
                {connectedServices.map((service, index) => (
                  <div key={index} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          {getPlatformIcon(service.icon, 'md')}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{service.name}</h3>
                          <p className="text-sm text-gray-500">Last synced: {service.lastSync}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedService(service)}
                        className="text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        Manage
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-900 mb-4">Available Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  {availableServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => handleServiceConnect(service.name)}
                      className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50"
                    >
                      <div className="p-2 bg-gray-50 rounded-lg mr-3">
                        {getPlatformIcon(service.icon, 'md')}
                      </div>
                      <span className="font-medium text-gray-900">{service.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <div className="flex space-x-8">
        <div className="w-64 flex-shrink-0">
          <div className="space-y-1">
            {[
              { id: 'billing', icon: CreditCard, label: 'Billing & Plans' },
              { id: 'profile', icon: User, label: 'Profile' },
              { id: 'security', icon: Lock, label: 'Security' },
              { id: 'notifications', icon: Bell, label: 'Notifications' },
              { id: 'connections', icon: Globe, label: 'Connections' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>

      {/* API Connection Modals */}
      {selectedService && !showApiSetup && (
        <ManageApiModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {showApiSetup && (
        <ApiSetupModal
          service={selectedService}
          onClose={() => {
            setSelectedService(null);
            setShowApiSetup(false);
          }}
        />
      )}
    </div>
  );
};

export default Settings;