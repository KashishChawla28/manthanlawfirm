import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <section className="container-narrow py-20">
          <h1 className="text-display mb-6">Terms of Use</h1>
          <p className="text-body">
            By accessing this website, you agree to comply with the terms and
            conditions governing its use.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Terms;
