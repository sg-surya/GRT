import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function News() {
  const newsItems = [
    {
      id: 1,
      title: "Admissions Open for 2026-27 Academic Session",
      date: "March 15, 2026",
      excerpt: "We are now accepting applications for Pre-Nursery to Class X. Explore our curriculum and state-of-the-art facilities.",
      category: "Announcements"
    },
    {
      id: 2,
      title: "Annual Science & Arts Exhibition Scheduled",
      date: "April 10, 2026",
      excerpt: "Students from all classes will showcase their innovative science models and creative artwork. Parents are cordially invited.",
      category: "Events"
    },
    {
      id: 3,
      title: "Celebrating Labour Day at Campus",
      date: "May 1, 2026",
      excerpt: "A special assembly honoring the hard work of our support staff. Students presented cultural performances to express gratitude.",
      category: "Celebrations"
    },
    {
      id: 4,
      title: "Holi Celebrations bring colors of joy",
      date: "March 5, 2026",
      excerpt: "Students and teachers celebrated the festival of colors with eco-friendly colors and traditional sweets on the campus grounds.",
      category: "Celebrations"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">News & Events</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Stay updated with the latest happenings at GRT Public School.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {newsItems.map((item) => (
                <div key={item.id} className="bg-white border text-left border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand-gold/10 text-brand-navy font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} /> {item.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-brand-navy mb-3">
                    <Link to="#" className="hover:text-brand-gold transition-colors">{item.title}</Link>
                  </h2>
                  <p className="text-brand-gray leading-relaxed mb-6">
                    {item.excerpt}
                  </p>
                  <Link to="#" className="inline-flex items-center gap-1 text-sm font-bold text-brand-navy hover:text-brand-gold transition-colors">
                    Read Full Story <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold font-heading text-brand-navy mb-6 border-b border-gray-300 pb-2">Upcoming Events</h3>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="bg-white border-2 border-brand-navy/10 rounded-lg text-center min-w-[60px] overflow-hidden flex flex-col">
                    <div className="bg-brand-navy text-white text-xs font-bold py-1">APR</div>
                    <div className="text-brand-navy font-black text-xl py-2">10</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Science Exhibition</h4>
                    <p className="text-xs text-brand-gray">School Campus</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white border-2 border-brand-navy/10 rounded-lg text-center min-w-[60px] overflow-hidden flex flex-col">
                    <div className="bg-brand-navy text-white text-xs font-bold py-1">MAY</div>
                    <div className="text-brand-navy font-black text-xl py-2">01</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Labour Day Assembly</h4>
                    <p className="text-xs text-brand-gray">Main Auditorium</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white border-2 border-brand-navy/10 rounded-lg text-center min-w-[60px] overflow-hidden flex flex-col">
                    <div className="bg-brand-navy text-white text-xs font-bold py-1">MAY</div>
                    <div className="text-brand-navy font-black text-xl py-2">15</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm mb-1">Summer Break Begins</h4>
                    <p className="text-xs text-brand-gray">All Classes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
