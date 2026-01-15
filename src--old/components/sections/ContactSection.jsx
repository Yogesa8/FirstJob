import React from 'react';
import useScrollReveal from "../../hooks/useScrollReveal";
import { Phone, Mail, MapPin } from 'lucide-react'; // or whichever icon library you're using

const ContactSection = () => {
     const [ref, isVisible] = useScrollReveal();

     const locations = [
          { icon: Phone, title: "Call Us", value: "+91 9211526625", link: "tel:+919211526625", subtext: "Mon-Fri from 9am to 6pm" },
          { icon: Mail, title: "Email Us", value: "akashucarrer@gmail.com", link: "mailto:akashucarrer@gmail.com", subtext: "We'll respond within 24 hours" },
          { icon: MapPin, title: "Visit Us", value: "TA3107, 2nd Floor, Tughlak Extension, Main Okhla Road, Kalkaji, South Delhi, New Delhi, Delhi, India 110019", link: null, subtext: "" }
     ];

     return (
          <section ref={ref} className="py-20 sm:py-24 bg-[#f9fafb] overflow-hidden">
               <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className={`max-w-2xl text-left mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                         <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Get In Touch</h2>
                         <p className="mt-4 text-lg text-gray-600">We're here to help you start your career journey</p>
                    </div>

                    {/* Map */}
                    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: '300ms' }}>
                         <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-gray-200" >
                              <iframe
                                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8934634995344!2d77.25839507550205!3d28.54832398744645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564c8e4e1%3A0x1b8d1c5b0f5c6e8d!2sKalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1703764800000!5m2!1sen!2sin"
                                   width="100%"
                                   height="100%"
                                   style={{ border: 0 }}
                                   allowFullScreen=""
                                   loading="lazy"
                                   className="w-full h-full"
                              ></iframe>
                         </div>
                    </div>

                    {/* Divider */}
                    <div className="w-[90%] h-1 bg-orange-500 mx-auto mb-10 rounded-full" />

                    {/* Locations */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                         {locations.map((item, index) => (
                              <div key={index} className="space-y-2 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                   <div className="flex justify-center mb-4">
                                        <item.icon className="w-8 h-8 text-orange-500" />
                                   </div>
                                   <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                   {item.link ? (
                                        <a href={item.link} className="text-gray-600 hover:text-orange-600 transition-colors">
                                             {item.value}
                                        </a>
                                   ) : (
                                        <p className="text-gray-600">{item.value}</p>
                                   )}
                                   <p className="text-sm text-gray-500">{item.subtext}</p>
                              </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}

export default ContactSection;