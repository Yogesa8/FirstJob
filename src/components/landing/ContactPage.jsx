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
                                support@yourmail.com
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
                                +91 98765 43210
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
                                230 Norman Street, New York, NY
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE - MAP */}
                <div className="rounded-2xl overflow-hidden shadow-sm min-h-[420px]">
                    <iframe
                        title="location-map"
                        src="https://www.google.com/maps?q=New%20York&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                    />
                </div>

            </div>
        </section>
    )
}

export default ContactPage