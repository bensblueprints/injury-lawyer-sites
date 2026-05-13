import type { Metadata } from "next";
import { Shield, Star, Award, Clock, Phone } from "lucide-react";
import { LeadForm } from "@injury/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Consultation – Denver Personal Injury Lawyer",
  description:
    "Get a free, no-obligation consultation with an experienced Denver personal injury attorney. No fee unless we win. Available 24/7. Call (303) 555-0174.",
  alternates: {
    canonical: "https://devnercoloradoinjurylawyer.com/free-consultation",
  },
  openGraph: {
    title: "Free Consultation – Denver Injury Law Group",
    description:
      "Start your free case review today. Our Denver personal injury attorneys respond within 15 minutes.",
    url: "https://devnercoloradoinjurylawyer.com/free-consultation",
  },
};

const trustSignals = [
  {
    icon: <Shield className="w-6 h-6 text-green-400" />,
    title: "100% Free, No Obligation",
    body: "Your consultation is completely free. You owe us nothing unless we win your Colorado case.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-400" />,
    title: "Response in 15 Minutes",
    body: "We respond to every inquiry within 15 minutes — day or night, weekday or weekend.",
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />,
    title: "4.9★ Rated Attorneys",
    body: "143 verified five-star reviews from real Denver and Metro Colorado clients.",
  },
  {
    icon: <Award className="w-6 h-6 text-red-400" />,
    title: "$50M+ Recovered",
    body: "Our attorneys have secured over fifty million dollars for Denver and Colorado injury victims.",
  },
];

export default function FreeConsultationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-red-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div>
              <span className="inline-block bg-red-700/20 border border-red-700/40 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Free & Confidential
              </span>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
                Get Your{" "}
                <span className="text-red-400">Free Case Review</span>{" "}
                Today
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our Denver personal injury attorneys are available 24 hours a day,
                7 days a week. Tell us what happened and we'll give you an honest
                assessment of your Colorado case — at no cost and with no pressure.
              </p>

              {/* Trust signals */}
              <div className="space-y-4 mb-8">
                {trustSignals.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-0.5">{item.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phone CTA */}
              <div className="flex items-center gap-3 bg-red-700/20 border border-red-700/40 rounded-xl p-4">
                <Phone className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs">Prefer to call? We answer 24/7.</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-white font-black text-xl hover:text-yellow-300 transition-colors"
                  >
                    {siteConfig.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-1">
                Tell Us About Your Case
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                All information is confidential and protected by attorney-client privilege.
                We'll respond within 15 minutes.
              </p>
              <LeadForm config={siteConfig} variant="hero" />

              <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                By submitting this form, you agree to be contacted by Denver Injury Law Group
                regarding your inquiry. Your information is never sold or shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional reassurance */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            What Happens After You Submit?
          </h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We make the process as simple and stress-free as possible.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "We Contact You",
                body: "A member of our Denver team reaches out within 15 minutes to discuss your Colorado case.",
              },
              {
                step: "2",
                title: "Free Attorney Review",
                body: "A senior attorney reviews your case details and explains your legal options under Colorado law honestly.",
              },
              {
                step: "3",
                title: "We Go to Work",
                body: "If you retain us, we immediately begin investigating your case — at no cost until we win.",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-red-900/30">
                  <span className="text-white font-black text-2xl">{item.step}</span>
                </div>
                <h3 className="font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 py-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Attorney Advertising.</strong> The information on this website is for
            general information purposes only. Nothing on this site should be taken as legal
            advice for any individual case or situation. This information is not intended to
            create, and receipt or viewing does not constitute, an attorney-client relationship.
            Past results do not guarantee similar outcomes. Denver Injury Law Group serves
            clients throughout Colorado.
          </p>
        </div>
      </section>
    </>
  );
}
