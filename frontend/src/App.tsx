import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Upload, Database, Activity, FileText } from 'lucide-react';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import UploadDataset from './pages/UploadDataset';
import GenerateData from './pages/GenerateData';
import RunAudit from './pages/RunAudit';
import Reports from './pages/Reports';

// Layout component for authenticated pages
function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#0a0f16] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col relative z-20">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2 tracking-tight">
            <Activity className="w-6 h-6" /> L.E.B.A.
          </h1>
          <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">Bias Audit Platform</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-primary/20 hover:text-primary transition-all group">
            <LayoutDashboard size={20} className="group-hover:scale-110 transition-transform" /> Dashboard
          </Link>
          <Link to="/upload" className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-primary/20 hover:text-primary transition-all group">
            <Upload size={20} className="group-hover:scale-110 transition-transform" /> Upload Data
          </Link>
          <Link to="/synthesize" className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-primary/20 hover:text-primary transition-all group">
            <Database size={20} className="group-hover:scale-110 transition-transform" /> Synthesize Data
          </Link>
          <Link to="/audit" className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-primary/20 hover:text-primary transition-all group">
            <Activity size={20} className="group-hover:scale-110 transition-transform" /> Run Audit
          </Link>
          <Link to="/reports" className="flex items-center gap-3 px-4 py-3 text-gray-300 rounded-xl hover:bg-primary/20 hover:text-primary transition-all group">
            <FileText size={20} className="group-hover:scale-110 transition-transform" /> Reports
          </Link>
        </nav>
        <div className="p-4 border-t border-white/10">
           <Link to="/auth" className="flex items-center justify-center gap-2 w-full py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors">
              Sign Out
           </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto bg-gradient-to-br from-[#0a0f16] via-[#0d1620] to-[#0f231e]">
        {/* Background glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 p-8 min-h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        
        {/* Protected Routes */}
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="upload" element={<UploadDataset />} />
          <Route path="synthesize" element={<GenerateData />} />
          <Route path="audit" element={<RunAudit />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
