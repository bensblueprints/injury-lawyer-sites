import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { SiteConfig } from "@injury/schema";
import { LeadForm } from "./LeadForm";

const PARTNER_SITES = [
  { city: "Las Vegas, NV", domain: "lasvegasnevadainjurylawyer.com" },
  { city: "Dallas, TX", domain: "dallastexasinjurylawyer.com" },
  { city: "Austin, TX", domain: "austintexasinjurylawyer.com" },
  { city: "Omaha, NE", domain: "omahanebraskainjurylawyer.com" },
  { city: "Denver, CO", domain: "denvercoloradoinjurylawyer.com" },
];

const practiceAreaLinks = [
  { label: "Car Accidents", slug: "car-accident-lawyer" },
  { label: "Truck Accidents", slug: "truck-accident-lawyer" },
  { label: "Motorcycle Accidents", slug: "motorcycle-accident-lawyer" },
  { label: "Pedestrian Accidents", slug: "pedestrian-accident-lawyer" },
  { label: "Bicycle Accidents", slug: "bicycle-accident-lawyer" },
  { label: "Slip & Fall", slug: "slip-and-fall-lawyer" },
  { label: "Premises Liability", slug: "premises-liability-lawyer" },
  { label: "Medical Malpractice", slug: "medical-malpractice-lawyer" },
  { label: "Wrongful Death", slug: "wrongful-death-lawyer" },
  { label: "Dog Bites", slug: "dog-bite-lawyer" },
  { label: "Workers' Compensation", slug: "workers-compensation-lawyer" },
  { label: "Construction Accidents", slug: "construction-accident-lawyer" },
  { label: "Rideshare Accidents", slug: "rideshare-accident-lawyer" },
  { label: "Bus Accidents", slug: "bus-accident-lawyer" },
  { label: "Product Liability", slug: "product-liability-lawyer" },
  { label: "Brain Injuries", slug: "brain-injury-lawyer" },
  { label: "Spinal Injuries", slug: "spinal-cord-injury-lawyer" },
  { label: "Burn Injuries", slug: "burn-injury-lawyer" },
  { label: "Catastrophic Injuries", slug: "catastrophic-injury-lawyer" },
];

const legalLinks = [
  { label: "How to File a Claim", slug: "legal-process/how-to-file-a-claim" },
  { label: "Lawsuit Timeline", slug: "legal-process/lawsuit-timeline" },
  { label: "Statute of Limitations", slug: "legal-process/statute-of-limitations" },
  { label: "What Is Negligence?", slug: "legal-process/what-is-negligence" },
  { label: "How Much Is My Case Worth?", slug: "legal-process/calculating-damages" },
  { label: "Dealing with Insurance", slug: "legal-process/insurance-negotiation" },
  { label: "When to Hire a Lawyer", slug: "legal-process/when-to-hire" },
  { label: "General FAQ", slug: "faq/general-personal-injury" },
  { label: "Car Accident FAQ", slug: "faq/car-accidents" },
  { label: "Settlement FAQ", slug: "faq/settlement-process" },
];

export function Footer({ config }: { config: SiteConfig }) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Lead form band */}
      <div className="bg-red-700 py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-black mb-2">
            Get Your FREE Case Review Today
          </h2>
          <p className="text-red-100 mb-6">
            Talk to a {config.city} injury lawyer in minutes. Zero cost, zero obligation.
          </p>
          <LeadForm config={config} variant="footer" />
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">⚖</span>
              </div>
              <div>
                <div className="font-black text-white text-sm leading-tight">{config.city}</div>
                <div className="font-black text-red-400 text-xs leading-tight uppercase tracking-wider">Injury Lawyer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {config.description}
            </p>
            {/* NAP — critical for local SEO */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                <address className="not-italic">{config.address}</address>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href={`tel:${config.phone}`} className="hover:text-red-400 transition-colors">
                  {config.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:text-red-400 transition-colors">
                  {config.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>Mon–Fri 8am–6pm, Sat 9am–2pm</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Practice Areas
            </h3>
            <ul className="space-y-1.5">
              {practiceAreaLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={`/${link.slug}`}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Legal Information
            </h3>
            <ul className="space-y-1.5">
              {legalLinks.map((link) => (
                <li key={link.slug}>
                  <a
                    href={`/${link.slug}`}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About & Resources */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">
              About & Resources
            </h3>
            <ul className="space-y-1.5">
              <li><a href="/about/about-us" className="text-gray-400 hover:text-red-400 text-sm transition-colors">About Our Firm</a></li>
              <li><a href="/about/why-choose-us" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Why Choose Us</a></li>
              <li><a href="/about/case-results" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Case Results</a></li>
              <li><a href="/free-consultation" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Free Consultation</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Contact Us</a></li>
              <li className="pt-2"><a href="/resources/local-resources" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Local Resources</a></li>
              <li><a href="/resources/accident-reports" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Accident Reports</a></li>
              <li><a href="/resources/hospitals" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Local Hospitals</a></li>
              <li><a href="/resources/accident-statistics" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Accident Statistics</a></li>
              <li><a href="/resources/court-system" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Court System Guide</a></li>
              <li><a href="/resources/insurance-companies" className="text-gray-400 hover:text-red-400 text-sm transition-colors">Local Insurance Companies</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Areas */}
      {config.serviceAreas && config.serviceAreas.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="border-t border-gray-800 pt-8">
            <h3 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">
              Areas We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5">
              {config.serviceAreas.map((area) => (
                <a
                  key={area.slug}
                  href={`/areas/${area.slug}`}
                  className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                >
                  {area.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Partner Sites + Get Legal Leads */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
            <div>
              <h3 className="font-bold text-white mb-3 uppercase tracking-wider text-xs">
                Injury Lawyers in Other Cities
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {PARTNER_SITES.filter((s) => s.domain !== config.domain).map((site) => (
                  <a
                    key={site.domain}
                    href={`https://${site.domain}`}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.city}
                  </a>
                ))}
              </div>
            </div>
            <div className="sm:text-right flex-shrink-0">
              <h3 className="font-bold text-white mb-1 uppercase tracking-wider text-xs">
                Get Legal Leads
              </h3>
              <p className="text-gray-500 text-xs mb-2">Attorney lead generation network</p>
              <a
                href="https://getlegalleads.xyz"
                className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GetLegalLeads.xyz →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {config.firmName}. All rights reserved.</p>
          <p className="text-center">
            The information on this website is for general purposes only and does not constitute legal advice.
            No attorney-client relationship is formed by using this site.
          </p>
        </div>
      </div>
    </footer>
  );
}
