import React from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Globe, 
  DollarSign, 
  Calendar,
  Tag,
  FileText,
  User,
  Clock
} from 'lucide-react';

interface LeadDetailsModalProps {
  lead: {
    name: string;
    email: string;
    company: string;
    status: string;
    value: string;
    image: string;
    source: string;
    score: number;
    phone: string;
    position: string;
    location: string;
    lastContact: string;
    nextFollowUp: string;
    tags: string[];
    notes: string;
    companyDetails: {
      industry: string;
      size: string;
      website: string;
      revenue: string;
    };
  };
  onClose: () => void;
}

const LeadDetailsModal: React.FC<LeadDetailsModalProps> = ({ lead, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-4">
              <img
                src={lead.image}
                alt={lead.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{lead.name}</h2>
                <p className="text-sm text-gray-500">{lead.position} at {lead.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{lead.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{lead.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{lead.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Company Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{lead.companyDetails.industry}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{lead.companyDetails.size}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-gray-400" />
                    <a 
                      href={`https://${lead.companyDetails.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-700"
                    >
                      {lead.companyDetails.website}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">{lead.companyDetails.revenue}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Status and Timeline */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Lead Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Status</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      lead.status === 'Qualified' ? 'bg-green-50 text-green-700' :
                      lead.status === 'New' ? 'bg-blue-50 text-blue-700' :
                      'bg-yellow-50 text-yellow-700'
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Value</span>
                    <span className="text-sm font-medium text-gray-900">{lead.value}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Score</span>
                    <span className="text-sm font-medium text-gray-900">{lead.score}/100</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Last Contact</div>
                      <div className="text-sm font-medium text-gray-900">{lead.lastContact}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Next Follow-up</div>
                      <div className="text-sm font-medium text-gray-900">{lead.nextFollowUp}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags and Notes */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {lead.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-1 px-2.5 py-1 bg-gray-100 rounded-full"
                    >
                      <Tag className="h-3 w-3 text-gray-500" />
                      <span className="text-sm text-gray-700">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Notes</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <FileText className="h-5 w-5 text-gray-400 mt-0.5" />
                    <p className="text-sm text-gray-600">{lead.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsModal;