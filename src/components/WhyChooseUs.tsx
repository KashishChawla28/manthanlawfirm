import { motion } from "framer-motion";

const values = [
  {
    number: "35+",
    label: "Years of Excellence",
    description: "Three decades of distinguished legal practice and trusted client relationships.",
  },
  {
    number: "500+",
    label: "Matters Resolved",
    description: "Successfully navigating complex legal challenges across diverse practice areas.",
  },
  {
    number: "98%",
    label: "Client Retention",
    description: "Enduring partnerships built on results, discretion, and unwavering commitment.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-caption mb-4">Why Choose Us</p>
            <h2 className="text-headline mb-8">
              A Legacy of<br />
              <span className="text-accent italic">Principled Practice</span>
            </h2>
            <div className="accent-line mb-8" />
            <p className="text-body mb-6">
              At Sterling & Associates, we believe that exceptional legal counsel requires 
              more than technical expertise. It demands an unwavering commitment to our 
              clients' interests, the wisdom that comes from experience, and the integrity 
              to always do what is right.
            </p>
            <p className="text-body mb-8">
              Our attorneys bring a rare combination of intellectual rigor, practical judgment, 
              and genuine care to every matter we handle. We are trusted advisors first, 
              advocates second—and we take both roles seriously.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-border" />
              <p className="text-sm text-muted-foreground italic font-serif">
                "Excellence in service of justice."
              </p>
            </div>
          </motion.div>

          {/* Right column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.6 }}
                className="group p-8 border border-border transition-colors duration-500 hover:border-accent/30 hover:bg-secondary/20"
              >
                <div className="flex items-start gap-6">
                  <span className="text-5xl md:text-6xl font-serif text-accent">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-serif mb-2 group-hover:text-accent transition-colors">
                      {value.label}
                    </h3>
                    <p className="text-body text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
