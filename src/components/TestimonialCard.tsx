interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
  projectType: string;
}

const TestimonialCard = ({ name, role, company, content, rating, imageUrl, projectType }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ⭐
          </span>
        ))}
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      </div>

      {/* Testimonial Content */}
      <div className="flex-grow mb-6">
        <p className="text-gray-700 leading-relaxed italic">
          "{content}"
        </p>
      </div>

      {/* Client Information */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm text-gray-600">{company}</div>
          <div className="text-xs text-blue-600 font-medium mt-1">{projectType}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;