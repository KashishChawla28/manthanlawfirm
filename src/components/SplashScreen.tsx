import { motion } from "framer-motion";

interface SplashScreenProps {
  onEnter: () => void;
}

const SplashScreen = ({ onEnter }: SplashScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-display text-primary-foreground mb-6">
            Sterling & Associates
          </h1>
          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-primary-foreground/70 text-sm tracking-widest uppercase mb-16">
            Attorneys at Law
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8"
        >
          <button
            onClick={onEnter}
            className="group relative inline-flex items-center justify-center px-10 py-4 text-sm tracking-widest uppercase text-primary-foreground border border-primary-foreground/30 bg-transparent transition-all duration-500 hover:border-accent hover:text-accent"
          >
            Enter Website
            <span className="absolute inset-0 bg-primary-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>

          <p className="text-primary-foreground/40 text-xs max-w-md mx-auto leading-relaxed">
            This website is for informational purposes only and does not constitute legal advice. 
            Attorney-client relationships are only formed through written engagement agreements.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
