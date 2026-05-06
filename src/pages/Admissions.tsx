import { CheckCircle2, Download, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Admissions() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Admissions</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Join the GRT family. Review our process below.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-6">Admission Process Overview</h2>
            <p className="text-brand-gray leading-relaxed mb-8">
              We welcome applications from motivated students and families who value quality education. Admissions at GRT Public School are granted based on the availability of seats and meeting our age and academic criteria. We follow a transparent and straightforward process.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-light flex items-center justify-center font-bold text-brand-navy border border-gray-200">1</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-brand-navy mb-2">Registration</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">Procure the admission form from the school office on Rohta Road or express interest via our online contact form. Submit the filled form along with necessary documents.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-light flex items-center justify-center font-bold text-brand-navy border border-gray-200">2</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-brand-navy mb-2">Interaction / Entrance Test</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">For primary and secondary classes, a brief interaction and a basic entrance assessment may be conducted to understand the child's academic alignment.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-brand-light flex items-center justify-center font-bold text-brand-navy border border-gray-200">3</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-brand-navy mb-2">Fee Submission & Enrollment</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">Upon confirmation of admission, parents are requested to submit the requisite fees (including admission fee, tuition fee, and transport if applicable) to finalize enrollment.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-6">Required Documents</h3>
            <ul className="space-y-3 mb-12">
              {['Birth Certificate of the child', 'Aadhaar Card (Child and Parents)', 'Passport size photographs (4 copies)', 'Transfer Certificate (from previous school, if applicable)', 'Previous class Marks Sheet', 'Proof of residence'].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center text-brand-gray">
                  <CheckCircle2 className="text-brand-gold shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-brand-light p-8 rounded-xl border border-gray-200">
              <h4 className="text-xl font-bold font-heading text-brand-navy mb-4">Current Intake</h4>
              <p className="text-brand-gray text-sm mb-6">We are currently accepting applications for classes <strong>Pre-Nursery through Class X</strong> for the upcoming academic session.</p>
              
              <Link to="/contact" className="w-full text-center block bg-brand-navy text-white font-bold py-3 px-4 rounded hover:bg-brand-gold hover:text-brand-navy transition-colors mb-4">
                Enquire Now
              </Link>
              
              {/* Note: This is an example resource link since an actual file is not available */}
              <a href="#" className="w-full text-center flex items-center justify-center gap-2 bg-white border border-gray-300 text-brand-navy font-bold py-3 px-4 rounded hover:bg-gray-50 transition-colors">
                <Download size={18} /> Download Form
              </a>
            </div>

            <div className="bg-brand-navy text-white p-8 rounded-xl">
              <h4 className="text-xl font-bold font-heading mb-4 flex gap-2 items-center"><HelpCircle size={24} className="text-brand-gold" /> Fee Structure</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                GRT Public School strives to keep education accessible. Fees vary by grade level. 
              </p>
              <p className="text-gray-300 text-sm leading-relaxed font-semibold">
                Please visit the school office or contact us directly at +91 70789 26940 for a detailed fee breakdown and payment schedules.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
