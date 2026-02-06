import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const practices = [
  {
    title: "Corporate Law",
    description: "Strategic counsel for complex business transactions, mergers, and corporate governance matters.",
  },
  {
    title: "Litigation",
    description: "Experienced trial advocacy in commercial disputes, securities litigation, and appellate practice.",
  },
  {
    title: "Estate Planning",
    description: "Sophisticated wealth transfer strategies and fiduciary services for high-net-worth individuals.",
  },
  {
    title: "Real Estate",
    description: "Comprehensive representation in commercial real estate transactions and development projects.",
  },
  {
    title: "Private Client",
    description: "Discrete handling of family matters, trusts, and personal legal affairs with utmost confidentiality.",
  },
  {
    title: "Regulatory",
    description: "Navigation of regulatory frameworks and compliance requirements across industries.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const PracticeAreas = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-caption mb-4">Our Expertise</p>
          <h2 className="text-headline mb-6">Practice Areas</h2>
          <div className="accent-line mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              variants={itemVariants}
              className="group bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-secondary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs text-muted-foreground font-sans tracking-wide">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-subhead mb-4 group-hover:text-accent transition-colors duration-300">
                {practice.title}
              </h3>
              <p className="text-body text-sm mb-6">
                {practice.description}
              </p>
              <Link
                to="/practice-areas"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group/link"
              >
                <span>Learn more</span>
                <ArrowRight 
                  size={14} 
                  className="transition-transform duration-300 group-hover/link:translate-x-1" 
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
