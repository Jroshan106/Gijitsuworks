import { CheckCircle } from 'lucide-react';

export default function About() {
  const focuses = [
    "Clean & Modern Code",
    "Fast & Functional Design",
    "Professional User Experience"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About <span className="text-primary">Gijitsu Works</span></h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Gijitsu Works is a small and passionate web development team founded by three developers who enjoy building modern and reliable websites. We focus on creating clean, responsive, and user-friendly web solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We handle the full process—from design to development—to ensure every website we build is fast, functional, and visually appealing. Our vision is to grow into a trusted development brand through modern technology and creative design.
            </p>
          </div>
          
          <div className="lg:w-5/12 w-full bg-secondary p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold mb-6 text-gray-900">Our Focus</h4>
            <ul className="space-y-4">
              {focuses.map((focus, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-primary w-6 h-6 flex-shrink-0" />
                  <span className="font-medium">{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
