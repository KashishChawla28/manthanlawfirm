import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const values = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in every aspect of our practice, from legal analysis to client service.",
  },
  {
    title: "Integrity",
    description: "We conduct ourselves with unwavering honesty and ethical commitment in all our dealings.",
  },
  {
    title: "Discretion",
    description: "We treat every client matter with the utmost confidentiality and sensitivity.",
  },
  {
    title: "Commitment",
    description: "We are devoted to achieving the best possible outcomes for our clients.",
  },
];

const About = () => {
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
              <p className="text-caption mb-4">About the Firm</p>
              <h1 className="text-display mb-6">
                A Tradition of<br />
                <span className="text-accent italic">Excellence</span>
              </h1>
              <div className="accent-line mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-caption mb-4">Our History</p>
                <h2 className="text-headline mb-8">
                  Founded on principle.<br />
                  <span className="text-accent italic">Built on trust.</span>
                </h2>
                <div className="accent-line mb-8" />
                <div className="space-y-6 text-body">
                  <p>
                    Manthan Law Firm was established with a clear vision—to provide
                    principled, practical, and client-focused legal solutions. Built on a
                    strong foundation of professional ethics and legal rigor, the firm
                    approaches every matter with diligence, discretion, and clarity.
                 </p>

                 <p>
                   From its inception, the firm has believed that every client deserves
                   focused attention, transparent communication, and well-reasoned legal
                   strategy. This belief has shaped the firm’s approach across diverse
                   practice areas and has earned the trust of individuals, businesses,
                   and institutions alike.
                </p>

                <p>
                  Today, Manthan Law Firm continues to uphold its core values by delivering
                  effective, solution-oriented legal services while maintaining the
                  highest standards of integrity, professionalism, and client
                  confidentiality.
                </p>

                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-primary/5 border border-border flex items-center justify-center">
                  <div className="text-center p-12">
                    <span className="text-6xl md:text-8xl font-serif text-accent">Trusted</span>
                    <p className="text-caption mt-4">Legal Advisory</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-accent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-caption mb-4">Our Values</p>
              <h2 className="text-headline mb-6">
                The principles that<br />
                <span className="text-accent italic">guide us</span>
              </h2>
              <div className="accent-line mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background p-8 md:p-10"
                >
                  <span className="text-xs text-muted-foreground mb-4 block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl mb-4">{value.title}</h3>
                  <p className="text-body text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-12 h-px bg-accent mx-auto mb-10" />
              <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                "Effective legal counsel is built on clarity, commitment, and enduring client trust."
               </blockquote>
              <cite className="not-italic">
                <span className="text-accent">Manthan Law Firm</span>
                <span className="text-primary-foreground/60 text-sm block mt-1">
                  Advocates and Legal Consultants
                </span>
              </cite>
              <div className="w-12 h-px bg-accent mx-auto mt-10" />
            </motion.div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
};

export default About;
