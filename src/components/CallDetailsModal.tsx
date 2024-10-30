import React from 'react';
import { X, Clock, Star, ThumbsUp, ThumbsDown, Mail, Globe } from 'lucide-react';

interface CallDetailsModalProps {
  call: any;
  onClose: () => void;
}

const CallDetailsModal: React.FC<CallDetailsModalProps> = ({ call, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Call Summary</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Call Details */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={call.image} alt={call.name} className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-medium text-gray-900">{call.name}</h3>
                <p className="text-sm text-gray-500">{call.company}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">{call.duration}</div>
              <div className="text-sm text-gray-500">Duration</div>
            </div>
          </div>

          {/* Call Score */}
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-green-700">Lead Score</span>
              <span className="text-lg font-semibold text-green-700">{call.score}/100</span>
            </div>
          </div>

          {/* Sentiment Analysis */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Sentiment Analysis</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <ThumbsUp className="h-5 w-5 text-green-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">{call.sentimentDetails.positive}%</div>
                  <div className="text-xs text-gray-500">Positive</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                <ThumbsDown className="h-5 w-5 text-red-600" />
                <div>
                  <div className="text-sm font-medium text-gray-900">{call.sentimentDetails.negative}%</div>
                  <div className="text-xs text-gray-500">Negative</div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Topics */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Key Topics Discussed</h4>
            <div className="flex flex-wrap gap-2">
              {call.topics.map((topic: string) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Call Summary</h4>
            <p className="text-gray-600">
              {call.summary}
            </p>
          </div>

          {/* Next Steps */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Recommended Next Steps</h4>
            <ul className="space-y-2">
              {call.nextSteps.map((step: string, index: number) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallDetailsModal;