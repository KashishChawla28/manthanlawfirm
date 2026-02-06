import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamPreview from "@/components/TeamPreview";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    if (visited) {
      setShowSplash(false);
      setHasVisited(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("hasVisited", "true");
    setShowSplash(false);
    setHasVisited(true);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && !hasVisited && (
          <SplashScreen key="splash" onEnter={handleEnter} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(!showSplash || hasVisited) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Navigation />
            <main>
              <Hero />
              <PracticeAreas />
              <WhyChooseUs />
              <TeamPreview />
              <ContactCTA />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
