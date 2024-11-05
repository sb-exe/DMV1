import React, { useState } from 'react';
import { Download, Calendar, Filter, FileSpreadsheet, BarChart2, FileText, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const leadData = [
  { month: 'Jan', new: 65, converted: 45, value: 45000 },
  { month: 'Feb', new: 78, converted: 52, value: 52000 },
  { month: 'Mar', new: 89, converted: 61, value: 61000 },
  { month: 'Apr', new: 72, converted: 48, value: 48000 },
  { month: 'May', new: 85, converted: 55, value: 55000 },
  { month: 'Jun', new: 68, converted: 44, value: 44000 },
];

const campaignData = [
  { month: 'Jan', spend: 12000, revenue: 45000, roas: 3.75 },
  { month: 'Feb', spend: 15000, revenue: 52000, roas: 3.47 },
  { month: 'Mar', spend: 18000, revenue: 61000, roas: 3.39 },
  { month: 'Apr', spend: 14000, revenue: 48000, roas: 3.43 },
  { month: 'May', spend: 16000, revenue: 55000, roas: 3.44 },
  { month: 'Jun', spend: 13000, revenue: 44000, roas: 3.38 },
];

const callData = [
  { month: 'Jan', calls: 120, qualified: 45, score: 82 },
  { month: 'Feb', calls: 145, qualified: 52, score: 85 },
  { month: 'Mar', calls: 160, qualified: 61, score: 88 },
  { month: 'Apr', calls: 130, qualified: 48, score: 84 },
  { month: 'May', calls: 150, qualified: 55, score: 86 },
  { month: 'Jun', calls: 125, qualified: 44, score: 83 },
];

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('leads');

  const getChartContent = () => {
    switch (selectedReport) {
      case 'leads':
        return (
          <>
            <div className="h-80 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={leadData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="new" name="New Leads" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="converted" name="Converted" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Total Leads</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">2,543</span>
                  <span className="text-sm text-green-600">+12.5%</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Conversion Rate</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">24.8%</span>
                  <span className="text-sm text-green-600">+5.2%</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Average Value</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">$1,280</span>
                  <span className="text-sm text-green-600">+8.1%</span>
                </div>
              </div>
            </div>
          </>
        );

      case 'campaigns':
        return (
          <>
            <div className="h-80 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={campaignData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="spend" name="Ad Spend" stroke="#3B82F6" />
                  <Line yAxisId="left" type="monotone" dataKey="revenue" name="Revenue" stroke="#10B981" />
                  <Line yAxisId="right" type="monotone" dataKey="roas" name="ROAS" stroke="#6366F1" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Total Spend</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">$88,000</span>
                  <span className="text-sm text-green-600">+15.3%</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Total Revenue</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">$305,000</span>
                  <span className="text-sm text-green-600">+18.7%</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Average ROAS</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">3.47x</span>
                  <span className="text-sm text-green-600">+2.8%</span>
                </div>
              </div>
            </div>
          </>
        );

      case 'calls':
        return (
          <>
            <div className="h-80 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={callData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="calls" name="Total Calls" fill="#3B82F6" fillOpacity={0.1} stroke="#3B82F6" />
                  <Area type="monotone" dataKey="qualified" name="Qualified Leads" fill="#10B981" fillOpacity={0.1} stroke="#10B981" />
                  <Area type="monotone" dataKey="score" name="Avg Score" fill="#6366F1" fillOpacity={0.1} stroke="#6366F1" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Total Calls</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">830</span>
                  <span className="text-sm text-green-600">+9.2%</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Qualification Rate</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">36.7%</span>
                  <span className="text-sm text-green-600">+4.5%</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Average Call Score</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">84.6</span>
                  <span className="text-sm text-green-600">+2.3%</span>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Export and analyze your data</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </button>
          <button className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setSelectedReport('leads')}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedReport === 'leads'
              ? 'border-red-500 bg-red-50'
              : 'border-gray-200 bg-white hover:border-red-200'
          }`}
        >
          <FileSpreadsheet className={`h-8 w-8 mb-3 ${
            selectedReport === 'leads' ? 'text-red-500' : 'text-gray-400'
          }`} />
          <h3 className="text-lg font-semibold text-gray-900">Leads Report</h3>
          <p className="text-sm text-gray-500 mt-1">Export lead data and conversion metrics</p>
        </button>

        <button
          onClick={() => setSelectedReport('campaigns')}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedReport === 'campaigns'
              ? 'border-red-500 bg-red-50'
              : 'border-gray-200 bg-white hover:border-red-200'
          }`}
        >
          <BarChart2 className={`h-8 w-8 mb-3 ${
            selectedReport === 'campaigns' ? 'text-red-500' : 'text-gray-400'
          }`} />
          <h3 className="text-lg font-semibold text-gray-900">Campaign Report</h3>
          <p className="text-sm text-gray-500 mt-1">Analyze campaign performance and ROI</p>
        </button>

        <button
          onClick={() => setSelectedReport('calls')}
          className={`p-6 rounded-xl border-2 transition-colors ${
            selectedReport === 'calls'
              ? 'border-red-500 bg-red-50'
              : 'border-gray-200 bg-white hover:border-red-200'
          }`}
        >
          <FileText className={`h-8 w-8 mb-3 ${
            selectedReport === 'calls' ? 'text-red-500' : 'text-gray-400'
          }`} />
          <h3 className="text-lg font-semibold text-gray-900">Call Analytics</h3>
          <p className="text-sm text-gray-500 mt-1">Review call summaries and insights</p>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              {selectedReport === 'leads' && 'Lead Conversion Overview'}
              {selectedReport === 'campaigns' && 'Campaign Performance'}
              {selectedReport === 'calls' && 'Call Analytics Summary'}
            </h2>
            <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </button>
          </div>
        </div>

        <div className="p-6">
          {getChartContent()}

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Available Export Options</h3>
            <div className="space-y-3">
              {[
                { name: 'Full Detailed Report', format: 'XLSX', size: '2.4 MB' },
                { name: 'Summary Report', format: 'PDF', size: '856 KB' },
                { name: 'Raw Data Export', format: 'CSV', size: '1.1 MB' },
              ].map((option, i) => (
                <button key={i} className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                  <div>
                    <div className="font-medium text-gray-900">{option.name}</div>
                    <div className="text-sm text-gray-500">Format: {option.format} • Size: {option.size}</div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;