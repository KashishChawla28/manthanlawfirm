import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <section className="container-narrow py-20">
          <h1 className="text-display mb-6">Legal Disclaimer</h1>
          <p className="text-body">
            The information provided on this website does not constitute
            legal advice and does not create an attorney-client relationship.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Disclaimer;
