import React, { useState } from 'react';
import { ArrowLeft, Filter, Search, Bell, User, MessageSquare, Calendar, Check, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  type: 'lead' | 'message' | 'reminder' | 'campaign' | 'system';
  title: string;
  description: string;
  time: string;
  date: string;
  read: boolean;
  image?: string;
  priority?: 'high' | 'medium' | 'low';
}

const Notifications = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const notifications: Notification[] = [
    {
      id: '1',
      type: 'lead',
      title: 'New Lead: Sarah Thompson',
      description: 'New lead created from IDX website',
      time: '2:30 PM',
      date: '2024-03-15',
      read: false,
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      description: 'Michael Chen sent you a message regarding the proposal',
      time: '1:45 PM',
      date: '2024-03-15',
      read: false,
      priority: 'medium'
    },
    {
      id: '3',
      type: 'reminder',
      title: 'Follow-up Reminder',
      description: 'Schedule follow-up call with Emily Rodriguez',
      time: '11:20 AM',
      date: '2024-03-15',
      read: true,
      priority: 'medium'
    },
    {
      id: '4',
      type: 'campaign',
      title: 'Campaign Performance Alert',
      description: 'Summer Collection campaign has exceeded target conversion rate',
      time: '10:15 AM',
      date: '2024-03-15',
      read: true,
      priority: 'low'
    },
    {
      id: '5',
      type: 'lead',
      title: 'New Lead: David Kim',
      description: 'New lead assigned to you from LinkedIn campaign',
      time: '9:30 AM',
      date: '2024-03-15',
      read: false,
      priority: 'high',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'lead':
        return <User className="h-5 w-5 text-primary-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case 'reminder':
        return <Calendar className="h-5 w-5 text-purple-500" />;
      case 'campaign':
        return <Bell className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 text-red-700';
      case 'medium':
        return 'bg-yellow-50 text-yellow-700';
      case 'low':
        return 'bg-green-50 text-green-700';
      default:
        return 'bg-gray-50 text-gray-700';
    }
  };

  const filteredNotifications = notifications
    .filter(notification => {
      const matchesType = selectedType === 'all' || notification.type === selectedType;
      const matchesStatus = selectedStatus === 'all' || 
        (selectedStatus === 'read' ? notification.read : !notification.read);
      const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notification.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesType && matchesStatus && matchesSearch;
    });

  const markAllAsRead = () => {
    // Here you would update the read status in your state management system
    alert('All notifications marked as read');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">View and manage your notifications</p>
          </div>
        </div>
        <button
          onClick={markAllAsRead}
          className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200"
        >
          <Check className="h-4 w-4 mr-2" />
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search notifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 w-64"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Types</option>
                <option value="lead">Leads</option>
                <option value="message">Messages</option>
                <option value="reminder">Reminders</option>
                <option value="campaign">Campaigns</option>
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">All Status</option>
                <option value="unread">Unread</option>
                <option value="read">Read</option>
              </select>
            </div>
            <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 hover:bg-gray-50 ${!notification.read ? 'bg-primary-50' : ''}`}
            >
              <div className="flex items-start space-x-4">
                {notification.image ? (
                  <img
                    src={notification.image}
                    alt=""
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {getIcon(notification.type)}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </h3>
                        {notification.priority && (
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                            {notification.priority.charAt(0).toUpperCase() + notification.priority.slice(1)}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {notification.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-900">{notification.time}</p>
                        <p className="text-xs text-gray-500">{notification.date}</p>
                      </div>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;