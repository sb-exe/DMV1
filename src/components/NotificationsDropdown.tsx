import React from 'react';
import { Bell, User, MessageSquare, Calendar, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Notification {
  id: string;
  type: 'lead' | 'message' | 'reminder';
  title: string;
  description: string;
  time: string;
  read: boolean;
  image?: string;
}

interface NotificationsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationsDropdown: React.FC<NotificationsDropdownProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'lead',
      title: 'New Lead: Sarah Thompson',
      description: 'New lead created from IDX website',
      time: '2 minutes ago',
      read: false,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100'
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      description: 'Michael Chen sent you a message',
      time: '1 hour ago',
      read: false
    },
    {
      id: '3',
      type: 'reminder',
      title: 'Follow-up Reminder',
      description: 'Schedule follow-up call with Emily Rodriguez',
      time: '3 hours ago',
      read: true
    }
  ];

  if (!isOpen) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'lead':
        return <User className="h-5 w-5 text-primary-500" />;
      case 'message':
        return <MessageSquare className="h-5 w-5 text-green-500" />;
      case 'reminder':
        return <Calendar className="h-5 w-5 text-purple-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const handleViewAll = () => {
    navigate('/notifications');
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200 max-h-[400px] overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-gray-50 ${!notification.read ? 'bg-primary-50' : ''}`}
          >
            <div className="flex space-x-3">
              {notification.image ? (
                <img
                  src={notification.image}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {getIcon(notification.type)}
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {notification.description}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500">{notification.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t border-gray-200">
        <button 
          onClick={handleViewAll}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsDropdown;