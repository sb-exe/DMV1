import React from 'react';
import { MoreVertical, Users, Mail } from 'lucide-react';
import { getPlatformIcon } from '../utils/platformIcons';

interface CampaignCardProps {
  name: string;
  description: string;
  type: 'Search' | 'Display' | 'Email';
  status: string;
  progress: number;
  platform?: string;
  platforms?: string[];
  conversions?: number;
  emails?: number;
  recipients?: number;
  openRate?: string;
  startDate?: string;
  endDate?: string;
  thumbnail?: string;
  onEdit?: () => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  name,
  description,
  type,
  status,
  progress,
  platform,
  platforms = [],
  conversions,
  emails,
  recipients,
  openRate,
  startDate,
  endDate,
  thumbnail,
  onEdit
}) => {
  const getTypeColor = (type: string) => {
    const colors = {
      Search: 'bg-purple-50 text-purple-700',
      Display: 'bg-indigo-50 text-indigo-700',
      Email: 'bg-blue-50 text-blue-700'
    };
    return colors[type] || 'bg-gray-50 text-gray-700';
  };

  const getStatusColor = (status: string) => {
    const colors = {
      Active: 'bg-green-50 text-green-700',
      Paused: 'bg-yellow-50 text-yellow-700',
      Draft: 'bg-gray-50 text-gray-700',
      Completed: 'bg-blue-50 text-blue-700',
      Sent: 'bg-green-50 text-green-700',
      Scheduled: 'bg-blue-50 text-blue-700',
      Sending: 'bg-yellow-50 text-yellow-700'
    };
    return colors[status] || 'bg-gray-50 text-gray-700';
  };

  // Determine which platforms to show
  const displayPlatforms = platforms.length > 0 ? platforms : platform ? [platform] : [];

  // For search campaigns, if no platform is specified, default to Google Ads
  if (type === 'Search' && displayPlatforms.length === 0) {
    displayPlatforms.push('Google Ads');
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500 line-clamp-1 mb-2">{description}</p>
          <div className="flex items-center space-x-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium min-w-[70px] justify-center ${getTypeColor(type)}`}>
              {type}
            </span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium min-w-[70px] justify-center ${getStatusColor(status)}`}>
              {status}
            </span>
          </div>
        </div>
        {onEdit ? (
          <button onClick={onEdit} className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        ) : (
          <button className="p-1 hover:bg-gray-100 rounded">
            <MoreVertical className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </div>

      {type === 'Display' && thumbnail && (
        <div className="mb-3">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-24 object-cover rounded-lg"
          />
        </div>
      )}

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div
              className="bg-blue-500 h-1.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {type === 'Email' ? (
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-xs text-gray-600">Recipients</div>
              <div className="text-sm font-medium">{recipients?.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs text-gray-600">Open Rate</div>
              <div className="text-sm font-medium">{openRate}</div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {conversions !== undefined && (
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-600">{conversions.toLocaleString()} Conv.</span>
              </div>
            )}
            {emails !== undefined && (
              <div className="flex items-center space-x-1">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-xs text-gray-600">{emails.toLocaleString()} Emails</span>
              </div>
            )}
          </div>
        )}

        {(startDate || endDate) && (
          <div className="flex justify-between text-xs text-gray-500">
            <span>{startDate}</span>
            <span>{endDate}</span>
          </div>
        )}

        {displayPlatforms.length > 0 && (
          <div className="flex items-center space-x-2 pt-1">
            {displayPlatforms.map((p, index) => (
              <div key={index} className="p-1 bg-gray-50 rounded">
                {getPlatformIcon(p)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CampaignCard;