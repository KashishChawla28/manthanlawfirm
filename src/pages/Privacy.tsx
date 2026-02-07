import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <section className="container-narrow py-20">
          <h1 className="text-display mb-6">Privacy Policy</h1>
          <p className="text-body">
            This Privacy Policy explains how Manthan Law Firm collects, uses,
            and protects your personal information when you use this website.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
