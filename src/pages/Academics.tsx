export function Academics() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Academics</h1>
          <p className="text-xl text-gray-300 max-w-2xl">A rigorous, structured, and modern CBSE-affiliated curriculum.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-6">Our Educational Approach</h2>
            <p className="text-brand-gray leading-relaxed mb-4">
              At GRT Public School, our academic program is designed to foster intellectual curiosity, critical thinking, and a lifelong love of learning. We strictly adhere to the guidelines set by the Central Board of Secondary Education (CBSE), ensuring a standardized and rigorous English-medium education.
            </p>
            <p className="text-brand-gray leading-relaxed">
              Our curriculum seamlessly integrates textbook learning with practical application, leveraging smart classrooms and interactive teaching methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Primary */}
            <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4 border-b border-gray-300 pb-3">Primary & Middle School (Classes I - VIII)</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                The primary and middle years focus on building a strong foundation in core subjects while encouraging creative expression. We emphasize language skills, logical reasoning, and an understanding of the world around us.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-bold text-brand-navy min-w-[120px]">Subjects:</span>
                  <span className="text-brand-gray">English, Hindi, Mathematics, Environmental Science (EVS), Science, Social Science, Computer Science.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-brand-navy min-w-[120px]">Focus Areas:</span>
                  <span className="text-brand-gray">Reading comprehension, basic arithmetic, interactive projects, and character education.</span>
                </li>
              </ul>
            </div>

            {/* Secondary */}
            <div className="bg-brand-light p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-bold font-heading text-brand-navy mb-4 border-b border-gray-300 pb-3">Secondary School (Classes IX - X)</h3>
              <p className="text-brand-gray leading-relaxed mb-6">
                Our secondary program prepares students for the crucial CBSE Board examinations. The focus shifts towards deeper conceptual understanding, analytical thinking, and application-based learning.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-2">
                  <span className="font-bold text-brand-navy min-w-[120px]">Core Subjects:</span>
                  <span className="text-brand-gray">English Language & Literature, Hindi Course A/B, Mathematics, Science (Physics, Chemistry, Biology), Social Science.</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-brand-navy min-w-[120px]">Focus Areas:</span>
                  <span className="text-brand-gray">Board exam preparation, practical lab sessions, analytical assessments, and holistic grading.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Holistic Development */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold font-heading mb-6">Beyond the Classroom</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              True education encompasses more than just academics. We strongly believe in holistic development, encouraging students to participate in co-curricular activities.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-gold"></div> Cultural programs and festival celebrations</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-gold"></div> Sports and physical education</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-gold"></div> Science fairs and project exhibitions</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-brand-gold"></div> Special assemblies (e.g., Labour Day events)</li>
            </ul>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" 
              alt="Students participating in an event" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
