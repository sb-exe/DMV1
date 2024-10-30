// Auth types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

// Lead types
export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed';
  source: 'IDX Website' | 'Facebook' | 'LinkedIn' | 'Phone' | 'Email' | 'Other';
  score?: number;
  value?: number;
  assignedTo?: string;
  propertyInterests?: string[];
  notes?: string;
  lastContact?: Date;
  nextFollowUp?: Date;
  websiteActivity?: WebsiteActivity[];
  createdAt: Date;
  updatedAt: Date;
}

export interface WebsiteActivity {
  type: 'property_view' | 'saved_search';
  timestamp: Date;
  details: any;
}

// Campaign types
export interface Campaign {
  id: string;
  name: string;
  description: string;
  type: 'Search' | 'Display' | 'Email';
  status: 'Active' | 'Paused' | 'Draft' | 'Completed';
  platforms?: string[];
  budget?: number;
  startDate?: Date;
  endDate?: Date;
  metrics?: CampaignMetrics;
  createdAt: Date;
  updatedAt: Date;
}

export interface CampaignMetrics {
  impressions?: number;
  clicks?: number;
  conversions?: number;
  spend?: number;
  revenue?: number;
}

// Call types
export interface Call {
  id: string;
  leadId: string;
  duration: number;
  recordingUrl?: string;
  transcript?: string;
  sentiment?: 'Positive' | 'Neutral' | 'Negative';
  score?: number;
  summary?: string;
  nextSteps?: string[];
  createdAt: Date;
}

// Message types
export interface Message {
  id: string;
  leadId: string;
  type: 'email' | 'sms';
  subject?: string;
  content: string;
  status: 'sent' | 'delivered' | 'failed';
  createdAt: Date;
}

// Report types
export interface LeadStats {
  total: number;
  byStatus: Record<string, number>;
  bySource: Record<string, number>;
  conversionRate: number;
  averageValue: number;
}

export interface CampaignStats {
  totalSpend: number;
  totalRevenue: number;
  roas: number;
  byPlatform: Record<string, CampaignMetrics>;
}

export interface CallStats {
  totalCalls: number;
  averageDuration: number;
  sentimentBreakdown: Record<string, number>;
  averageScore: number;
}