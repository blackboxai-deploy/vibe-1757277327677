import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  href?: string;
}

const ServiceCard = ({ title, description, imageUrl, features, href }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Service Image */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Service Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-700">
              <span className="w-4 h-4 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-xs text-white">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* Action Button */}
        {href && (
          <Link href={href}>
            <Button className="w-full bg-blue-800 hover:bg-blue-900 text-white">
              Learn More
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;