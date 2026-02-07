import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-headline mb-6">
              Ready to discuss<br />
              <span className="text-accent italic">your matter?</span>
            </h2>
            <p className="text-body text-primary-foreground/60 mb-8">
              We welcome the opportunity to learn about your legal needs and explore 
              how we might be of service.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center px-10 py-4 text-sm tracking-widest uppercase text-primary border border-primary-foreground/30 bg-primary-foreground transition-all duration-500 hover:bg-accent hover:text-primary hover:border-accent">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-tight">
                Manthan Law Firm
              </span>
            </Link>
            <p className="text-sm text-primary-foreground/60 max-w-sm leading-relaxed">
              Experienced legal professionals providing strategic solutions for complex and evolving legal challenges.
            </p>
          </div>

          {/* Quick Links */}
<div>
  <h4 className="text-sm tracking-widest uppercase mb-6 text-primary-foreground/40">
    Navigation
  </h4>
  <ul className="space-y-3">
    <li>
      <Link
        to="/"
        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/practice-areas"
        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
      >
        Practice Areas
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/team"
        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
      >
        Our Team
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
      >
        Contact
      </Link>
    </li>
  </ul>
</div>


          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6 text-primary-foreground/40">
              Contact
            </h4>
            <address className="not-italic space-y-3 text-sm text-primary-foreground/70">
              <p>Chamber No. 783, Western Wing<br />Tis Hazari Courts<br />Delhi-110054</p>
              <p className="pt-2">
                <a href="tel:+918595005005" className="hover:text-accent transition-colors">
                  +91 85950 05005
                </a>
              </p>
              <p>
                <a href="mailto:manthanlawfirm@gmail.com" className="hover:text-accent transition-colors">
                  manthanlawfirm@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Manthan Law Firm . All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-primary-foreground/40">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className="hover:text-accent transition-colors">
                Legal Disclaimer
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/30 max-w-3xl leading-relaxed">
            Attorney Advertising. Prior results do not guarantee a similar outcome. 
            This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
