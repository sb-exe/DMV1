import React from 'react';
import { MoreVertical, Facebook, Phone, Globe, Mail, Instagram, Linkedin, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LeadCardProps {
  id?: string;
  name: string;
  email: string;
  company: string;
  status: string;
  value: string;
  image: string;
  source?: string;
  score?: number;
}

const LeadCard: React.FC<LeadCardProps> = ({
  id = '1',
  name,
  email,
  company,
  status,
  value,
  image,
  source = 'website',
  score = 0
}) => {
  const navigate = useNavigate();

  const getStatusColor = (status: string) => {
    const colors = {
      New: 'bg-blue-50 text-blue-700',
      Qualified: 'bg-green-50 text-green-700',
      Contacted: 'bg-yellow-50 text-yellow-700',
    };
    return colors[status] || 'bg-gray-50 text-gray-700';
  };

  const getSourceIcon = (sourceType: string) => {
    const icons = {
      facebook: <Facebook className="h-4 w-4 text-blue-600" />,
      phone: <Phone className="h-4 w-4 text-green-600" />,
      website: <Globe className="h-4 w-4 text-purple-600" />,
      email: <Mail className="h-4 w-4 text-red-600" />,
      instagram: <Instagram className="h-4 w-4 text-pink-600" />,
      linkedin: <Linkedin className="h-4 w-4 text-blue-700" />,
    };
    return icons[sourceType.toLowerCase()] || <Globe className="h-4 w-4 text-gray-400" />;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="flex items-center justify-between p-6 hover:bg-gray-50">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt={name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      <div className="flex items-center space-x-8">
        <span className="text-sm text-gray-600">{company}</span>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
        <span className="text-sm font-medium text-gray-900">{value}</span>
        <div className="flex items-center space-x-2">
          {getSourceIcon(source)}
          <span className="text-sm text-gray-600 capitalize">{source}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Star className={`h-4 w-4 ${getScoreColor(score)}`} />
          <span className={`text-sm font-medium ${getScoreColor(score)}`}>
            {score}
          </span>
        </div>
        <button
          onClick={() => navigate(`/leads/${id}`)}
          className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg"
        >
          View Details
        </button>
        {source.toLowerCase() === 'phone' && (
          <button
            onClick={() => navigate(`/call-summary/${id}`)}
            className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            View Call Summary
          </button>
        )}
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreVertical className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default LeadCard;