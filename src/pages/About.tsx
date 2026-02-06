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
                    Sterling & Associates was founded in 1987 by Eleanor Sterling, 
                    a visionary attorney who believed that exceptional legal counsel 
                    required more than technical expertise—it demanded an unwavering 
                    commitment to clients' interests and the wisdom that comes from 
                    deep experience.
                  </p>
                  <p>
                    From our founding, we have held to the conviction that every 
                    client deserves the full attention and resources of our firm, 
                    regardless of the size of their matter. This principle has 
                    guided our growth from a boutique practice to a distinguished 
                    firm serving clients across the nation.
                  </p>
                  <p>
                    Today, Sterling & Associates continues the tradition established 
                    by our founder: providing sophisticated, client-centered legal 
                    services with the integrity and discretion that have defined 
                    our practice for over three decades.
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
                    <span className="text-6xl md:text-8xl font-serif text-accent">1987</span>
                    <p className="text-caption mt-4">Year Established</p>
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
                "The measure of a firm is not found in its wins, 
                but in the trust its clients place in it, 
                year after year."
              </blockquote>
              <cite className="not-italic">
                <span className="text-accent">Eleanor Sterling</span>
                <span className="text-primary-foreground/60 text-sm block mt-1">
                  Founding Partner
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
