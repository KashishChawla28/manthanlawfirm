import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzdH2Cpsz9mWrHQlMzGjX2h9paV7y6JqVrNOashoCnE9_IaThDJr3JMEDDNOr5ZaMdJ/exec",
      {
        method: "POST",
        body: form,
      }
    );

    const text = await res.text();

    if (text === "success") {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Error submitting form");
    }
  } catch (err) {
    console.error(err);
    alert("Error submitting form");
  } finally {
    setIsSubmitting(false);
  }
};



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              <p className="text-caption mb-4">Contact Us</p>
              <h1 className="text-display mb-6">
                We're here to<br />
                <span className="text-accent italic">assist you.</span>
              </h1>
              <div className="accent-line mx-auto mb-8" />
              <p className="text-body max-w-xl mx-auto">
                Reach out to schedule a consultation or to learn more about 
                how we can assist with your legal needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container-wide">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2 space-y-8"
              >
                <div>
                  <h2 className="text-subhead mb-6">Get in Touch</h2>
                  <div className="accent-line mb-8" />
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border">
                      <MapPin size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-sm mb-1">Address</h3>
                      <p className="text-body text-sm">
                        Chamber No. 783, Western Wing<br />
                        Tis Hazari Courts<br />
                        Delhi-110054
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-sm mb-1">Phone</h3>
                      <a href="tel:+918595005005" className="text-body text-sm hover:text-accent transition-colors">
                        +91 85950 05005
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-sm mb-1">Email</h3>
                      <a href="mailto:manthanlawfirm@gmail.com" className="text-body text-sm hover:text-accent transition-colors">
                        manthanlawfirm@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex items-center justify-center border border-border">
                      <Clock size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-sm mb-1">Office Hours</h3>
                      <p className="text-body text-sm">
                        Monday – Friday<br />
                        9:00 AM – 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>

               {/* Google Map */}
              <a
                href="https://maps.google.com/?q=Tis+Hazari+Court+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block aspect-[4/3] border border-border overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
               >
              <iframe
                title="Manthan Law Firm Location"
                src={"https://www.google.com/maps?q=Tis+Hazari+Court+Delhi&output=embed"}
                className="w-full h-full pointer-events-none"
               loading="lazy"
               />
              </a>


              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="lg:col-span-3"
              >
                <div className="bg-background p-8 md:p-12 border border-border">
                  <h2 className="text-subhead mb-2">Send an Inquiry</h2>
                  <p className="text-body text-sm mb-8">
                    Complete the form below and a member of our team will respond promptly.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent text-accent">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="font-serif text-xl mb-2">Thank You</h3>
                      <p className="text-body text-sm">
                        Your inquiry has been received. We will be in touch shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs tracking-wide uppercase mb-2 text-muted-foreground">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs tracking-wide uppercase mb-2 text-muted-foreground">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-xs tracking-wide uppercase mb-2 text-muted-foreground">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-xs tracking-wide uppercase mb-2 text-muted-foreground">
                            Subject Matter
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                          >
                            <option value="">Select a practice area</option>
                            <option value="corporate">Corporate Law</option>
                            <option value="litigation">Litigation</option>
                            <option value="estate">Estate Planning</option>
                            <option value="real-estate">Real Estate</option>
                            <option value="private-client">Private Client</option>
                            <option value="regulatory">Regulatory</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs tracking-wide uppercase mb-2 text-muted-foreground">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-transparent border border-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                        />
                      </div>

                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you acknowledge that you have read and understand our 
                        Privacy Policy. Submitting this form does not create an attorney-client relationship.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
