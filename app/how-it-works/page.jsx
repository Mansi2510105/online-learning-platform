import { Search, Sparkles, Trophy } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100 rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-6 shadow-sm">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            From zero to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">mastery</span> in 3 steps
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            You don't need to spend hours planning your curriculum. Tell us what you want to learn, and our AI handles the rest.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          
          {/* Connecting Dashed Line (Visible only on desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 border-t-2 border-dashed border-indigo-200 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="0">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center h-full">
              {/* Giant Background Number */}
              <span className="absolute top-4 right-6 text-8xl font-black text-slate-50 select-none -z-10 transition-colors group-hover:text-indigo-50/50">
                1
              </span>
              
              <div className="w-20 h-20 mx-auto bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Search className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Enter a Topic</h3>
              <p className="text-slate-500 leading-relaxed">
                Type in any skill, software, or subject you want to master. From "Advanced React Patterns" to "Basic Japanese".
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center h-full">
              <span className="absolute top-4 right-6 text-8xl font-black text-slate-50 select-none -z-10 transition-colors group-hover:text-purple-50/50">
                2
              </span>
              
              <div className="w-20 h-20 mx-auto bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Sparkles className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Creates Course</h3>
              <p className="text-slate-500 leading-relaxed">
                Our engine instantly curates the best web resources, generating a structured, step-by-step learning path tailored for you.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 group" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:-translate-y-2 transition-transform duration-300 text-center h-full">
              <span className="absolute top-4 right-6 text-8xl font-black text-slate-50 select-none -z-10 transition-colors group-hover:text-pink-50/50">
                3
              </span>
              
              <div className="w-20 h-20 mx-auto bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Trophy className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Start Learning</h3>
              <p className="text-slate-500 leading-relaxed">
                Track your progress on your personalized dashboard, complete modules, and watch your skills grow day by day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}