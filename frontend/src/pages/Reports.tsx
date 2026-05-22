import { FileText, Download, FileArchive } from 'lucide-react';

const mockReports = [
  { id: 1, name: 'Q3_Employment_Bias_Audit.pdf', date: '2025-10-15', size: '1.2 MB' },
  { id: 2, name: 'Lagos_Region_Disparity_Report.pdf', date: '2025-09-22', size: '2.4 MB' },
  { id: 3, name: 'Gender_Fairness_Baseline.pdf', date: '2025-08-10', size: '0.9 MB' },
];

export default function Reports() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Audit Reports</h1>
        <p className="text-gray-400">Download previously generated fairness reports and compliance summaries.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
        
        <div className="p-6 border-b border-white/10 bg-black/20 flex justify-between items-center">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <FileArchive size={20} className="text-primary" /> Generated Reports Archive
          </h3>
        </div>

        <div className="divide-y divide-white/5">
          {mockReports.map((report) => (
            <div key={report.id} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-200 group-hover:text-primary transition-colors">{report.name}</h4>
                  <div className="text-xs text-gray-500 flex gap-4 mt-1">
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-all">
                <Download size={18} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
