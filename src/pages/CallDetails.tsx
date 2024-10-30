import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Download, Clock, ThumbsUp, ThumbsDown, BarChart2 } from 'lucide-react';

const CallDetails = () => {
  const { id } = useParams();

  const callData = {
    id: id,
    name: 'Sarah Thompson',
    company: 'TechCorp Inc.',
    email: 'sarah.t@techcorp.com',
    phone: '+1 (555) 123-4567',
    position: 'Head of Operations',
    location: 'San Francisco, CA',
    source: 'Website Demo Request',
    lastContact: '2024-03-10',
    assignedTo: 'John Davis',
    duration: '15:42',
    date: '2024-03-15',
    score: 92,
    sentiment: 'Positive',
    status: 'Qualified',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100',
    companyDetails: {
      industry: 'Technology',
      size: '201-500 employees',
      website: 'www.techcorp.com',
      annualRevenue: '$50M - $100M'
    },
    dealDetails: {
      value: '$75,000',
      stage: 'Proposal',
      probability: '80%',
      expectedCloseDate: '2024-04-30'
    },
    keywords: ['pricing', 'features', 'demo'],
    summary: 'Showed high interest in enterprise features. Requested follow-up demo next week.',
    transcript: [
      { time: '00:00', speaker: 'Agent', text: 'Hello, this is John from LeadFlow. How can I help you today?' },
      { time: '00:05', speaker: 'Sarah', text: 'Hi, I\'m interested in learning more about your enterprise features.' },
      { time: '00:15', speaker: 'Agent', text: 'I\'d be happy to walk you through our enterprise solutions...' }
    ],
    scoreFactors: [
      { name: 'Product Interest', score: 95 },
      { name: 'Budget Discussion', score: 85 },
      { name: 'Decision Timeline', score: 90 },
      { name: 'Pain Points', score: 88 }
    ]
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <button onClick={() => window.history.back()} className="p-2 hover:bg-gray-100 rounded-lg">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Call Details</h1>
            <p className="text-gray-600 mt-1">Call ID: {id}</p>
          </div>
        </div>
        <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
          <Download className="h-4 w-4 mr-2" />
          Export Call
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Duration</h3>
              <p className="text-xl font-semibold text-gray-900">{callData.duration}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {callData.date}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <ThumbsUp className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Sentiment</h3>
              <p className="text-xl font-semibold text-gray-900">{callData.sentiment}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Overall positive conversation
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <BarChart2 className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Lead Score</h3>
              <p className="text-xl font-semibold text-gray-900">{callData.score}/100</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            High-quality lead
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Lead Information</h2>
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={callData.image}
                alt={callData.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">{callData.name}</h3>
                <p className="text-sm text-gray-500">{callData.position} at {callData.company}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email</span>
                    <span className="font-medium text-gray-900">{callData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Phone</span>
                    <span className="font-medium text-gray-900">{callData.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span className="font-medium text-gray-900">{callData.location}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Company Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Industry</span>
                    <span className="font-medium text-gray-900">{callData.companyDetails.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Company Size</span>
                    <span className="font-medium text-gray-900">{callData.companyDetails.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Website</span>
                    <a href={`https://${callData.companyDetails.website}`} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-700">
                      {callData.companyDetails.website}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Annual Revenue</span>
                    <span className="font-medium text-gray-900">{callData.companyDetails.annualRevenue}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Deal Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deal Value</span>
                    <span className="font-medium text-gray-900">{callData.dealDetails.value}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Stage</span>
                    <span className="font-medium text-gray-900">{callData.dealDetails.stage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Probability</span>
                    <span className="font-medium text-gray-900">{callData.dealDetails.probability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Expected Close</span>
                    <span className="font-medium text-gray-900">{callData.dealDetails.expectedCloseDate}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Lead Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status</span>
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                      {callData.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Source</span>
                    <span className="font-medium text-gray-900">{callData.source}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Contact</span>
                    <span className="font-medium text-gray-900">{callData.lastContact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Assigned To</span>
                    <span className="font-medium text-gray-900">{callData.assignedTo}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Call Summary</h2>
            <p className="text-gray-600 mb-4">{callData.summary}</p>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Key Topics</h3>
              <div className="flex flex-wrap gap-2">
                {callData.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Score Factors</h2>
            <div className="space-y-4">
              {callData.scoreFactors.map((factor, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{factor.name}</span>
                    <span className="font-medium">{factor.score}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${factor.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Call Transcript</h2>
            <div className="space-y-4">
              {callData.transcript.map((entry, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="w-16 text-sm text-gray-500">{entry.time}</div>
                  <div>
                    <span className="font-medium text-gray-900">{entry.speaker}: </span>
                    <span className="text-gray-600">{entry.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;