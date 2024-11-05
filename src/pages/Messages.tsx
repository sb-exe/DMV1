import React from 'react';
import { Search, Edit } from 'lucide-react';

const Messages = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-1">Communicate with your leads</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
          <Edit className="h-4 w-4 mr-2" />
          New Message
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm min-h-[600px] flex">
        <div className="w-80 border-r border-gray-200">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {['Sarah Thompson', 'Michael Chen', 'Emily Rodriguez'].map((name, i) => (
              <button
                key={i}
                className="w-full p-4 hover:bg-gray-50 flex items-center space-x-3 text-left"
              >
                <img
                  src={[
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
                  ][i]}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{name}</div>
                  <div className="text-sm text-gray-500">Last message...</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 p-6 flex items-center justify-center text-gray-500">
          Select a conversation to start messaging
        </div>
      </div>
    </div>
  );
};

export default Messages;