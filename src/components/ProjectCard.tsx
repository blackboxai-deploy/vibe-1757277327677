import Link from "next/link";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  completionDate: string;
  location: string;
  href?: string;
}

const ProjectCard = ({ title, category, description, imageUrl, completionDate, location, href }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      {/* Project Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{description}</p>
        
        {/* Project Details */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2">📅</span>
            <span>{completionDate}</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 mr-2">📍</span>
            <span>{location}</span>
          </div>
        </div>
        
        {/* View Project Link */}
        {href && (
          <Link href={href} className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group">
            View Project Details
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;