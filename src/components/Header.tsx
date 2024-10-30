import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';
import NotificationsDropdown from './NotificationsDropdown';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </button>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search leads, companies, contacts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Mobile search button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Search className="h-5 w-5 text-gray-600" />
          </button>

          {/* Notifications */}
          <div ref={notificationsRef} className="relative">
            <button 
              className="p-2 hover:bg-gray-100 rounded-lg relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <NotificationsDropdown 
              isOpen={showNotifications}
              onClose={() => setShowNotifications(false)}
            />
          </div>
          
          {/* User menu */}
          <div ref={userMenuRef} className="relative">
            <button 
              className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">JD</span>
              </div>
              <span className="hidden md:block text-sm font-medium text-gray-700">John Doe</span>
              <ChevronDown className="hidden md:block h-4 w-4 text-gray-500" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </a>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;