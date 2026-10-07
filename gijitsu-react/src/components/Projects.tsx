import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Mark Tours – Tourism Agency Website",
      description: "A modern tourism platform helping travelers find hotel deals and book services easily. Focuses on explore-to-book user journeys.",
      image: "/images/marktours.png",
      link: "https://www.marktours.net/index.php",
      badge: "Web Development",
      badgeColor: "bg-primary"
    },
    {
      title: "Ceylon Produce Exports – E-commerce",
      description: "A clean shopping experience for export products, featuring full database integration and streamlined product listings.",
      image: "/images/cpe.png",
      link: "https://ceylonproduce.com/",
      badge: "E-commerce",
      badgeColor: "bg-green-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Our <span className="text-primary">Projects</span></h2>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 items-center bg-secondary rounded-3xl overflow-hidden border border-gray-100 transition-all hover:shadow-lg ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              <div className="w-full md:w-5/12 overflow-hidden h-64 md:h-80 relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                    Visit Site <ExternalLink size={18} />
                  </span>
                </a>
              </div>
              
              <div className="w-full md:w-7/12 p-8 md:p-12">
                <span className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold mb-4 ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <h4 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
