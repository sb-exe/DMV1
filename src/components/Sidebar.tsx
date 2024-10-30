import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, MessageSquare, Settings, LogOut, 
  Megaphone, Phone, FileText, ChevronRight, Palette, X 
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="h-full flex flex-col">
      {/* Mobile close button */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        <img 
          src="https://digitalmedium.ca/wp-content/uploads/2023/10/Digital-Medium-Logo-768x115.png" 
          alt="Digital Medium" 
          className="w-32 h-auto"
        />
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      {/* Desktop logo */}
      <div className="hidden lg:block p-6">
        <img 
          src="https://digitalmedium.ca/wp-content/uploads/2023/10/Digital-Medium-Logo-768x115.png" 
          alt="Digital Medium" 
          className="w-full h-auto"
        />
      </div>
      
      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        <SidebarLink to="/" icon={<LayoutDashboard />} text="Dashboard" />
        <SidebarLink to="/leads" icon={<Users />} text="Leads" />
        <SidebarLink to="/campaigns" icon={<Megaphone />} text="Campaigns" />
        <SidebarLink to="/call-summary" icon={<Phone />} text="Call Summary" />
        <SidebarLink to="/messages" icon={<MessageSquare />} text="Messages" />
        <SidebarLink to="/reports" icon={<FileText />} text="Reports" />
        <SidebarLink to="/settings" icon={<Settings />} text="Settings" />
      </nav>

      <div className="p-4 space-y-4">
        <div className="bg-primary-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Palette className="h-5 w-5 text-primary-600 mr-2" />
            <h3 className="text-sm font-medium text-primary-900">Creative Services</h3>
          </div>
          <p className="mt-1 text-sm text-primary-700">Need help with branding, web design, or digital marketing?</p>
          <a 
            href="https://digitalmedium.ca/services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
          >
            View Our Services <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="text-xs text-gray-500 pl-4">
          Beta V1.0
        </div>

        <button className="flex items-center w-full text-gray-600 hover:text-gray-900">
          <LogOut className="h-5 w-5 mr-2" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, text, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-primary-50 text-primary-600'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`
      }
    >
      <span className="h-5 w-5 mr-3">{icon}</span>
      <span className="font-medium">{text}</span>
    </NavLink>
  );
};

export default Sidebar;