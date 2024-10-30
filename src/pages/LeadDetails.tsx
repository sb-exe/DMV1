import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Building2,
  Globe,
  Clock,
  Star,
  MessageSquare,
  Home,
  Settings2,
  BellDot,
  ListFilter,
  PlusCircle,
  Edit,
  Send
} from 'lucide-react';

const LeadDetails: React.FC = () => {
  const { id } = useParams();

  const leadData = {
    id,
    name: 'Sarah Thompson',
    email: 'sarah.t@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Toronto, ON',
    source: 'IDX Website',
    lastActive: '2 hours ago',
    score: 85,
    status: 'Hot Lead',
    assignedTo: 'John Davis',
    company: 'N/A',
    budget: '$800,000 - $1,000,000',
    timeline: 'Next 3 months',
    propertyType: 'Condo',
    stats: {
      callsToday: 2,
      emailsToday: 3,
      messagesTotal: 12,
      totalInteractions: 25
    },
    websiteActivity: [
      {
        type: 'property_view',
        address: '123 Downtown Ave',
        price: '$899,000',
        time: '2 hours ago',
        details: '3 bed, 2 bath, 1,850 sqft'
      },
      {
        type: 'property_view',
        address: '456 Lakeshore Blvd',
        price: '$925,000',
        time: '3 hours ago',
        details: '3 bed, 2.5 bath, 1,950 sqft'
      },
      {
        type: 'saved_search',
        criteria: 'Downtown Toronto Condos',
        time: '4 hours ago',
        details: '$800k-$1M, 3+ beds'
      }
    ],
    messages: [
      {
        id: 1,
        text: "Hi, I'm interested in scheduling a viewing.",
        sender: 'lead',
        timestamp: '2024-03-15T10:30:00'
      },
      {
        id: 2,
        text: "I'd be happy to help you schedule a viewing. When would be a good time for you?",
        sender: 'agent',
        timestamp: '2024-03-15T10:35:00'
      },
      {
        id: 3,
        text: "Would this Saturday afternoon work?",
        sender: 'lead',
        timestamp: '2024-03-15T10:40:00'
      }
    ]
  };

  return (
    <div className="p-8">
      <div className="flex items-center mb-8">
        <button onClick={() => window.history.back()} className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Lead Details</h1>
          <p className="text-gray-600 mt-1">View and manage lead information</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Lead Information */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-xl font-semibold text-gray-600">
                  {leadData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{leadData.name}</h2>
                <p className="text-sm text-gray-500">Lead ID: {leadData.id}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{leadData.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{leadData.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{leadData.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Building2 className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{leadData.company}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-gray-400" />
                <span className="text-gray-600">{leadData.source}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Lead Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{leadData.stats.callsToday}</div>
                <div className="text-sm text-gray-600">Calls Today</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{leadData.stats.emailsToday}</div>
                <div className="text-sm text-gray-600">Emails Today</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{leadData.stats.messagesTotal}</div>
                <div className="text-sm text-gray-600">Total Messages</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-semibold text-gray-900">{leadData.stats.totalInteractions}</div>
                <div className="text-sm text-gray-600">Total Interactions</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-900 mb-4">Lead Details</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className="mt-1 font-medium text-gray-900">{leadData.status}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Lead Score</div>
                <div className="mt-1 font-medium text-gray-900">{leadData.score}/100</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Budget</div>
                <div className="mt-1 font-medium text-gray-900">{leadData.budget}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Timeline</div>
                <div className="mt-1 font-medium text-gray-900">{leadData.timeline}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Property Type</div>
                <div className="mt-1 font-medium text-gray-900">{leadData.propertyType}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Assigned To</div>
                <div className="mt-1 font-medium text-gray-900">{leadData.assignedTo}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Activity and Interests */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Website Activity</h3>
            <div className="space-y-6">
              {leadData.websiteActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {activity.type === 'property_view' ? (
                    <Home className="h-5 w-5 text-blue-500 mt-1" />
                  ) : (
                    <ListFilter className="h-5 w-5 text-purple-500 mt-1" />
                  )}
                  <div>
                    <div className="font-medium text-gray-900">
                      {activity.type === 'property_view' ? activity.address : activity.criteria}
                    </div>
                    <div className="text-sm text-gray-500">{activity.details}</div>
                    <div className="text-sm text-gray-400 mt-1">{activity.time}</div>
                  </div>
                  {activity.type === 'property_view' && (
                    <div className="ml-auto font-medium text-gray-900">
                      {activity.price}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Property Interests</h3>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Edit className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <ListFilter className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="text-sm font-medium text-blue-900">Interest Summary</h4>
                    <p className="mt-1 text-sm text-blue-700">
                      Based on website activity, this lead is interested in:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-blue-800">
                      <li>• Properties between $800,000 - $1,000,000</li>
                      <li>• 3-4 bedrooms, 2+ bathrooms</li>
                      <li>• Primarily condos in Downtown area</li>
                      <li>• Minimum 1,800 sqft</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-900">Listing Updates Campaign</h4>
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                    Active
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <BellDot className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900">Notification Settings</span>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Email Frequency</span>
                        <span className="text-gray-900">Daily Digest</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Time of Delivery</span>
                        <span className="text-gray-900">9:00 AM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Weekend Emails</span>
                        <span className="text-gray-900">Disabled</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <ListFilter className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900">Search Criteria</span>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Property Type</span>
                        <span className="text-gray-900">Condo, Apartment</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price Range</span>
                        <span className="text-gray-900">$800k - $1M</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Location</span>
                        <span className="text-gray-900">Downtown Area</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bedrooms</span>
                        <span className="text-gray-900">3-4</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Bathrooms</span>
                        <span className="text-gray-900">2+</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Min. Square Feet</span>
                        <span className="text-gray-900">1,800</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Settings2 className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium text-gray-900">Campaign Rules</span>
                      </div>
                      <button className="text-sm text-blue-600 hover:text-blue-700">
                        Edit
                      </button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Price Changes</span>
                        <span className="text-gray-900">Include</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">New Listings Only</span>
                        <span className="text-gray-900">Yes</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Similar Properties</span>
                        <span className="text-gray-900">Include</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Open Houses</span>
                        <span className="text-gray-900">Include</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Communication */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">SMS Automation</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Last Message Sent</span>
                </div>
                <span className="text-sm font-medium text-gray-900">2 hours ago</span>
              </div>
              
              <div className="border-l-2 border-blue-200 pl-4 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[1.35rem] top-1 h-3 w-3 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Initial Contact</div>
                    <div className="text-sm text-gray-500">Sent 2 days ago</div>
                    <div className="mt-1 text-sm text-gray-600">
                      Welcome message and property interest confirmation
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[1.35rem] top-1 h-3 w-3 rounded-full bg-blue-500"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Follow-up Message</div>
                    <div className="text-sm text-gray-500">Sent 1 day ago</div>
                    <div className="mt-1 text-sm text-gray-600">
                      Scheduling viewing options and availability check
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[1.35rem] top-1 h-3 w-3 rounded-full bg-green-500"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Property Update</div>
                    <div className="text-sm text-gray-500">Sent 2 hours ago</div>
                    <div className="mt-1 text-sm text-gray-600">
                      New listing notification matching criteria
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Online</span>
              </div>
            </div>

            <div className="h-[400px] flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {leadData.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'agent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === 'agent'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-75">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-blue-500 hover:bg-blue-50 rounded-full">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;