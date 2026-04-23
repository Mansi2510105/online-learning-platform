"use client";

import { useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Sparkles,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Hexagon,
  Triangle,
  Circle,
  Square,
  BrainCircuit,
  MonitorPlay,
  BarChartBig,
  Twitter,
  Github,
  Linkedin
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden font-sans">
      {/* Background Blurs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] opacity-70"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">SmartEd</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="#features" className="hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="/how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</Link>
            <Link href="/workspace/billing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/workspace" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Dashboard
            </Link>
            {/* Clerk User Button automatically handles Signed In / Signed Out states */}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 bg-grid-pattern">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              AI-Powered Education 2.0
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.15] tracking-tight">
              Turn any topic into a <br />
              <span className="text-gradient">Masterclass.</span>
            </h1>

            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              Stop searching, start learning. SmartEd uses advanced AI to generate structured courses, curate videos, and track your progress automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/workspace">
              <button className="bg-gradient-brand px-8 py-4 rounded-xl text-white font-bold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                Get Started Free <ArrowRight className="w-5 h-5" />
              </button>
              </Link>
              <Link href="/how-it-works">
              <button className="bg-white px-8 py-4 rounded-xl text-slate-700 font-bold border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm">
                <PlayCircle className="w-5 h-5 text-indigo-600" /> Watch Demo
              </button>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="User" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64" alt="User" />
              </div>
              <p>Trusted by 10,000+ Students</p>
            </div>
          </div>

          <div className="relative" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: "2s" }}></div>

            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 animate-float">
              <div className="bg-slate-100 rounded-xl overflow-hidden aspect-[4/3] relative group">
                <img
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Dashboard Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur p-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-green-600 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Status</p>
                    <p className="text-sm font-bold text-slate-900">Course Completed</p>
                  </div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 max-w-[200px] animate-float" style={{ animationDelay: "2s" }}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500">Progress</span>
                    <span className="text-xs font-bold text-indigo-600">85%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-brand w-[85%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Powering next-gen learners from</p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
            <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2"><Hexagon className="text-slate-400" /> ACME Corp</h3>
            <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2"><Triangle className="text-slate-400" /> GlobalTech</h3>
            <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2"><Circle className="text-slate-400" /> Infinite</h3>
            <h3 className="text-xl font-bold text-slate-700 flex items-center gap-2"><Square className="text-slate-400" /> BoxScale</h3>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Supercharge your learning</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Our AI engine handles the heavy lifting—curriculum design, resource gathering, and scheduling—so you can just learn.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit className="text-indigo-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Adaptive AI Curriculum</h3>
              <p className="text-slate-500 leading-relaxed">Forget generic syllabi. Our AI creates a custom learning path tailored to your specific goals and skill level.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <MonitorPlay className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Smart Video Curation</h3>
              <p className="text-slate-500 leading-relaxed">We scour the web for the highest-rated tutorials and lectures, organizing them into bite-sized chapters.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <BarChartBig className="text-pink-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-time Analytics</h3>
              <p className="text-slate-500 leading-relaxed">Visualize your growth streaks, completion rates, and knowledge gaps with our beautiful dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10" data-aos="zoom-in">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to transform how you learn?</h2>
          <p className="text-slate-300 text-lg mb-10">Join thousands of students and professionals using SmartEd to master new skills faster than ever before.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/sign-up">
              <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors shadow-lg">Create Free Account</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-32 pb-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Sparkles className="text-white w-4 h-4" />
                </div>
                <span className="text-xl font-bold text-slate-900">SmartEd</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                The world's first AI-powered course generator. Master any skill in minutes.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">© 2026 SmartEd Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Twitter className="w-5 h-5 text-slate-400 hover:text-indigo-500 cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-slate-400 hover:text-slate-900 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}