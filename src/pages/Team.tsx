import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const team = [
  {
    name: "Subhash Chugh",
    role: "Founder & Proprietor",
    specialty: "Litigation/Criminal/Civil",
    bio: "Mr. Subhash Chugh is the Founder and Proprietor of Manthan Law Firm, with decades of experience representing clients across criminal, civil, and commercial litigation. Known for his strategic approach and courtroom advocacy, he has successfully handled complex matters before various courts and tribunals. His practice is built on integrity, precision, and a deep commitment to delivering effective legal solutions tailored to each client’s needs.",
    image: "/subashchugh.jpeg",
  },
  {
    name: "Ravi Verma",
    role: "Senior Associate",
    specialty: "Litigation/Corporate",
    bio: "Mr. Ravi Verma is a Senior Associate at Manthan Law Firm, handling a wide range of litigation and corporate advisory matters. He advises clients on commercial disputes, contractual issues, and regulatory compliance, while also representing them before various courts and authorities. Known for his meticulous preparation and practical insight, he plays a key role in delivering timely and effective legal solutions for the firm’s clients.",
    image: "/raviverma.jpeg",
  },
  {
    name: "Keshav Ahuja",
    role: "Senior Associate",
    specialty: "Litigation/Taxation/Corporate",
    bio: "Mr. Keshav Ahuja is a Senior Associate at Manthan Law Firm with experience across litigation, taxation, and corporate advisory matters. He advises clients on tax-related disputes, regulatory compliance, and corporate structuring, while also representing them in civil and commercial proceedings. His analytical approach and strong command over statutory frameworks enable him to handle complex matters with clarity and precision.",
    image: "/keshavahuja.jpeg",
  },
  {
    name: "Shivali Sharma",
    role: "Senior Associate",
    specialty: "Litigation/Civil/Matrimonial",
    bio: "Ms. Shivali Sharma is a Senior Associate at Manthan Law Firm with focused experience in civil litigation and matrimonial disputes. She regularly advises and represents clients in matters involving divorce, maintenance, custody, and family settlements. Known for her empathetic yet strategic approach, she handles sensitive disputes with discretion while ensuring strong legal advocacy.",
    image: "/shivalisharma.jpeg",
  },
  {
    name: "Utkarsh",
    role: "Legal Associate",
    specialty: "Research Analyst",
    bio: "Mr. Utkarsh provides in-depth legal research and analysis, assisting clients with complex regulatory matters and strategic decision-making.",
    image: "/utkarsh.jpeg",
  },
  {
    name: "Devansh",
    role: "Legal Associate",
    specialty: "Client Relations & Research Analyst",
    bio: "Mr. Devansh specializes in client relations and legal research, guiding clients through complex litigation and regulatory matters with strategic insight.",
    image: "/devansh.jpeg",
  },
];

const Team = () => {
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
              <p className="text-caption mb-4">Our People</p>
              <h1 className="text-display mb-6">
                Meet the<br />
                <span className="text-accent italic">Team</span>
              </h1>
              <div className="accent-line mx-auto mb-8" />
              <p className="text-body max-w-xl mx-auto">
                Our attorneys bring decades of experience, distinguished credentials, 
                and an unwavering commitment to client service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-background border border-border"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="font-serif text-xl mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-accent tracking-wide mb-4">
                      {member.specialty}
                    </p>
                    <p className="text-body text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default Team;
