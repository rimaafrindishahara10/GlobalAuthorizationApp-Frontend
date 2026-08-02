import React from 'react';
import { 
  Fingerprint, 
  Lock, 
  Shield, 
  Sparkles, 
  Zap, 
  Code, 
  Settings 
} from 'lucide-react';

export default function AuthHomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300 font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Secure. Fast. Futuristic.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 font-normal">
          The next-generation authentication platform built for modern apps.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium hover:opacity-90 transition-opacity shadow-sm">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
            Learn More
          </button>
        </div>
      </section>

      {/* --- POWERFUL FEATURES SECTION --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">
          Powerful Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm flex flex-col items-center text-center transition-all hover:border-zinc-400 dark:hover:border-zinc-700">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-zinc-900 dark:text-white">
              <Fingerprint className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Biometric Login</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Next-level security with fingerprint and facial recognition.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm flex flex-col items-center text-center transition-all hover:border-zinc-400 dark:hover:border-zinc-700">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-zinc-900 dark:text-white">
              <Lock className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Multi-Layer Encryption</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Industry-grade encrypted authentication for complete safety.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm flex flex-col items-center text-center transition-all hover:border-zinc-400 dark:hover:border-zinc-700">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-zinc-900 dark:text-white">
              <Shield className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="text-lg font-bold mb-2">Smart Access Control</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              AI-powered access system that adapts to real-time threats.
            </p>
          </div>

        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
          Start Securing Your App Today
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
          Join thousands of developers already building with our authentication system.
        </p>
        <button className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-medium hover:opacity-90 transition-opacity shadow-sm">
          Create Account
        </button>
      </section>

      {/* --- WHY CHOOSE OUR PLATFORM --- */}
      <section className="py-16 px-6 max-w-5xl mx-auto border-t border-zinc-200 dark:border-zinc-800/80">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 tracking-tight">
          Why Choose Our Auth Platform?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="flex gap-4 items-start">
            <div className="mt-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">AI-Driven Security</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Real-time monitoring detects suspicious activities and prevents unauthorized access.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="mt-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Lightning-Fast Performance</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Built for scale with instant response times for authentication flows.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="mt-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Developer-Friendly API</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Integrate in minutes with clean, powerful, well-structured APIs.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="mt-1 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base mb-1">Highly Customizable</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Theme, workflow, and control options designed to match your app perfectly.
              </p>
            </div>
          </div>

        </div>
      </section>

     

    </div>
  );
}