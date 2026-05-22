import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, AlertTriangle, CheckCircle, Database } from 'lucide-react';

const mockDisparityData = [
  { group: 'Salary Earner', approvalRate: 85, rejectionRate: 15 },
  { group: 'Trader', approvalRate: 42, rejectionRate: 58 },
  { group: 'Artisan', approvalRate: 55, rejectionRate: 45 },
  { group: 'Farmer', approvalRate: 38, rejectionRate: 62 },
];

const mockRiskData = [
  { name: 'Low Risk', value: 400 },
  { name: 'Medium Risk', value: 300 },
  { name: 'High Risk', value: 100 },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Platform Overview</h1>
          <p className="text-gray-400">High-level metrics across all audited datasets.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-xl text-sm font-medium transition-colors">
          Download Summary PDF
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl"><Database size={24} /></div>
            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">+2 this week</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">14</h3>
          <p className="text-gray-400 text-sm">Datasets Audited</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl"><Users size={24} /></div>
          </div>
          <h3 className="text-3xl font-bold mb-1">124k</h3>
          <p className="text-gray-400 text-sm">Applications Analyzed</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-red-500/20 text-red-400 rounded-xl"><AlertTriangle size={24} /></div>
            <span className="text-xs font-semibold text-red-400 bg-red-400/10 px-2 py-1 rounded-full">Requires Attention</span>
          </div>
          <h3 className="text-3xl font-bold mb-1">3</h3>
          <p className="text-gray-400 text-sm">High Risk Disparities</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-500/20 text-green-400 rounded-xl"><CheckCircle size={24} /></div>
          </div>
          <h3 className="text-3xl font-bold mb-1">0.82</h3>
          <p className="text-gray-400 text-sm">Avg. Fairness Score</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Bar Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h2 className="text-xl font-bold mb-6">Approval Disparity by Employment</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockDisparityData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff1a" vertical={false} />
                <XAxis dataKey="group" stroke="#9ca3af" tick={{fill: '#9ca3af'}} />
                <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0d1620', borderColor: '#ffffff1a', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="approvalRate" name="Approval %" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="rejectionRate" name="Rejection %" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <h2 className="text-xl font-bold mb-6">Overall Audit Risk Distribution</h2>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockRiskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {mockRiskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0d1620', borderColor: '#ffffff1a', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
