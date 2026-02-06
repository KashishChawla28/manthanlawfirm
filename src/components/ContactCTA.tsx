import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-caption mb-4">Get in Touch</p>
          <h2 className="text-headline mb-6">
            Every matter begins with<br />
            <span className="text-accent italic">a conversation.</span>
          </h2>
          <div className="accent-line mx-auto mb-8" />
          <p className="text-body max-w-xl mx-auto mb-10">
            We invite you to contact us to discuss your legal needs. 
            All consultations are conducted with the utmost discretion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
            <a href="tel:+918595005005" className="btn-outline">
              +91 85950 05005
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
