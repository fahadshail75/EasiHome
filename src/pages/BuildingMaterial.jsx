import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

const BuildingMaterial = () => {
  return (
    <div>
      <PageHeader
        title="Quality Building Materials"
        subtitle="Trusted Suppliers & Premium Materials"
        description="Wide range of construction materials from verified suppliers with quality assurance and competitive pricing."
        breadcrumbs={[{ name: "Services", href: "/#services" }, { name: "Building Material" }]}
        primaryCTA="Browse Catalog"
        secondaryCTA="Get Quote"
        variant="service"
      />

      <section className="section bg-surface-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              title="Material Requirements"
              subtitle="Tell us your material needs and get competitive quotes from trusted suppliers"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuildingMaterial;
