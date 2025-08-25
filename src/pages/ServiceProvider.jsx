import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const ServiceProvider = () => {
  return (
    <div>
      <PageHeader
        title="Join as Service Provider"
        subtitle="Partner with EasiHome"
        description="Connect with verified professionals including masons, electricians, plumbers, painters, and carpenters."
        breadcrumbs={[{ name: "Service Provider" }]}
        primaryCTA="Join Our Network"
        secondaryCTA="Learn More"
        variant="service"
      />

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              title="Become a Service Provider"
              subtitle="Join our network of verified professionals and grow your business with EasiHome"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceProvider;
