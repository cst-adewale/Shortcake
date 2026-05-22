import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth success and navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f16] bg-gradient-to-br from-[#0a0f16] via-[#0d1620] to-[#0f231e] text-white p-4 font-sans relative overflow-hidden">
      
      {/* Decorative background blur elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10">
        
        {/* Left Side: Branding / Info */}
        <div className="hidden md:flex flex-col justify-between w-1/2 p-12 bg-gradient-to-br from-primary/10 to-transparent border-r border-white/10 relative">
          <div>
            <div className="flex items-center gap-3 text-primary font-bold text-2xl tracking-tight mb-8">
              <ShieldCheck className="w-8 h-8 text-primary" />
              L.E.B.A.
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight leading-tight mb-6">
              Auditing AI Fairness <br /> in Nigerian Fintech.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Detect approval disparities, analyze risk models, and ensure ethical lending decisions across demographics.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">01</div>
              Upload Datasets
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">02</div>
              Run Bias Audits
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">03</div>
              Generate Reports
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="max-w-sm mx-auto">
            <h2 className="text-3xl font-bold mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-gray-400 mb-8">
              {isLogin 
                ? 'Enter your credentials to access your dashboard.' 
                : 'Sign up to start auditing lending datasets.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input 
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-gray-300">Password</label>
                  {isLogin && (
                    <a href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 group mt-6"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center text-gray-400 text-sm">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
