import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Leads from './pages/Leads';
import LeadDetails from './pages/LeadDetails';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Campaigns from './pages/Campaigns';
import CallSummary from './pages/CallSummary';
import CreateCampaign from './pages/CreateCampaign';
import AddLead from './pages/AddLead';
import CallDetails from './pages/CallDetails';
import AllCalls from './pages/AllCalls';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="leads" element={<Leads />} />
          <Route path="leads/:id" element={<LeadDetails />} />
          <Route path="leads/add" element={<AddLead />} />
          <Route path="campaigns" element={<Campaigns />} />
          <Route path="campaigns/create" element={<CreateCampaign />} />
          <Route path="messages" element={<Messages />} />
          <Route path="call-summary" element={<CallSummary />} />
          <Route path="call-summary/all" element={<AllCalls />} />
          <Route path="call-summary/:id" element={<CallDetails />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;