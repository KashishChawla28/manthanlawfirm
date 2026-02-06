import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const practices = [
  {
    id: "corporate",
    title: "Corporate Law",
    subtitle: "Strategic Business Counsel",
    description: "We provide comprehensive legal services to corporations and their leadership, guiding strategic decisions and complex transactions with the rigor and discretion they demand.",
    services: [
      "Mergers & Acquisitions",
      "Corporate Governance",
      "Securities Compliance",
      "Joint Ventures & Strategic Alliances",
      "Private Equity Transactions",
      "Executive Compensation",
    ],
  },
  {
    id: "litigation",
    title: "Litigation",
    subtitle: "Dispute Resolution & Trial Advocacy",
    description: "Our litigators bring decades of courtroom experience to complex commercial disputes, securities litigation, and appellate advocacy at the highest levels.",
    services: [
      "Commercial Litigation",
      "Securities Litigation",
      "Appellate Practice",
      "Arbitration & Mediation",
      "White Collar Defense",
      "Regulatory Enforcement",
    ],
  },
  {
    id: "estate",
    title: "Estate Planning",
    subtitle: "Wealth Preservation & Transfer",
    description: "We help individuals and families preserve and transfer wealth across generations through sophisticated estate planning strategies tailored to each client's unique circumstances.",
    services: [
      "Estate Planning & Administration",
      "Trust Formation & Management",
      "Charitable Giving Strategies",
      "Family Office Services",
      "Tax Planning",
      "Business Succession",
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Property Transactions & Development",
    description: "Our real estate practice handles complex commercial transactions and development projects, representing developers, investors, and institutions.",
    services: [
      "Commercial Acquisitions & Sales",
      "Development & Construction",
      "Real Estate Finance",
      "Leasing & Property Management",
      "Land Use & Zoning",
      "Real Estate Litigation",
    ],
  },
  {
    id: "private-client",
    title: "Private Client",
    subtitle: "Personal Legal Affairs",
    description: "We provide discrete, personalized counsel to individuals and families on matters requiring the utmost confidentiality and care.",
    services: [
      "Family Law Matters",
      "Prenuptial Agreements",
      "Personal Asset Protection",
      "Privacy & Reputation",
      "Philanthropic Advisory",
      "Fiduciary Services",
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory",
    subtitle: "Compliance & Government Affairs",
    description: "We guide clients through complex regulatory frameworks, helping them navigate compliance requirements and engage effectively with government authorities.",
    services: [
      "Regulatory Compliance",
      "Government Investigations",
      "Licensing & Permits",
      "Policy Advocacy",
      "Industry-Specific Regulations",
      "Internal Investigations",
    ],
  },
];

const PracticeAreasPage = () => {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-caption mb-4">Our Expertise</p>
              <h1 className="text-display mb-6">
                Practice<br />
                <span className="text-accent italic">Areas</span>
              </h1>
              <div className="accent-line mx-auto mb-8" />
              <p className="text-body max-w-xl mx-auto">
                Sterling & Associates offers distinguished counsel across a range of 
                practice areas, providing sophisticated legal solutions tailored to 
                each client's unique needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Practice Areas */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-wide">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`py-16 md:py-20 ${index !== practices.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                  <div>
                    <span className="text-xs text-muted-foreground tracking-wide mb-4 block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-headline mb-2">{practice.title}</h2>
                    <p className="text-accent italic text-lg mb-6">{practice.subtitle}</p>
                    <div className="accent-line mb-6" />
                    <p className="text-body">{practice.description}</p>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-6">
                      Services Include
                    </h3>
                    <ul className="space-y-3">
                      {practice.services.map((service) => (
                        <li key={service} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-body">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default PracticeAreasPage;
