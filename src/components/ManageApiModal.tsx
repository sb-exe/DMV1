import React from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface ManageApiModalProps {
  service: {
    name: string;
    status: string;
    lastSync: string;
  };
  onClose: () => void;
}

const ManageApiModal: React.FC<ManageApiModalProps> = ({ service, onClose }) => {
  const handleDisconnect = () => {
    // Here you would handle the API disconnection
    alert('API disconnection request sent');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Manage {service.name} Connection
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Last synced: {service.lastSync}
              </p>
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
              <h4 className="text-sm font-medium text-gray-900 mb-2">Connection Status</h4>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Active and syncing</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Connected Account</h4>
              <p className="text-sm text-gray-600">business@company.com</p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Permissions</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Read campaign data</li>
                <li>• Manage advertisements</li>
                <li>• View analytics</li>
              </ul>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <button
                onClick={handleDisconnect}
                className="flex items-center justify-center w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg border border-red-200"
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Disconnect API
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                This action will remove all API access and stop data syncing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageApiModal;