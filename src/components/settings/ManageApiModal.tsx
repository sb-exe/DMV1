import React from 'react';
import { X, AlertTriangle, RefreshCw, Settings2, Trash2 } from 'lucide-react';
import { getPlatformIcon } from '../../utils/platformIcons';

interface ManageApiModalProps {
  service: {
    name: string;
    icon: string;
    status: string;
    lastSync: string;
  };
  onClose: () => void;
}

const ManageApiModal: React.FC<ManageApiModalProps> = ({ service, onClose }) => {
  const [showConfirmDisconnect, setShowConfirmDisconnect] = React.useState(false);

  const handleDisconnect = () => {
    // Here you would handle the API disconnection
    setShowConfirmDisconnect(false);
    onClose();
  };

  const getPermissions = () => {
    switch (service.name.toLowerCase()) {
      case 'google ads':
        return [
          'View and manage ad campaigns',
          'Access account information',
          'Modify campaign budgets',
          'View campaign statistics',
          'Manage conversion tracking'
        ];
      case 'meta ads':
        return [
          'Manage ads and campaigns',
          'View insights and analytics',
          'Access account settings',
          'Manage ad creatives',
          'View billing information'
        ];
      case 'google analytics':
        return [
          'View report data',
          'Access account information',
          'Manage user permissions',
          'Configure account settings',
          'Access real-time data'
        ];
      default:
        return [
          'View analytics data',
          'Manage campaigns',
          'Access account settings',
          'View reports'
        ];
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                {getPlatformIcon(service.icon, 'md')}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.name} Connection
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Last synced: {service.lastSync}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Connection Status</h4>
                  <div className="flex items-center mt-1 space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm text-gray-600">Active and syncing</span>
                  </div>
                </div>
                <button className="p-2 hover:bg-white rounded-lg text-gray-500">
                  <RefreshCw className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Connected Account</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">business@company.com</p>
                    <p className="text-sm text-gray-500">Account ID: 123456789</p>
                  </div>
                  <button className="p-2 hover:bg-white rounded-lg text-gray-500">
                    <Settings2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Permissions</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="space-y-2">
                  {getPermissions().map((permission, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {permission}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {!showConfirmDisconnect ? (
              <button
                onClick={() => setShowConfirmDisconnect(true)}
                className="flex items-center justify-center w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg border border-red-200"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Disconnect Integration
              </button>
            ) : (
              <div className="border-t border-gray-200 pt-4">
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-red-600 mr-3" />
                    <div>
                      <h4 className="text-sm font-medium text-red-900">
                        Confirm Disconnection
                      </h4>
                      <p className="mt-1 text-sm text-red-700">
                        This action will remove all API access and stop data syncing. This cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowConfirmDisconnect(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDisconnect}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageApiModal;