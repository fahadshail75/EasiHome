import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Renovation = () => {
  return (
    <div>
      <PageHeader
        title="Home Renovation Services"
        subtitle="Transform Your Existing Space"
        description="Kitchen, bathroom, full home renovation with modern design solutions and expert craftsmanship."
        breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Renovation" }]}
        primaryCTA="Get Renovation Quote"
        secondaryCTA="View Gallery"
        variant="service"
      />

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              title="Plan Your Renovation"
              subtitle="Share your renovation ideas and get expert guidance with transparent pricing"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Renovation;
