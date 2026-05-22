import { useState } from 'react';
import { Database, Settings2, SlidersHorizontal, Play } from 'lucide-react';

export default function GenerateData() {
  const [count, setCount] = useState(5000);
  const [bias, setBias] = useState(0.2);
  const [name, setName] = useState('');

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Synthesize Data</h1>
        <p className="text-gray-400">Generate realistic Nigerian loan application datasets with configurable bias parameters for auditing practice.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-primary border-b border-white/10 pb-2">
              <Database size={20} /> Dataset Details
            </h3>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Dataset Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Q3 Fintech Approvals (Synthetic)"
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            
            <div className="space-y-2 pt-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-300">Applicant Count</label>
                <span className="text-primary font-mono bg-primary/10 px-2 py-1 rounded text-sm">{count.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="50000" 
                step="1000"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>1k</span>
                <span>50k</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold flex items-center gap-2 text-primary border-b border-white/10 pb-2">
              <Settings2 size={20} /> Bias Simulation Config
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Adjust the sliders below to inject synthetic bias into the generated data. This simulates real-world scenarios where certain demographics (like informal workers or specific genders) are unfairly penalized by legacy credit models.
            </p>

            <div className="space-y-2 p-6 bg-black/20 rounded-2xl border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={16} className="text-gray-400" />
                  <label className="text-sm font-medium text-gray-200">Employment Type Penalty</label>
                </div>
                <span className="text-red-400 font-mono bg-red-400/10 px-2 py-1 rounded text-sm">{(bias * 100).toFixed(0)}% drop</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-500 w-16 text-right">Fair</span>
                <input 
                  type="range" 
                  min="0" 
                  max="0.5" 
                  step="0.05"
                  value={bias}
                  onChange={(e) => setBias(Number(e.target.value))}
                  className="flex-1 accent-red-500"
                />
                <span className="text-xs text-red-500 w-16">High Bias</span>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">
                This will artificially lower the approval rates for <span className="text-gray-300">Traders</span> and <span className="text-gray-300">Farmers</span> compared to <span className="text-gray-300">Salary Earners</span>.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-end">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all flex items-center gap-2">
              <Play size={18} fill="currentColor" /> Generate Dataset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
