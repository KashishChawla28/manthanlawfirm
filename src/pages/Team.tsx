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
    name: "Robert Ashford",
    role: "Partner",
    specialty: "Real Estate",
    bio: "Robert leads the firm's real estate practice, handling complex commercial transactions and development projects throughout the Northeast.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face",
  },
  {
    name: "Margaret Wells",
    role: "Partner",
    specialty: "Regulatory & Compliance",
    bio: "Margaret counsels clients on regulatory matters and government investigations, drawing on her prior experience as a federal prosecutor.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=750&fit=crop&crop=face",
  },
  {
    name: "David Morrison",
    role: "Of Counsel",
    specialty: "Securities Litigation",
    bio: "David brings decades of experience in securities litigation and enforcement matters, representing both public companies and executives.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&crop=face",
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
