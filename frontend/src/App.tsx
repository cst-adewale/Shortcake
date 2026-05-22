import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { LayoutDashboard, Upload, Database, Activity, FileText } from 'lucide-react';

// Placeholder Components for Pages
const Dashboard = () => <div className="p-8"><h1>Dashboard</h1><p>Analytics and overview go here.</p></div>;
const UploadDataset = () => <div className="p-8"><h1>Upload Dataset</h1><p>Drag and drop CSV files here.</p></div>;
const GenerateData = () => <div className="p-8"><h1>Generate Synthetic Data</h1><p>Controls for simulating bias go here.</p></div>;
const RunAudit = () => <div className="p-8"><h1>Run Audit</h1><p>Select dataset and attributes to audit.</p></div>;
const Reports = () => <div className="p-8"><h1>Reports</h1><p>Downloadable audit reports.</p></div>;

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-6">
            <h1 className="text-xl font-bold text-green-700">L.E.B.A.</h1>
            <p className="text-xs text-gray-500 mt-1">Loan Eligibility Bias Audit</p>
          </div>
          <nav className="mt-6 px-4 space-y-2">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
              <LayoutDashboard size={20} /> Dashboard
            </Link>
            <Link to="/upload" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
              <Upload size={20} /> Upload Data
            </Link>
            <Link to="/synthesize" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
              <Database size={20} /> Synthesize Data
            </Link>
            <Link to="/audit" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
              <Activity size={20} /> Run Audit
            </Link>
            <Link to="/reports" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors">
              <FileText size={20} /> Reports
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<UploadDataset />} />
            <Route path="/synthesize" element={<GenerateData />} />
            <Route path="/audit" element={<RunAudit />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
