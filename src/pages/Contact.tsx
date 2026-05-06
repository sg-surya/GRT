import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">We're here to answer any questions you may have.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-bold font-heading text-brand-navy mb-8">Get In Touch</h2>
            <p className="text-brand-gray leading-relaxed mb-10">
              Whether you have a question about admissions, facilities, or general inquiries, our team is ready to provide you with all the information you need. Please feel free to call us, visit our campus, or send us a message.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-navy shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-lg text-brand-navy mb-1">Campus Address</h4>
                  <p className="text-brand-gray leading-relaxed text-sm">
                    Rajwaha Marg, Near Jain Bhatta,<br/>
                    Rohta Road, Salahpur,<br/>
                    Meerut – 250502, Uttar Pradesh
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-navy shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-lg text-brand-navy mb-1">Phone Numbers</h4>
                  <p className="text-brand-gray leading-relaxed text-sm">
                    +91 70789 26940<br/>
                    +91 99976 91031
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-navy shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-lg text-brand-navy mb-1">School Hours</h4>
                  <p className="text-brand-gray leading-relaxed text-sm">
                    Monday - Saturday: 8:00 AM – 3:00 PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-brand-light p-8 md:p-10 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold font-heading text-brand-navy mb-6">Send us a message</h3>
            
            {isSuccess ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6 flex gap-3 text-sm">
                <div className="font-bold">✓ Message sent successfully!</div>
                Our team will contact you shortly.
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-navy mb-2">Student / Parent Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-brand-navy mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="queryType" className="block text-sm font-bold text-brand-navy mb-2">Nature of Inquiry</label>
                <select 
                  id="queryType" 
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow text-brand-gray"
                >
                  <option value="admissions">Admissions</option>
                  <option value="general">General Inquiry</option>
                  <option value="fees">Fee Structure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-navy mb-2">Your Message *</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent transition-shadow resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-navy text-white font-bold py-4 px-6 rounded-md hover:bg-brand-gold hover:text-brand-navy transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting this form, you agree to our privacy policy regarding data collection per standard guidelines. We will not share your data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 h-96 w-full relative">
         <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-4 text-center text-gray-500 border-t border-b border-gray-300">
           <MapPin size={48} className="text-gray-400 mb-4" />
           <p className="text-lg font-bold">Interactive Map Component</p>
           <p className="text-sm">Location: Rajwaha Marg, Near Jain Bhatta, Rohta Road, Salahpur, Meerut – 250502</p>
           <p className="text-xs mt-2 italic">(Note: Integrate actual Google Maps embed iframe here in production)</p>
         </div>
      </section>
    </div>
  );
}
