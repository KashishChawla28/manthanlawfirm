import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const team = [
  {
    name: "Subhash Chugh",
    role: "Founder & Proprietor",
    specialty: "Litigation/Criminal/Civil",
    image: "/subhashchugh.jpeg",
  },
  {
    name: "Ravi Verma",
    role: "Senior Associate",
    specialty: "Litigation/Corporate",
    image: "/raviverma.jpeg",
  },
  {
    name: "Keshav Ahuja",
    role: "Senior Associate",
    specialty: "Litigation/Taxation/Corporate",
    image: "/keshavahuja.jpeg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const TeamPreview = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20"
        >
          <div>
            <p className="text-caption mb-4 text-primary-foreground/60">Our People</p>
            <h2 className="text-headline">
              Meet the<br />
              <span className="text-accent italic">Partners</span>
            </h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-2 mt-6 md:mt-0 text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300 group"
          >
            <span className="tracking-wide uppercase">View All Team</span>
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 md:gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl group-hover:text-accent transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-foreground/60">
                  {member.role}
                </p>
                <p className="text-xs text-accent tracking-wide">
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
