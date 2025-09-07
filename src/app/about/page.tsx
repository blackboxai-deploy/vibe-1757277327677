import TestimonialCard from "@/components/TestimonialCard";

export default function About() {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      description: "With over 20 years in construction and architecture, Rajesh leads our team with vision and expertise.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e404642-12e8-4979-abb2-051a500a432d.png",
      specialties: ["Project Management", "Strategic Planning", "Client Relations"]
    },
    {
      name: "Priya Patel",
      role: "Chief Architect",
      description: "Award-winning architect specializing in sustainable design and innovative architectural solutions.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/20432812-175e-4de5-85f5-98bbe3c90d9f.png",
      specialties: ["Sustainable Design", "3D Modeling", "Residential Architecture"]
    },
    {
      name: "Kumar Singh",
      role: "Construction Manager",
      description: "Expert in large-scale construction projects with a focus on quality control and safety management.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13e5689f-31b2-49b6-ab2e-39d32cea6255.png",
      specialties: ["Quality Control", "Safety Management", "Team Leadership"]
    },
    {
      name: "Anjali Verma",
      role: "Interior Designer",
      description: "Creative interior designer transforming spaces with modern aesthetics and functional design.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/06dc82e7-0197-4c0e-a490-d8505d4a4961.png",
      specialties: ["Modern Interiors", "Space Planning", "Color Coordination"]
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Excellence in Construction Award",
      description: "Recognized by the State Construction Board for outstanding quality and innovation."
    },
    {
      year: "2022",
      title: "Green Building Certification",
      description: "Achieved LEED Gold certification for sustainable construction practices."
    },
    {
      year: "2021",
      title: "Best Commercial Project",
      description: "Won the Regional Architecture Award for our downtown office complex."
    },
    {
      year: "2020",
      title: "Safety Excellence Award",
      description: "Recognized for maintaining the highest safety standards across all projects."
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Real Estate Developer",
      company: "Thompson Properties",
      content: "Durga Construction has been our go-to partner for over 5 years. Their professionalism and quality are unmatched in the industry.",
      rating: 5,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9e6b69d0-3967-41c4-b3ec-5b546a28deb9.png",
      projectType: "Multiple Projects"
    },
    {
      name: "Lisa Chang",
      role: "Homeowner",
      company: "Private Client",
      content: "They turned our vision into reality. The attention to detail and communication throughout the process was exceptional.",
      rating: 5,
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ceb81a77-3cb7-4560-a552-cabf0a4b9efc.png",
      projectType: "Custom Home"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Durga Construction</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Building excellence for over 15 years with a commitment to quality, innovation, and client satisfaction
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2009 by Rajesh Sharma, Durga Construction & Architect began as a small family business 
                with a simple mission: to build quality structures that stand the test of time. What started as a 
                local construction company has grown into a full-service architecture and construction firm.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Over the years, we've completed more than 500 projects, ranging from custom homes to large commercial 
                complexes. Our success is built on strong relationships with clients, suppliers, and the community we serve.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to be a trusted name in construction and architecture, known for our innovative 
                designs, quality craftsmanship, and commitment to delivering projects on time and within budget.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1e7381a0-5603-4367-93f9-7585a8481229.png" 
                alt="Durga Construction team at construction site"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional construction and architectural services that exceed client expectations 
                while maintaining the highest standards of quality, safety, and sustainability. We strive to 
                build lasting relationships based on trust, transparency, and professional excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading construction and architecture firm in our region, recognized for innovation, 
                sustainability, and client satisfaction. We envision a future where every structure we build 
                contributes positively to the community and environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Excellence</h3>
              <p className="text-gray-600">Unwavering commitment to superior craftsmanship and materials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">Honest communication and transparent business practices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Embracing new technologies and creative design solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety First</h3>
              <p className="text-gray-600">Maintaining the highest safety standards on every project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The experienced professionals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.description}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-2">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating our achievements and industry recognition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{achievement.year}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}