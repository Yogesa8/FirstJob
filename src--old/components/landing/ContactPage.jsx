import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactPage = () => {
    return (
        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT SIDE - CONTACT DETAILS */}
                <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
                    <div>
                        <p className="text-blue-600 text-sm font-semibold">
                            Get in Touch
                        </p>
                        <h2 className="text-2xl font-bold text-gray-800 mt-1">
                            Contact Information
                        </h2>
                        <p className="text-gray-500 text-sm mt-2">
                            Have questions or need help? Reach out to us anytime.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex gap-4 bg-gray-900 text-white rounded-xl p-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Email</p>
                            <p className="text-gray-300 text-sm">
                                akashucarrer@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4 bg-gray-900 text-white rounded-xl p-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Phone</p>
                            <p className="text-gray-300 text-sm">
                                +91 ---------
                                {/* +91 9211526625 */}
                            </p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex gap-4 bg-gray-900 text-white rounded-xl p-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">Address</p>
                            <p className="text-gray-300 text-sm">
                                TA3107, 2nd Floor, Tughlak Extension, Main Okhla Road, Kalkaji, South Delhi, New Delhi, Delhi, India  110019
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - MAP */}
                <div className="rounded-2xl overflow-hidden shadow-sm min-h-[420px]">
                    <iframe title="location-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11536.803706363724!2d77.23588906642564!3d28.544175152543065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3dafbf6e101%3A0x35304d4b868464b5!2s2nd%20floor%2C%20Block%20E%2C%20Kalkaji%2C%20New%20Delhi%2C%20Delhi%20110019!5e1!3m2!1sen!2sin!4v1766164532182!5m2!1sen!2sin"  loading="lazy"  className="w-full h-full border-0"></iframe>
                
                </div>
            </div>
        </section>
    )
}

export default ContactPage