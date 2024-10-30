import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, Upload, Facebook, Search, Video, Twitter, Mail, 
  Users, FileText, Plus, X, Image, Code, AlertCircle, Smartphone, Monitor,
  Instagram, Youtube
} from 'lucide-react';

type CampaignType = 'ad' | 'email';

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [campaignType, setCampaignType] = useState<CampaignType>('ad');
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [emailContentType, setEmailContentType] = useState<'html' | 'image' | null>(null);
  const [desktopImage, setDesktopImage] = useState<File | null>(null);
  const [mobileImage, setMobileImage] = useState<File | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [needsAssets, setNeedsAssets] = useState<boolean>(false);

  // File size limits in MB
  const MAX_IMAGE_SIZE = 2; // 2MB
  const MAX_HTML_SIZE = 0.5; // 500KB

  const handleFileUpload = (file: File, type: 'desktop' | 'mobile' | 'html') => {
    const maxSize = type === 'html' ? MAX_HTML_SIZE : MAX_IMAGE_SIZE;
    const fileSize = file.size / (1024 * 1024); // Convert to MB

    if (fileSize > maxSize) {
      alert(`File size exceeds ${maxSize}MB limit`);
      return;
    }

    if (type === 'desktop') {
      setDesktopImage(file);
    } else if (type === 'mobile') {
      setMobileImage(file);
    }
  };

  const platforms = [
    { id: 'meta', name: 'Meta', icon: <Facebook className="h-5 w-5" /> },
    { id: 'google', name: 'Google', icon: <Search className="h-5 w-5" /> },
    { id: 'twitter', name: 'Twitter', icon: <Twitter className="h-5 w-5" /> },
    { id: 'instagram', name: 'Instagram', icon: <Instagram className="h-5 w-5" /> },
    { id: 'youtube', name: 'YouTube', icon: <Youtube className="h-5 w-5" /> }
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <button
          onClick={() => navigate(-1)}
          className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create Campaign</h1>
          <p className="text-gray-600 mt-1">Set up a new marketing campaign</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Campaign Type</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setCampaignType('ad')}
              className={`p-4 rounded-lg border-2 text-left ${
                campaignType === 'ad'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Video className="h-5 w-5 text-gray-600 mb-2" />
              <h3 className="font-medium text-gray-900">Ad Campaign</h3>
              <p className="text-sm text-gray-500">Create paid advertising campaign</p>
            </button>

            <button
              onClick={() => setCampaignType('email')}
              className={`p-4 rounded-lg border-2 text-left ${
                campaignType === 'email'
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Mail className="h-5 w-5 text-gray-600 mb-2" />
              <h3 className="font-medium text-gray-900">Email Campaign</h3>
              <p className="text-sm text-gray-500">Create email marketing campaign</p>
            </button>
          </div>
        </div>

        {campaignType === 'ad' && (
          <>
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Campaign Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter campaign name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget *
                  </label>
                  <div className="flex items-center">
                    <span className="px-3 py-2 bg-gray-50 border border-r-0 border-gray-200 rounded-l-lg">
                      $
                    </span>
                    <input
                      type="number"
                      required
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter budget amount"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Start Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">End Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Platforms *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {platforms.map((platform) => (
                      <button
                        key={platform.id}
                        onClick={() => {
                          setSelectedPlatforms(prev =>
                            prev.includes(platform.id)
                              ? prev.filter(id => id !== platform.id)
                              : [...prev, platform.id]
                          );
                        }}
                        className={`flex items-center p-3 rounded-lg border ${
                          selectedPlatforms.includes(platform.id)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {platform.icon}
                        <span className="ml-2 text-sm font-medium">
                          {platform.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assets
                  </label>
                  <div className="space-y-3">
                    <button
                      onClick={() => setNeedsAssets(false)}
                      className={`w-full flex items-center p-3 rounded-lg border ${
                        !needsAssets
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Upload className="h-5 w-5 text-gray-600" />
                      <span className="ml-2 text-sm font-medium">
                        I have assets ready to upload
                      </span>
                    </button>
                    <button
                      onClick={() => setNeedsAssets(true)}
                      className={`w-full flex items-center p-3 rounded-lg border ${
                        needsAssets
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <FileText className="h-5 w-5 text-gray-600" />
                      <span className="ml-2 text-sm font-medium">
                        I need assets to be created
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {campaignType === 'email' && (
          <>
            <div className="p-6 space-y-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Campaign Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter campaign name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email subject line"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Schedule *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Send Date</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Send Time</label>
                      <input
                        type="time"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6 border-t border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Recipients</h2>
              
              {!showNewListForm ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Recipient List *
                    </label>
                    <div className="flex items-center space-x-2">
                      <select 
                        required
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select recipient list</option>
                        <option value="all">All Subscribers (5,234)</option>
                        <option value="active">Active Customers (3,120)</option>
                        <option value="inactive">Inactive Customers (890)</option>
                        <option value="newsletter">Newsletter Subscribers (2,450)</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => setShowNewListForm(true)}
                        className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        New List
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      From Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter sender name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reply-to Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter reply-to email address"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Create New List</h3>
                    <button
                      type="button"
                      onClick={() => setShowNewListForm(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        List Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter list name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        placeholder="Enter list description"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Import Contacts
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                        <div className="flex flex-col items-center">
                          <Upload className="h-8 w-8 text-gray-400 mb-3" />
                          <p className="text-sm text-gray-600 mb-2">
                            Upload CSV file with contacts
                          </p>
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
                          >
                            Choose File
                          </button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        File should contain: Email, First Name, Last Name (optional)
                      </p>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowNewListForm(false)}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        Create List
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 space-y-6 border-t border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Email Content</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setEmailContentType('html')}
                      className={`p-4 rounded-lg border-2 text-left ${
                        emailContentType === 'html'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Code className="h-5 w-5 text-gray-600 mb-2" />
                      <h3 className="font-medium text-gray-900">HTML Email</h3>
                      <p className="text-sm text-gray-500">Upload custom HTML template</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setEmailContentType('image')}
                      className={`p-4 rounded-lg border-2 text-left ${
                        emailContentType === 'image'
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <Image className="h-5 w-5 text-gray-600 mb-2" />
                      <h3 className="font-medium text-gray-900">Image Email</h3>
                      <p className="text-sm text-gray-500">Upload image versions</p>
                    </button>
                  </div>
                </div>

                {emailContentType === 'html' && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                      <div className="flex flex-col items-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600 mb-2">
                          Upload HTML file (max {MAX_HTML_SIZE}MB)
                        </p>
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
                        >
                          Choose HTML File
                        </button>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2 text-sm text-gray-500">
                      <AlertCircle className="h-4 w-4 mt-0.5" />
                      <p>HTML file should be self-contained with inline CSS</p>
                    </div>
                  </div>
                )}

                {emailContentType === 'image' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Desktop Version *
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                        <div className="flex flex-col items-center">
                          <Monitor className="h-8 w-8 text-gray-400 mb-3" />
                          <p className="text-sm text-gray-600 mb-2">
                            Upload desktop image (max {MAX_IMAGE_SIZE}MB)
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Recommended size: 600px width
                          </p>
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
                          >
                            Choose Image
                          </button>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Version *
                      </label>
                      <div className="border-2 border-dashed border-gray-200 rounded-lg p-6">
                        <div className="flex flex-col items-center">
                          <Smartphone className="h-8 w-8 text-gray-400 mb-3" />
                          <p className="text-sm text-gray-600 mb-2">
                            Upload mobile image (max {MAX_IMAGE_SIZE}MB)
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            Recommended size: 320px width
                          </p>
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg"
                          >
                            Choose Image
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 text-sm text-gray-500">
                      <AlertCircle className="h-4 w-4 mt-0.5" />
                      <p>Accepted formats: JPG, PNG. Images should be optimized for email.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;