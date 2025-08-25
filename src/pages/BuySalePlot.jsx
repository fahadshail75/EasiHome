import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const BuySalePlot = () => {
  return (
    <div>
      <PageHeader
        title="Buy & Sale Plot"
        subtitle="Find Your Perfect Plot"
        description="Discover prime plots for construction with verified documentation and transparent pricing across Lucknow."
        breadcrumbs={[{ name: "Buy & Sale Plot" }]}
        primaryCTA="Browse Plots"
        secondaryCTA="Sell Your Plot"
        variant="service"
      />

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              title="Plot Inquiry"
              subtitle="Looking to buy or sell a plot? Get expert assistance and verified listings"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuySalePlot;
