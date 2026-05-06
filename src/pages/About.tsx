import { ShieldCheck, BookOpen, Heart, Award } from 'lucide-react';

export function About() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Building character and excellence since 2004.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">Our History</h2>
            <h3 className="text-3xl font-bold font-heading text-brand-navy mb-6">A Legacy of Learning on Rohta Road</h3>
            <p className="text-brand-gray leading-relaxed mb-6">
              Established in the early 2000s by the GRT Educational Trust, GRT Public School (Poothkhas) has grown into a well-respected institution in Meerut. Operated as a CBSE-affiliated English medium co-educational school, our mission has always been to provide quality education that is accessible while maintaining high academic standards.
            </p>
            <p className="text-brand-gray leading-relaxed">
              We started with a vision to nurture young minds in a safe, structured, and inspiring environment. Today, we stand proud of our dedicated staff, our robust infrastructure, and the continuous achievements of our students.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" 
              alt="School management" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4 border-b-2 border-brand-gold pb-2 inline-block">Our Mission</h3>
            <p className="text-brand-gray leading-relaxed mt-4">
              To empower every student to achieve their highest academic, social, and personal potential through a comprehensive curriculum, dedicated teaching, and a supportive community. We strive to instill critical thinking, empathy, and a lifelong love of learning.
            </p>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4 border-b-2 border-brand-gold pb-2 inline-block">Our Vision</h3>
            <p className="text-brand-gray leading-relaxed mt-4">
              To be a premier educational institution in Meerut recognized for developing ethical, resiliant, and globally minded leaders who will positively impact society.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">Core Values</h2>
           <h3 className="text-3xl font-bold font-heading text-brand-navy mb-12">What Guides Us</h3>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-navy mb-4">
                  <BookOpen size={32} />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">Excellence</h4>
                <p className="text-sm text-brand-gray text-center max-w-xs">Upholding the highest standards in academics and behavior.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-navy mb-4">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">Integrity</h4>
                <p className="text-sm text-brand-gray text-center max-w-xs">Fostering honesty, respect, and ethical decision making.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-navy mb-4">
                  <Heart size={32} />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">Compassion</h4>
                <p className="text-sm text-brand-gray text-center max-w-xs">Creating a caring, inclusive community for all students.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center text-brand-navy mb-4">
                  <Award size={32} />
                </div>
                <h4 className="font-heading font-bold text-lg text-brand-navy mb-2">Resilience</h4>
                <p className="text-sm text-brand-gray text-center max-w-xs">Encouraging perseverance and the confidence to overcome challenges.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Leadership Note */}
      <section className="py-20 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-3xl font-heading font-bold mb-8">From the Management</h3>
           <p className="text-lg text-gray-300 leading-relaxed mb-8 italic">
            "At GRT Educational Trust, we firmly believe that education is the most powerful tool for changing the world. Our campus on Rohta Road is more than just a school; it is a community where talent is nurtured, character is formed, and futures are built. We welcome you to join our family."
           </p>
           <div className="font-bold text-brand-gold tracking-widest uppercase">GRT Educational Trust</div>
        </div>
      </section>
    </div>
  );
}
