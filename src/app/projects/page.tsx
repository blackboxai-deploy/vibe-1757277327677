"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Residential", "Commercial", "Industrial", "Renovation"];

  const projects = [
    {
      title: "Luxury Villa Complex",
      category: "Residential",
      description: "A stunning 5-bedroom luxury villa featuring modern architecture, premium finishes, sustainable design elements, and a beautiful landscape garden with swimming pool.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/beb92f2b-9e0b-4674-ad0f-7422742df41d.png",
      completionDate: "December 2023",
      location: "Beverly Hills, CA",
      href: "#"
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "A 12-story corporate headquarters with state-of-the-art facilities, energy-efficient systems, modern workspace design, and panoramic city views.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/255816ea-4158-43bd-961f-e281647c9fb2.png",
      completionDate: "October 2023",
      location: "Downtown LA, CA",
      href: "#"
    },
    {
      title: "Shopping Center Renovation",
      category: "Renovation",
      description: "Complete renovation of a 200,000 sq ft shopping center with modern retail spaces, improved customer experience, and enhanced energy efficiency systems.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0cb370d0-1132-46f5-a324-9b7f237693d5.png",
      completionDate: "August 2023",
      location: "Orange County, CA",
      href: "#"
    },
    {
      title: "Manufacturing Facility",
      category: "Industrial",
      description: "A 150,000 sq ft state-of-the-art manufacturing facility with modern production lines, quality control systems, and worker-friendly environments.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/94a8d117-b657-4491-a661-3a933d9323cc.png",
      completionDate: "July 2023",
      location: "San Bernardino, CA",
      href: "#"
    },
    {
      title: "Residential Community",
      category: "Residential",
      description: "A 50-unit residential community featuring townhouses and apartments with modern amenities, community spaces, and sustainable design principles.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bbf2558e-7e50-47ed-a3a8-4f36a06e7854.png",
      completionDate: "June 2023",
      location: "Irvine, CA",
      href: "#"
    },
    {
      title: "Medical Center",
      category: "Commercial",
      description: "A comprehensive medical center with specialized treatment rooms, advanced medical equipment infrastructure, and patient-focused design elements.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/feebc74c-00eb-4bc6-aa2f-309aeb219edc.png",
      completionDate: "May 2023",
      location: "Newport Beach, CA",
      href: "#"
    },
    {
      title: "Historic Building Restoration",
      category: "Renovation",
      description: "Careful restoration of a 1920s historic building preserving original architecture while adding modern amenities and safety features.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/154937b3-2f0e-48cb-8539-d3e08e09432d.png",
      completionDate: "April 2023",
      location: "Pasadena, CA",
      href: "#"
    },
    {
      title: "Warehouse & Distribution Center",
      category: "Industrial",
      description: "A 300,000 sq ft logistics and distribution center with automated systems, efficient loading docks, and advanced inventory management infrastructure.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/748c499e-5b25-4665-a016-2a7499dd3d83.png",
      completionDate: "March 2023",
      location: "Riverside, CA",
      href: "#"
    },
    {
      title: "Luxury Condominiums",
      category: "Residential",
      description: "A 20-story luxury condominium tower with premium amenities, panoramic views, concierge services, and high-end finishes throughout.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/aaa4dc04-337a-4edc-8f69-9c258950f72a.png",
      completionDate: "February 2023",
      location: "Santa Monica, CA",
      href: "#"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Explore our portfolio of successful construction and architectural projects
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={`px-6 py-2 ${
                  activeCategory === category
                    ? "bg-blue-800 text-white hover:bg-blue-900"
                    : "text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeCategory === "All" ? "All Projects" : `${activeCategory} Projects`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} in this category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Project Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we ensure every project exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Planning & Design</h3>
              <p className="text-gray-600">Detailed project planning with 3D visualization and comprehensive design documentation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Construction</h3>
              <p className="text-gray-600">Expert craftsmanship using premium materials and latest construction techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Team Collaboration</h3>
              <p className="text-gray-600">Close collaboration between architects, engineers, and construction teams</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Final Delivery</h3>
              <p className="text-gray-600">Thorough quality inspection and client walkthrough before project handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your construction or architectural needs and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
              <a href="/contact">Start Your Project</a>
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}