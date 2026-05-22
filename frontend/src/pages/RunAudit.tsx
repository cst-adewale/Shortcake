import { useState } from 'react';
import { Activity, ShieldAlert, Cpu } from 'lucide-react';

export default function RunAudit() {
  const [dataset, setDataset] = useState('');
  const [attribute, setAttribute] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Run Bias Audit</h1>
        <p className="text-gray-400">Select a dataset and a protected attribute to analyze for disparities and algorithmic bias.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Target Dataset</label>
              <select 
                value={dataset}
                onChange={(e) => setDataset(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
              >
                <option value="" disabled>Select a dataset...</option>
                <option value="1">Q3 Fintech Approvals (Synthetic)</option>
                <option value="2">Lagos SME Loans 2025</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Protected Attribute</label>
              <select 
                value={attribute}
                onChange={(e) => setAttribute(e.target.value)}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none"
              >
                <option value="" disabled>Select an attribute...</option>
                <option value="EmploymentType">Employment Type</option>
                <option value="Gender">Gender</option>
                <option value="Region">Region</option>
              </select>
            </div>
          </div>

          <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl">
            <h3 className="text-primary font-bold mb-2 flex items-center gap-2">
              <Cpu size={20} /> Metric: Disparate Impact Ratio
            </h3>
            <p className="text-sm text-primary/80 leading-relaxed">
              The engine will compare the approval rate of various groups against the highest-approved group. 
              A ratio below 0.80 typically indicates potential adverse impact and flags the group as "High Risk".
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2">
              <Activity size={18} /> Execute Audit Engine
            </button>
          </div>

        </form>
      </div>
      
      {/* Placeholder for results that would appear after running */}
      <div className="opacity-50 pointer-events-none mt-12 text-center text-sm text-gray-500 flex flex-col items-center gap-2">
        <ShieldAlert size={32} className="opacity-20" />
        Audit results will appear here
      </div>
    </div>
  );
}
