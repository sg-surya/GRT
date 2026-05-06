import { MonitorPlay, Microscope, Bus, BookOpen, ShieldCheck } from 'lucide-react';

export function Facilities() {
  const facilityList = [
    {
      title: "Smart Classrooms",
      description: "Our classrooms are equipped with modern digital boards and audio-visual aids to make conceptual learning interactive and engaging.",
      icon: <MonitorPlay size={32} />
    },
    {
      title: "Science Laboratories",
      description: "Well-equipped Physics, Chemistry, and Biology labs provide students with hands-on experience and a safe environment for practical experiments.",
      icon: <Microscope size={32} />
    },
    {
      title: "School Library",
      description: "A resourceful library stocked with academic books, reference materials, fiction, and periodicals to cultivate a strong reading habit.",
      icon: <BookOpen size={32} />
    },
    {
      title: "Transport Fleet",
      description: "We operate a dedicated fleet of school buses covering Rohta Road and surrounding Meerut areas, ensuring safe and reliable transit for students.",
      icon: <Bus size={32} />
    },
    {
      title: "Campus Security",
      description: "Safety is our priority. The campus is monitored via CCTV cameras, strictly controlled access points, and dedicated security personnel.",
      icon: <ShieldCheck size={32} />
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Campus Facilities</h1>
          <p className="text-xl text-gray-300 max-w-2xl">A secure and well-equipped environment for optimal learning.</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-brand-navy mb-6">Designed for Growth</h2>
          <p className="text-brand-gray max-w-3xl mx-auto leading-relaxed">
            GRT Public School provides an infrastructure that supports both academic excellence and physical well-being. From digital learning tools to expansive campus grounds, our facilities are continuously upgraded to meet modern educational standards.
          </p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-16 bg-brand-light border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityList.map((facility, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 bg-brand-navy/5 text-brand-navy rounded-xl flex items-center justify-center mb-6">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-brand-navy mb-3">{facility.title}</h3>
                <p className="text-brand-gray text-sm leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-brand-navy mb-12 text-center">Campus Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop" alt="Campus Building" className="w-full h-48 object-cover rounded-lg shadow-sm" />
            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop" alt="Students in class" className="w-full h-48 object-cover rounded-lg shadow-sm" />
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop" alt="Library" className="w-full h-48 object-cover rounded-lg shadow-sm" />
            <img src="https://images.unsplash.com/photo-1519331580228-569d6756bb48?q=80&w=600&auto=format&fit=crop" alt="Computer Lab" className="w-full h-48 object-cover rounded-lg shadow-sm" />
          </div>
        </div>
      </section>

    </div>
  );
}
