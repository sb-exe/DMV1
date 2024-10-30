import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Search, 
  Youtube,
  BarChart3,
  LineChart,
  Mail
} from 'lucide-react';

export const getPlatformIcon = (platform: string, size: 'sm' | 'md' = 'sm') => {
  const iconClasses = size === 'sm' ? "h-5 w-5" : "h-6 w-6";
  
  switch (platform.toLowerCase()) {
    case 'meta':
    case 'facebook':
      return <Facebook className={`${iconClasses} text-blue-600`} />;
    case 'twitter':
    case 'x':
      return <Twitter className={`${iconClasses} text-gray-800`} />;
    case 'instagram':
      return <Instagram className={`${iconClasses} text-pink-600`} />;
    case 'linkedin':
      return <Linkedin className={`${iconClasses} text-blue-700`} />;
    case 'google ads':
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      );
    case 'google analytics':
      return <BarChart3 className={`${iconClasses} text-yellow-600`} />;
    case 'bing ads':
      return <Search className={`${iconClasses} text-blue-500`} />;
    case 'youtube':
      return <Youtube className={`${iconClasses} text-red-600`} />;
    case 'mailchimp':
      return <Mail className={`${iconClasses} text-yellow-500`} />;
    case 'tiktok':
      return (
        <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      );
    case 'hubspot':
      return <LineChart className={`${iconClasses} text-orange-600`} />;
    default:
      return null;
  }
};

export const getApiSetupSteps = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'google ads':
      return {
        steps: [
          {
            title: 'Create Google Ads Developer Account',
            description: 'Visit Google Ads API Center and create a developer account',
            link: 'https://developers.google.com/google-ads/api/docs/first-call/overview'
          },
          {
            title: 'Generate OAuth 2.0 Credentials',
            description: 'Create OAuth client ID and client secret in Google Cloud Console',
            fields: ['Client ID', 'Client Secret']
          },
          {
            title: 'Configure Developer Token',
            description: 'Get your developer token from Google Ads API Center',
            fields: ['Developer Token']
          }
        ]
      };
    case 'meta':
      return {
        steps: [
          {
            title: 'Create Meta Business Account',
            description: 'Set up a Meta Business account if you haven\'t already',
            link: 'https://business.facebook.com/overview'
          },
          {
            title: 'Create Meta App',
            description: 'Create a new app in Meta Developers Console',
            fields: ['App ID']
          },
          {
            title: 'Generate Access Token',
            description: 'Create a system user and generate access token',
            fields: ['Access Token', 'App Secret']
          }
        ]
      };
    case 'linkedin':
      return {
        steps: [
          {
            title: 'Create LinkedIn App',
            description: 'Create a new application in LinkedIn Developers portal',
            link: 'https://www.linkedin.com/developers/apps'
          },
          {
            title: 'Configure OAuth 2.0',
            description: 'Set up OAuth 2.0 settings and redirect URIs',
            fields: ['Client ID', 'Client Secret']
          },
          {
            title: 'Request Access',
            description: 'Request access to required Marketing Developer Platform products',
            fields: ['Access Token']
          }
        ]
      };
    // Add more platforms as needed
    default:
      return {
        steps: [
          {
            title: 'Create Developer Account',
            description: 'Sign up for a developer account',
            fields: ['API Key']
          },
          {
            title: 'Generate Credentials',
            description: 'Create necessary API credentials',
            fields: ['Client ID', 'Client Secret']
          }
        ]
      };
  }
};