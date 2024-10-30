import React from 'react';
import { Plus, Filter, Download } from 'lucide-react';
import LeadCard from '../components/LeadCard';
import { useNavigate } from 'react-router-dom';

const leads = [
  {
    name: 'Sarah Thompson',
    email: 'sarah.t@example.com',
    company: 'TechCorp Inc.',
    status: 'Qualified',
    value: '$12,000',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    source: 'IDX Website',
    score: 85
  },
  {
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    company: 'Global Solutions',
    status: 'New',
    value: '$8,500',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
    source: 'IDX Website',
    score: 92
  },
  {
    name: 'Emily Rodriguez',
    email: 'emily.r@example.com',
    company: 'Innovate Labs',
    status: 'Contacted',
    value: '$15,750',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
    source: 'IDX Website',
    score: 78
  },
  {
    name: 'James Wilson',
    email: 'j.wilson@example.com',
    company: 'Quantum Tech',
    status: 'New',
    value: '$11,500',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100',
    source: 'IDX Website',
    score: 72
  },
  {
    name: 'Rachel Martinez',
    email: 'r.martinez@example.com',
    company: 'Cloud Innovations',
    status: 'Contacted',
    value: '$14,200',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100',
    source: 'IDX Website',
    score: 81
  }
];

const Leads = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-1">Manage and track your leads</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button 
            onClick={() => navigate('/leads/add')}
            className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option>All Leads</option>
                <option>New</option>
                <option>Contacted</option>
                <option>Qualified</option>
              </select>
              <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
                <option>All Sources</option>
                <option>IDX Website</option>
                <option>LinkedIn</option>
                <option>Phone</option>
              </select>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </button>
            </div>
            <div className="text-sm text-gray-600">
              Showing 1-7 of 45 leads
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {leads.map((lead, index) => (
            <LeadCard
              key={index}
              {...lead}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;