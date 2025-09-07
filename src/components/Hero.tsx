import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac262440-327b-4a33-ae13-084de2dad90f.png" 
          alt="Modern construction site with cranes and buildings under construction"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building Your
            <span className="block text-blue-400">Dreams Into Reality</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Professional construction and architectural services with over 15 years of excellence. 
            From concept to completion, we deliver quality that stands the test of time.
          </p>
          
          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 text-lg">
            <div className="flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-sm">✓</span>
              Licensed & Insured
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-sm">✓</span>
              15+ Years Experience
            </div>
            <div className="flex items-center">
              <span className="w-6 h-6 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-sm">✓</span>
              Quality Guaranteed
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105">
                Get Free Quote
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="relative mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;