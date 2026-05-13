import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-black">GL</span>
            </div>
            <span className="text-white font-black text-lg tracking-tight">GetLegalLeads.xyz</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-slate-400 hover:text-white text-sm transition-colors">
              Admin Login
            </Link>
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-red-950/50 border border-red-800/50 text-red-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
          Live leads from 5 major markets
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
          Pre-Qualified Personal Injury Leads
          <br />
          <span className="text-red-500">Delivered to Your Firm</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
          We run the websites, answer the calls with AI, and route exclusive leads directly to your firm. You only pay for leads you receive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
            Start Receiving Leads
          </a>
          <a href="#how-it-works" className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors border border-slate-700">
            See How It Works
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "5", label: "Active Markets" },
            { value: "3", label: "Lead Types" },
            { value: "24/7", label: "AI Receptionist" },
            { value: "100%", label: "Exclusive Leads" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-black text-white">{s.value}</p>
              <p className="text-slate-500 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Types */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">Three Ways Clients Find You</h2>
          <p className="text-slate-400">Each lead type is exclusive — never resold to another firm</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
            <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Form Fill</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              A potential client fills out our contact form with their name, phone, email, and case details. Ready for your team to call back.
            </p>
            <div className="text-slate-300 text-sm font-semibold">$200 per lead</div>
          </div>
          <div className="bg-purple-950/30 border border-purple-800/50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-purple-900/50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">AI Answered Call</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Our AI receptionist answers the call, converses naturally, collects all contact and case information, then notifies your firm immediately.
            </p>
            <div className="text-purple-300 text-sm font-semibold">$500 per lead</div>
          </div>
          <div className="bg-orange-950/30 border border-orange-800/50 rounded-2xl p-6">
            <div className="w-10 h-10 bg-orange-900/50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Hot Transfer</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              The AI collects information, says &quot;hold while I connect you&quot;, then transfers the live caller directly to your office phone. Highest intent lead possible.
            </p>
            <div className="text-orange-300 text-sm font-semibold">$2,000 per lead</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-white mb-3">How It Works</h2>
            <p className="text-slate-400">Set up once. Receive leads indefinitely.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "We Build the Site", desc: "We create and maintain SEO-optimized personal injury websites in your target city." },
              { step: "02", title: "Leads Find Us", desc: "Injured people search Google, find our site, and either fill out a form or call our AI receptionist." },
              { step: "03", title: "AI Qualifies", desc: "Our AI collects name, phone, email, injury type, and connects the caller to your firm." },
              { step: "04", title: "You Get the Lead", desc: "Leads are logged in your CRM dashboard and your firm is notified immediately." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-red-500 text-4xl font-black mb-3">{item.step}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-3">Active Markets</h2>
          <p className="text-slate-400">We own high-ranking personal injury domains in these cities. More markets launching soon.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { city: "Las Vegas", state: "Nevada", domain: "lasvegasnevadainjurylawyer.com" },
            { city: "Dallas", state: "Texas", domain: "dallastexasinjurylawyer.com" },
            { city: "Austin", state: "Texas", domain: "austintexasinjurylawyer.com" },
            { city: "Omaha", state: "Nebraska", domain: "omahanebraskainjurylawyer.com" },
            { city: "Denver", state: "Colorado", domain: "denvercoloradoinjurylawyer.com" },
          ].map((m) => (
            <div key={m.city} className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-center">
              <p className="text-white font-bold">{m.city}</p>
              <p className="text-slate-500 text-xs">{m.state}</p>
              <p className="text-slate-600 text-xs mt-1 truncate">{m.domain}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prepay model */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Simple Prepay Model</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Purchase a block of leads upfront and we deliver them as they come in. No monthly subscription, no setup fees, no contracts. You only pay for real leads.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              { icon: "✓", text: "Exclusive leads — never shared with competing firms" },
              { icon: "✓", text: "CRM dashboard to track all leads and their status" },
              { icon: "✓", text: "Real-time notifications when a new lead comes in" },
              { icon: "✓", text: "AI receptionist answers calls 24/7, even after hours" },
              { icon: "✓", text: "Monthly invoicing with full lead details" },
              { icon: "✓", text: "No long-term contracts — stop anytime" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-400 font-bold mt-0.5">{item.icon}</span>
                <span className="text-slate-300 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to Start Receiving Leads?</h2>
        <p className="text-slate-400 mb-8">
          Contact us to discuss pricing, available markets, and getting your firm set up on the platform.
        </p>
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-left">
          <div className="space-y-4 mb-6">
            <div>
              <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-1.5">Your Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
              />
            </div>
            <div>
              <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-1.5">Firm Name</label>
              <input
                type="text"
                placeholder="Smith & Associates Law Firm"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="john@smithlaw.com"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
                />
              </div>
              <div>
                <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-1.5">Phone</label>
                <input
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-slate-400 text-xs font-medium uppercase tracking-wide block mb-1.5">Markets Interested In</label>
              <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-300 focus:outline-none focus:border-red-500 text-sm">
                <option value="">Select a market...</option>
                <option>Las Vegas, Nevada</option>
                <option>Dallas, Texas</option>
                <option>Austin, Texas</option>
                <option>Omaha, Nebraska</option>
                <option>Denver, Colorado</option>
                <option>Multiple markets</option>
              </select>
            </div>
          </div>
          <a
            href={`mailto:ben@advancedmarketing.co?subject=GetLegalLeads.xyz - Inquiry`}
            className="block w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-center transition-colors"
          >
            Send Inquiry
          </a>
          <p className="text-slate-600 text-xs text-center mt-3">
            Or email directly: <a href="mailto:ben@advancedmarketing.co" className="text-slate-500 hover:text-slate-400">ben@advancedmarketing.co</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-black">GL</span>
            </div>
            <span className="text-slate-500 text-sm">GetLegalLeads.xyz</span>
          </div>
          <p className="text-slate-600 text-xs">© 2026 Advanced Marketing Co. All rights reserved.</p>
          <Link href="/login" className="text-slate-600 hover:text-slate-400 text-xs transition-colors">
            Admin Login
          </Link>
        </div>
      </footer>
    </div>
  );
}
