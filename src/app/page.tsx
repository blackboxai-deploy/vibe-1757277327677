import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential complexes built with precision and attention to detail.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df256d17-ad27-4cb5-a089-538aa376ccfb.png",
      features: ["Custom Home Design", "Quality Materials", "Timely Completion", "Post-Construction Support"],
      href: "/services"
    },
    {
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetics.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c12cd70a-35bb-4296-8ae4-a5234b59e846.png",
      features: ["Modern Office Spaces", "Retail Construction", "Industrial Buildings", "Project Management"],
      href: "/services"
    },
    {
      title: "Architectural Design",
      description: "Innovative architectural solutions that blend creativity with functionality for stunning results.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9f1837a9-8830-4a9f-a3a6-9e4bc0f17d03.png",
      features: ["3D Modeling", "Structural Design", "Interior Planning", "Sustainable Solutions"],
      href: "/services"
    }
  ];

  const featuredProjects = [
    {
      title: "Luxury Villa Complex",
      category: "Residential",
      description: "A stunning 5-bedroom luxury villa featuring modern architecture, premium finishes, and sustainable design elements.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c5bc70d2-9c70-4739-8d82-e49d74c186a5.png",
      completionDate: "December 2023",
      location: "Beverly Hills, CA",
      href: "/projects"
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "A 12-story corporate headquarters with state-of-the-art facilities, energy-efficient systems, and modern workspace design.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8d76d521-527f-4cb4-adcd-f7d56c6fc858.png",
      completionDate: "October 2023",
      location: "Downtown LA, CA",
      href: "/projects"
    },
    {
      title: "Shopping Center Renovation",
      category: "Commercial",
      description: "Complete renovation of a 200,000 sq ft shopping center with modern retail spaces and improved customer experience.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69bd2684-9322-4fc5-aef1-34049cc791a7.png",
      completionDate: "August 2023",
      location: "Orange County, CA",
      href: "/projects"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      company: "Private Client",
      content: "Durga Construction exceeded our expectations! They built our dream home with incredible attention to detail and finished ahead of schedule.",
      rating: 5,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/31fa3d69-02bd-4d3e-a73b-145f15e4091c.png",
      projectType: "Custom Home"
    },
    {
      name: "Michael Chen",
      role: "Property Developer",
      company: "Chen Development Group",
      content: "Professional, reliable, and delivered exceptional quality. We've worked on multiple projects together and they never disappoint.",
      rating: 5,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ae3a0e9f-2c2f-4a62-a6fe-6a3c706cbe9e.png",
      projectType: "Commercial Complex"
    },
    {
      name: "Emily Rodriguez",
      role: "Business Owner",
      company: "Rodriguez Enterprises",
      content: "The team transformed our outdated office space into a modern, functional workplace. The project was completed on time and within budget.",
      rating: 5,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/11e45786-7969-4018-9920-8a05eac42480.png",
      projectType: "Office Renovation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive construction and architectural services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects that showcase our commitment to quality and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 text-lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Durga Construction?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We combine years of experience with innovative techniques to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🏗️</div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-blue-100">Licensed professionals with 15+ years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">⚡</div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-blue-100">98% of projects completed on or ahead of schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-blue-100">Rigorous quality control at every project phase</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">💰</div>
              <h3 className="text-xl font-semibold mb-2">Value Pricing</h3>
              <p className="text-blue-100">Competitive rates with transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today for a free consultation and quote. We'll help bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email Us</div>
                    <div className="text-gray-600">info@durgaconstruction.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Us</div>
                    <div className="text-gray-600">123 Construction Ave, Builder City, BC 12345</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}