import { ArrowRight, BookOpen, FlaskConical, Users, Trophy, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-brand-navy">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.35 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop" 
            alt="GRT Public School campus building" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent z-0"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1.5 px-4 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-brand-gold text-sm font-bold uppercase tracking-widest shadow-sm">
              Admissions Open 2026-27
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold font-heading text-white mb-6 leading-tight drop-shadow-lg"
          >
            Your Child’s Future <br/><span className="text-brand-gold">Begins Here</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow font-medium"
          >
            Learn. Lead. Succeed. Providing excellence in CBSE-affiliated education on Rohta Road, Meerut.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link to="/admissions" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-xl border border-brand-gold hover:border-white">
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link to="/about" className="bg-brand-navy/60 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-brand-navy hover:-translate-y-1 transition-all shadow-xl">
              Discover Our School
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-brand-light py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-heading font-bold text-3xl text-brand-navy mb-1">CBSE</div>
            <div className="text-sm text-brand-gray font-semibold uppercase tracking-wider">Affiliated</div>
          </div>
          <div>
            <div className="font-heading font-bold text-3xl text-brand-navy mb-1">English</div>
            <div className="text-sm text-brand-gray font-semibold uppercase tracking-wider">Medium</div>
          </div>
          <div>
            <div className="font-heading font-bold text-3xl text-brand-navy mb-1">Pre-Nur to X</div>
            <div className="text-sm text-brand-gray font-semibold uppercase tracking-wider">Classes</div>
          </div>
          <div>
            <div className="font-heading font-bold text-3xl text-brand-navy mb-1">+91 70789</div>
            <div className="text-sm text-brand-gray font-semibold uppercase tracking-wider">Contact Us</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">Welcome to GRT</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy mb-6">Excellence in Education since 2004</h3>
            <p className="text-brand-gray leading-relaxed mb-6">
              Located peacefully on Rohta Road, Meerut, GRT Public School is dedicated to fostering a safe, inspiring, and engaging learning environment. We blend traditional values with modern teaching methodologies to nurture critical thinking and creativity.
            </p>
            <p className="text-brand-gray leading-relaxed mb-8">
              With our experienced faculty, smart classrooms, and a strong emphasis on holistic development, we ensure every child is prepared to meet the challenges of tomorrow. 
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-brand-gold">
              Read Our Story <ArrowRight size={18} />
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="Students learning" className="rounded-lg shadow-md w-full h-64 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1000&auto=format&fit=crop" alt="School library" className="rounded-lg shadow-md w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Pillars / Facilities Preview */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-brand-navy">Discover the GRT Difference</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 text-brand-navy">
                <BookOpen size={28} />
              </div>
              <h4 className="text-xl font-bold font-heading text-brand-navy mb-3">CBSE Curriculum</h4>
              <p className="text-brand-gray text-sm leading-relaxed">Rigorous, well-structured CBSE syllabus designed to promote conceptual clarity and academic excellence.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 text-brand-navy">
                <FlaskConical size={28} />
              </div>
              <h4 className="text-xl font-bold font-heading text-brand-navy mb-3">Modern Labs</h4>
              <p className="text-brand-gray text-sm leading-relaxed">State-of-the-art Science and Computer labs encouraging hands-on learning and practical exploration.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 text-brand-navy">
                <Users size={28} />
              </div>
              <h4 className="text-xl font-bold font-heading text-brand-navy mb-3">Caring Faculty</h4>
              <p className="text-brand-gray text-sm leading-relaxed">Highly qualified, patient, and dedicated teachers committed to every student's personal growth.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-brand-navy/5 rounded-lg flex items-center justify-center mb-6 text-brand-navy">
                <Trophy size={28} />
              </div>
              <h4 className="text-xl font-bold font-heading text-brand-navy mb-3">Holistic Growth</h4>
              <p className="text-brand-gray text-sm leading-relaxed">Focus on sports, arts, and extracurriculars to build confident, well-rounded individuals.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/facilities" className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-brand-gold hover:text-brand-navy transition-colors">
              Explore All Facilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial / Reputation */}
      <section className="py-20 bg-brand-navy text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <svg className="w-12 h-12 text-brand-gold mx-auto mb-8 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h3 className="text-2xl md:text-4xl font-heading mb-8 font-medium leading-relaxed">
              "My child enjoys going to this school. The teachers are very polite and patient. Fully satisfied with the safe environment and academic progress."
            </h3>
            <div className="font-bold text-brand-gold uppercase tracking-widest text-sm">A Happy Parent</div>
            <div className="text-gray-400 mt-2 text-sm flex items-center justify-center gap-2">
              <span className="flex text-brand-gold">★★★★★</span> (4.7/5 Rating)
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-b border-gray-100">
         <div className="max-w-5xl mx-auto px-4 bg-brand-light rounded-2xl p-12 text-center border border-gray-200">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-4">Admissions Open for 2026-27</h2>
            <p className="text-brand-gray mb-8 max-w-2xl mx-auto">
              Secure a bright future for your child at GRT Public School. We are currently accepting applications for the upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/admissions" className="bg-brand-navy text-white px-8 py-3 rounded-md font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors shadow-sm">
                 Apply Online
               </Link>
               <Link to="/contact" className="bg-white text-brand-navy border border-gray-300 px-8 py-3 rounded-md font-bold hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-center gap-2">
                 <MapPin size={18} /> Visit Campus
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
