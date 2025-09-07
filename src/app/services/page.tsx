import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Services() {
  const mainServices = [
    {
      title: "Residential Construction",
      description: "Custom homes, townhouses, and residential complexes built with precision and attention to every detail. From foundation to finishing touches, we create homes that reflect your lifestyle and dreams.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/443aac6a-7b6b-4119-9c8c-69ff7c056132.png",
      features: [
        "Custom Home Design & Build",
        "Multi-Family Housing",
        "Luxury Villa Construction",
        "Energy-Efficient Homes",
        "Smart Home Integration",
        "Outdoor Living Spaces"
      ],
      href: "/contact"
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, warehouses, and mixed-use developments designed for functionality and aesthetic appeal. We understand the unique requirements of commercial spaces.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80c49552-643e-4827-acb0-24d56355e14b.png",
      features: [
        "Office Buildings",
        "Retail & Shopping Centers",
        "Industrial Facilities",
        "Mixed-Use Developments",
        "Healthcare Facilities",
        "Educational Buildings"
      ],
      href: "/contact"
    },
    {
      title: "Architectural Design",
      description: "Innovative architectural solutions that blend creativity with functionality. Our experienced architects create designs that are both beautiful and practical for modern living.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9369b946-7a18-40d6-aca3-f75f490e5bcb.png",
      features: [
        "3D Modeling & Visualization",
        "Structural Design",
        "Space Planning",
        "Sustainable Architecture",
        "Historic Renovation Design",
        "Landscape Architecture"
      ],
      href: "/contact"
    },
    {
      title: "Interior Design",
      description: "Transform your spaces with our professional interior design services. We create functional, beautiful interiors that reflect your personal style and enhance your daily life.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/30d89f8a-e296-46b7-8cf5-bfa964ef86a6.png",
      features: [
        "Residential Interiors",
        "Commercial Space Design",
        "Kitchen & Bathroom Design",
        "Lighting Design",
        "Furniture Selection",
        "Color Consultation"
      ],
      href: "/contact"
    },
    {
      title: "Project Management",
      description: "Comprehensive project management services ensuring your construction project is completed on time, within budget, and to the highest quality standards.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4a5cc98d-1667-4686-98eb-e549e2c34013.png",
      features: [
        "Timeline Management",
        "Budget Control",
        "Quality Assurance",
        "Vendor Coordination",
        "Safety Management",
        "Regular Progress Reports"
      ],
      href: "/contact"
    },
    {
      title: "Renovation & Remodeling",
      description: "Breathe new life into existing structures with our renovation and remodeling services. From minor updates to major transformations, we handle projects of all sizes.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cef97a99-11f7-4f13-b35b-79b10a5ffcbc.png",
      features: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Basement Finishing",
        "Room Additions",
        "Exterior Renovations",
        "Historic Restorations"
      ],
      href: "/contact"
    }
  ];

  const additionalServices = [
    {
      title: "Permits & Approvals",
      description: "We handle all necessary permits and regulatory approvals to ensure your project complies with local building codes and regulations.",
      icon: "📋"
    },
    {
      title: "Site Preparation",
      description: "Complete site preparation services including excavation, grading, and utility connections for your construction project.",
      icon: "🚧"
    },
    {
      title: "Green Building",
      description: "Sustainable construction practices and green building certifications to reduce environmental impact and energy costs.",
      icon: "🌱"
    },
    {
      title: "Maintenance Services",
      description: "Post-construction maintenance and repair services to keep your property in excellent condition year-round.",
      icon: "🔧"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We start with a detailed consultation to understand your vision, requirements, and budget. Our team works with you to develop a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Approval",
      description: "Our architects and designers create detailed plans and 3D visualizations. We handle all permit applications and regulatory approvals."
    },
    {
      step: "03",
      title: "Construction Phase",
      description: "Our skilled craftsmen bring your project to life with quality materials and expert construction techniques. We maintain regular communication throughout."
    },
    {
      step: "04",
      title: "Final Inspection & Handover",
      description: "We conduct thorough quality inspections and walk-through with you to ensure everything meets our high standards before project completion."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Comprehensive construction and architectural services tailored to your needs
            </p>
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential homes to commercial complexes, we provide end-to-end construction solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting services to ensure your project's success from start to finish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure quality results and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Standards</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We maintain the highest standards in every aspect of our work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-blue-100">We source only the highest quality materials from trusted suppliers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Quality Inspections</h3>
              <p className="text-blue-100">Regular quality inspections at every phase of construction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Modern Techniques</h3>
              <p className="text-blue-100">Latest construction techniques and technology for superior results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss your construction or architectural needs. We'll provide a free consultation and detailed quote.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Free Consultation</div>
                    <div className="text-gray-600">No obligation initial consultation</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Detailed Quote</div>
                    <div className="text-gray-600">Transparent pricing with no hidden fees</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Quick Response</div>
                    <div className="text-gray-600">We'll get back to you within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}