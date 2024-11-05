import React, { useState } from 'react';
import { Clock, ThumbsUp, ThumbsDown, Download, Filter, Star, Phone, Calendar, ArrowUpRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CallDetailsModal from '../components/CallDetailsModal';

const CallSummary = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('7d');
  const [selectedCall, setSelectedCall] = useState(null);

  const recentCalls = [
    {
      name: 'Michael Chen',
      company: 'Global Solutions',
      score: 92,
      duration: '15:42',
      sentiment: 'Positive',
      value: '$12,500',
      status: 'Qualified',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
      summary: 'Lead showed high interest in enterprise features. Discussed pricing options and implementation timeline.',
      topics: ['pricing', 'features', 'timeline', 'integration'],
      nextSteps: [
        'Schedule follow-up demo next week',
        'Send technical documentation',
        'Prepare custom integration proposal'
      ],
      sentimentDetails: {
        positive: 78,
        negative: 22
      }
    },
    {
      name: 'Sarah Thompson',
      company: 'TechCorp Inc.',
      score: 88,
      duration: '12:15',
      sentiment: 'Positive',
      value: '$9,800',
      status: 'Follow-up',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
      summary: 'Interested in premium features. Had questions about security compliance and data handling.',
      topics: ['security', 'compliance', 'pricing', 'features'],
      nextSteps: [
        'Send security compliance documentation',
        'Schedule technical review meeting',
        'Provide custom pricing proposal'
      ],
      sentimentDetails: {
        positive: 82,
        negative: 18
      }
    },
    {
      name: 'Emily Rodriguez',
      company: 'Innovate Labs',
      score: 75,
      duration: '08:30',
      sentiment: 'Neutral',
      value: '$7,200',
      status: 'New',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100',
      summary: 'Initial discovery call. Exploring options for team collaboration tools.',
      topics: ['collaboration', 'team size', 'budget', 'timeline'],
      nextSteps: [
        'Send product comparison sheet',
        'Follow up about team size requirements',
        'Schedule product demo'
      ],
      sentimentDetails: {
        positive: 65,
        negative: 35
      }
    }
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Call Summary</h1>
          <p className="text-gray-600 mt-1">AI-powered call analysis and lead scoring</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="all">All time</option>
          </select>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <span className="text-sm text-green-600 font-medium flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +5.2%
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-gray-900">12m 30s</p>
            <p className="text-sm text-gray-500">Avg. Call Duration</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Star className="h-5 w-5 text-green-600" />
            </div>
            <span className="text-sm text-green-600 font-medium flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +8.1%
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-gray-900">85.2</p>
            <p className="text-sm text-gray-500">Avg. Call Score</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <ThumbsUp className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-sm text-green-600 font-medium flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +12.3%
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-gray-900">78%</p>
            <p className="text-sm text-gray-500">Positive Sentiment</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Phone className="h-5 w-5 text-yellow-600" />
            </div>
            <span className="text-sm text-green-600 font-medium flex items-center">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +3.7%
            </span>
          </div>
          <div className="space-y-1">
            <p className="text-2xl font-semibold text-gray-900">2</p>
            <p className="text-sm text-gray-500">Great Leads Today</p>
          </div>
        </div>
      </div>

      {/* Recent Calls */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Recent Calls</h2>
            <button 
              onClick={() => navigate('/call-summary/all')}
              className="text-gray-600 hover:text-gray-700 text-sm font-medium"
            >
              View All Calls →
            </button>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {recentCalls.map((call, index) => (
            <div key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={call.image}
                    alt={call.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{call.name}</h3>
                    <p className="text-sm text-gray-500">{call.company}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{call.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-medium">{call.score}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    call.status === 'Qualified' ? 'bg-green-50 text-green-700' :
                    call.status === 'Follow-up' ? 'bg-yellow-50 text-yellow-700' :
                    call.status === 'New' ? 'bg-blue-50 text-blue-700' :
                    'bg-gray-50 text-gray-700'
                  }`}>
                    {call.status}
                  </span>
                  <div className="text-sm font-medium text-gray-900">{call.value}</div>
                  <button 
                    onClick={() => navigate(`/call-summary/${index + 1}`)}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Summary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call Details Modal */}
      {selectedCall && (
        <CallDetailsModal call={selectedCall} onClose={() => setSelectedCall(null)} />
      )}
    </div>
  );
};

export default CallSummary;