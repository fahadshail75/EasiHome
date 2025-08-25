import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const Painting = () => {
  return (
    <div>
      <PageHeader
        title="Professional Painting Services"
        subtitle="Premium Quality Painting Solutions"
        description="Interior and exterior painting with premium materials, safety standards, and brand partnerships."
        breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Painting" }]}
        primaryCTA="Get Painting Quote"
        secondaryCTA="Color Consultation"
        variant="service"
      />

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              title="Get Your Painting Quote"
              subtitle="Professional painting services with quality materials and expert application"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Painting;
