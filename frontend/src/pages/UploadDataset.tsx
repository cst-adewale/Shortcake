import { useState } from 'react';
import { UploadCloud, FileType, CheckCircle2 } from 'lucide-react';

export default function UploadDataset() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Upload Dataset</h1>
        <p className="text-gray-400">Import real-world loan decision datasets for fairness auditing. Files must be in CSV format.</p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
        
        {/* Drag and Drop Zone */}
        <div 
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${isDragging ? 'border-primary bg-primary/5' : 'border-white/20 hover:border-white/40 hover:bg-white/5'}`}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              setFile(e.dataTransfer.files[0]);
            }
          }}
        >
          <div className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <UploadCloud size={40} className={isDragging ? 'text-primary' : 'text-gray-400'} />
          </div>
          
          {file ? (
            <div className="space-y-4 animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-center gap-3 text-green-400 font-medium">
                <CheckCircle2 size={20} /> File attached successfully
              </div>
              <div className="inline-flex items-center gap-3 bg-black/30 px-6 py-3 rounded-xl border border-white/10">
                <FileType className="text-blue-400" />
                <span className="text-gray-200">{file.name}</span>
                <span className="text-gray-500 text-sm">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
              </div>
              <div>
                <button onClick={() => setFile(null)} className="text-sm text-gray-500 hover:text-red-400 mt-2 transition-colors">
                  Remove file
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2 pointer-events-none">
              <h3 className="text-xl font-bold text-gray-200">Drag & drop your CSV file here</h3>
              <p className="text-gray-500">or click below to browse your computer</p>
            </div>
          )}

          {!file && (
            <div className="mt-8 relative">
              <input type="file" accept=".csv" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={(e) => {
                if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
              }} />
              <button className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-xl transition-all pointer-events-none">
                Browse Files
              </button>
            </div>
          )}
        </div>

        {/* Upload Details */}
        {file && (
          <div className="mt-8 space-y-6 animate-in slide-in-from-bottom-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Dataset Name</label>
              <input 
                type="text" 
                defaultValue={file.name.replace('.csv', '')}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Description (Optional)</label>
              <textarea 
                rows={3}
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
              ></textarea>
            </div>
            <div className="flex justify-end pt-4">
              <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-xl transition-all">
                Upload and Process Dataset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
