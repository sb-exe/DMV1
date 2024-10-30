import React from 'react';
import { X, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { getPlatformIcon } from '../../utils/platformIcons';

interface ApiSetupModalProps {
  service: string;
  onClose: () => void;
}

const ApiSetupModal: React.FC<ApiSetupModalProps> = ({ service, onClose }) => {
  const [setupStep, setSetupStep] = React.useState(1);

  const getSetupSteps = () => {
    switch (service.toLowerCase()) {
      case 'google ads':
        return {
          steps: [
            {
              title: 'Create Google Ads Developer Account',
              description: 'Visit the Google Ads API Center to set up your developer account',
              link: 'https://developers.google.com/google-ads/api/docs/first-call/overview',
              details: [
                'Sign in to Google Ads',
                'Navigate to Tools & Settings > API Center',
                'Accept Terms of Service',
                'Create a new project in Google Cloud Console'
              ]
            },
            {
              title: 'Configure OAuth Credentials',
              description: 'Set up authentication for your application',
              fields: [
                { name: 'Client ID', type: 'text' },
                { name: 'Client Secret', type: 'password' },
                { name: 'Developer Token', type: 'text' }
              ],
              details: [
                'Enable Google Ads API in Google Cloud Console',
                'Create OAuth 2.0 credentials',
                'Add authorized redirect URIs',
                'Copy your developer token from Google Ads API Center'
              ]
            }
          ]
        };

      case 'meta ads':
        return {
          steps: [
            {
              title: 'Create Meta Business Account',
              description: 'Set up your Meta Business account and create an app',
              link: 'https://developers.facebook.com/',
              details: [
                'Go to Meta for Developers',
                'Create a new app or select existing app',
                'Choose "Business" as the app type',
                'Complete basic app setup'
              ]
            },
            {
              title: 'Configure App Settings',
              description: 'Set up your app credentials and permissions',
              fields: [
                { name: 'App ID', type: 'text' },
                { name: 'App Secret', type: 'password' },
                { name: 'Access Token', type: 'text' }
              ],
              details: [
                'Add Marketing API product to your app',
                'Configure app permissions',
                'Generate long-lived access token',
                'Set up webhook endpoints'
              ]
            }
          ]
        };

      case 'linkedin ads':
        return {
          steps: [
            {
              title: 'Create LinkedIn Developer Application',
              description: 'Set up your application in LinkedIn Developers portal',
              link: 'https://www.linkedin.com/developers/',
              details: [
                'Sign in to LinkedIn Developers',
                'Create a new application',
                'Select Marketing Developer Platform products',
                'Configure OAuth 2.0 settings'
              ]
            },
            {
              title: 'Configure API Access',
              description: 'Set up authentication and permissions',
              fields: [
                { name: 'Client ID', type: 'text' },
                { name: 'Client Secret', type: 'password' },
                { name: 'Access Token', type: 'text' }
              ],
              details: [
                'Request Marketing API access',
                'Add authorized redirect URLs',
                'Generate access token',
                'Configure webhook settings'
              ]
            }
          ]
        };

      case 'tiktok ads':
        return {
          steps: [
            {
              title: 'Create TikTok Ads Developer Account',
              description: 'Set up your developer account in TikTok Ads',
              link: 'https://ads.tiktok.com/marketing_api/docs',
              details: [
                'Register for TikTok For Business',
                'Create developer app',
                'Select Marketing API scope',
                'Complete app verification'
              ]
            },
            {
              title: 'Configure API Credentials',
              description: 'Set up your app authentication',
              fields: [
                { name: 'App ID', type: 'text' },
                { name: 'App Secret', type: 'password' },
                { name: 'Access Token', type: 'text' }
              ],
              details: [
                'Generate app credentials',
                'Configure OAuth settings',
                'Set up sandbox environment',
                'Add authorized callback URLs'
              ]
            }
          ]
        };

      default:
        return {
          steps: [
            {
              title: 'Create Developer Account',
              description: 'Set up your developer account',
              details: [
                'Register for developer access',
                'Create new application',
                'Select required API scopes',
                'Complete verification process'
              ]
            },
            {
              title: 'Configure API Access',
              description: 'Set up authentication credentials',
              fields: [
                { name: 'API Key', type: 'text' },
                { name: 'API Secret', type: 'password' }
              ],
              details: [
                'Generate API credentials',
                'Configure OAuth settings',
                'Set up webhooks',
                'Add authorized domains'
              ]
            }
          ]
        };
    }
  };

  const steps = getSetupSteps();

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-50 rounded-lg">
                {getPlatformIcon(service, 'md')}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Connect {service}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Follow the steps to set up the integration
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
            {/* Progress Steps */}
            <div className="flex items-center justify-center space-x-4">
              {steps.steps.map((_, index) => (
                <React.Fragment key={index}>
                  {index > 0 && (
                    <div className={`h-1 w-16 ${
                      setupStep > index ? 'bg-blue-500' : 'bg-gray-200'
                    }`} />
                  )}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    setupStep > index
                      ? 'bg-blue-500 text-white'
                      : setupStep === index + 1
                      ? 'bg-blue-100 text-blue-600 ring-2 ring-blue-500'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {index + 1}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* Step Content */}
            <div className="mt-8">
              {setupStep === 1 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex">
                      <ExternalLink className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-blue-900">
                          {steps.steps[0].title}
                        </h4>
                        <p className="mt-1 text-sm text-blue-700">
                          {steps.steps[0].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-900 mb-3">Setup Instructions:</h5>
                    <ul className="space-y-2">
                      {steps.steps[0].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="font-medium text-gray-900">{index + 1}.</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {steps.steps[0].link && (
                    <button
                      onClick={() => window.open(steps.steps[0].link, '_blank')}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Open Developer Console
                    </button>
                  )}
                </div>
              )}

              {setupStep === 2 && (
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="flex">
                      <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-blue-900">
                          {steps.steps[1].title}
                        </h4>
                        <p className="mt-1 text-sm text-blue-700">
                          {steps.steps[1].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h5 className="text-sm font-medium text-gray-900 mb-3">Configuration Steps:</h5>
                    <ul className="space-y-2">
                      {steps.steps[1].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <span className="font-medium text-gray-900">{index + 1}.</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    {steps.steps[1].fields.map((field, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {field.name}
                        </label>
                        <input
                          type={field.type}
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder={`Enter ${field.name.toLowerCase()}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {setupStep === 3 && (
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-green-900">
                          Connection Successful
                        </h4>
                        <p className="mt-1 text-sm text-green-700">
                          Your {service} account has been connected successfully
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Next Steps:</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Configure campaign settings</li>
                      <li>• Set up conversion tracking</li>
                      <li>• Review API quotas and limits</li>
                      <li>• Test API endpoints</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Cancel
              </button>
              {setupStep < 3 ? (
                <button
                  onClick={() => setSetupStep(prev => prev + 1)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSetupModal;