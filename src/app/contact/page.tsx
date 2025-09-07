import ContactForm from "@/components/ContactForm";

export default function Contact() {
  const contactInfo = [
    {
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Monday - Friday: 8:00 AM - 6:00 PM",
      icon: "📞"
    },
    {
      title: "Email Us",
      content: "info@durgaconstruction.com",
      description: "We'll respond within 24 hours",
      icon: "✉️"
    },
    {
      title: "Visit Our Office",
      content: "123 Construction Avenue",
      description: "Builder City, BC 12345",
      icon: "📍"
    },
    {
      title: "Emergency Contact",
      content: "+1 (555) 987-6543",
      description: "24/7 emergency support",
      icon: "🚨"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Ready to start your construction or architectural project? Get in touch with our team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us for your construction and architectural needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Office Information */}
            <div className="space-y-8">
              {/* Office Details */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      123 Construction Avenue<br />
                      Builder City, BC 12345<br />
                      United States
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Office Hours</h4>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-600">{schedule.day}</span>
                          <span className="text-gray-900 font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Contact</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Phone:</span> +1 (555) 123-4567
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Email:</span> info@durgaconstruction.com
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Fax:</span> +1 (555) 123-4568
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8cd11e04-5ace-449a-88f6-a6dafcd70794.png" 
                    alt="Office location map with nearby landmarks and directions"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Conveniently located in the heart of Builder City with easy access to major highways and public transportation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Contact Durga Construction?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When you reach out to us, you're getting more than just a construction company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-600">We respond to all inquiries within 24 hours, often much sooner. Your time is valuable to us.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Consultation</h3>
              <p className="text-gray-600">Get professional advice from our experienced team of architects and construction experts.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Detailed Quotes</h3>
              <p className="text-gray-600">Receive comprehensive, transparent quotes with no hidden fees or surprise costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our construction and architectural services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">Project timelines vary based on size and complexity. Residential projects typically take 3-8 months, while commercial projects can range from 6-18 months. We provide detailed timelines during consultation.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you handle permits and approvals?</h3>
              <p className="text-gray-600">Yes, we handle all necessary permits and regulatory approvals. Our team is experienced with local building codes and will ensure your project complies with all requirements.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's included in your quotes?</h3>
              <p className="text-gray-600">Our quotes include materials, labor, permits, and project management. We provide detailed breakdowns so you know exactly what you're paying for with no hidden costs.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer warranties?</h3>
              <p className="text-gray-600">Yes, we provide comprehensive warranties on all our work. Structural work comes with a 10-year warranty, while finishes and fixtures are covered for 2-5 years depending on the item.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-900 mb-4">Emergency Contact</h2>
            <p className="text-red-700 mb-6">
              For urgent construction issues or emergencies, call our 24/7 emergency line
            </p>
            <div className="flex items-center justify-center">
              <span className="text-red-600 text-2xl mr-3">🚨</span>
              <span className="text-2xl font-bold text-red-900">+1 (555) 987-6543</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}