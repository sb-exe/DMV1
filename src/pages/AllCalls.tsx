import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Filter, Download, Search } from 'lucide-react';

const AllCalls = () => {
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('last-7-days');

  const calls = [
    {
      id: 1,
      name: 'Sarah Thompson',
      company: 'TechCorp Inc.',
      duration: '15:42',
      date: '2024-03-15',
      score: 92,
      sentiment: 'Positive',
      status: 'Qualified',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Solutions',
      duration: '08:15',
      date: '2024-03-14',
      score: 75,
      sentiment: 'Neutral',
      status: 'Follow-up',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Innovate Labs',
      duration: '12:30',
      date: '2024-03-14',
      score: 88,
      sentiment: 'Positive',
      status: 'Converted',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  const getSentimentColor = (sentiment) => {
    const colors = {
      Positive: 'text-green-600',
      Neutral: 'text-yellow-600',
      Negative: 'text-red-600'
    };
    return colors[sentiment] || 'text-gray-600';
  };

  const getStatusColor = (status) => {
    const colors = {
      Qualified: 'bg-green-50 text-green-700',
      'Follow-up': 'bg-yellow-50 text-yellow-700',
      Converted: 'bg-blue-50 text-blue-700'
    };
    return colors[status] || 'bg-gray-50 text-gray-700';
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">All Calls</h1>
          <p className="text-gray-600 mt-1">View and analyze all call recordings</p>
        </div>
        <div className="flex items-center space-x-3">
          <select 
            className="border border-gray-200 rounded-lg px-4 py-2 text-sm"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="last-7-days">Last 7 days</option>
            <option value="last-30-days">Last 30 days</option>
            <option value="last-90-days">Last 90 days</option>
            <option value="custom">Custom range</option>
          </select>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search calls..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 bg-gray-50">
                <th className="px-6 py-4 font-medium">Lead</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium">Score</th>
                <th className="px-6 py-4 font-medium">Sentiment</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {calls.map((call) => (
                <tr key={call.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={call.image}
                        alt={call.name}
                        className="h-8 w-8 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium text-gray-900">{call.name}</div>
                        <div className="text-sm text-gray-500">{call.company}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{call.date}</td>
                  <td className="px-6 py-4 text-gray-600">{call.duration}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900">{call.score}</span>
                      <span className="text-sm text-gray-500 ml-1">/100</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`font-medium ${getSentimentColor(call.sentiment)}`}>
                      {call.sentiment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(call.status)}`}>
                      {call.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate(`/call-summary/${call.id}`)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      View Summary
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCalls;