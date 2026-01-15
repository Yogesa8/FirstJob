import { Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
     const handleCall = () => {
     }
     return (
          <>
               <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl bg-linear-to-br from-black via-gray-900 to-gray-800">
                         <div className="relative px-10 py-16 md:px-16 md:py-20">
                              <h2 className="text-white text-3xl md:text-4xl font-semibold max-w-lg leading-tight">
                                   Stay ahead without<br />the noise.
                              </h2>
                              <div className="mt-8">
                                   <button onClick={handleCall} className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                                        Contact Us
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
               <footer className="w-full bg-black text-gray-400 border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-6 py-10">
                         {/* Top Section */}
                         <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

                              {/* Logo */}
                              <div className="flex justify-center md:justify-start">
                                   <h2 className="text-white text-lg font-semibold">
                                        First<span className="text-orange-500">Job</span>Ind
                                   </h2>
                              </div>

                              {/* Links */}
                              <div className="flex flex-wrap justify-center gap-4 text-sm">
                                   <a href="#" className="hover:text-white transition">
                                        About
                                   </a>
                                   <span className="opacity-40">|</span>
                                   <a href="#" className="hover:text-white transition">
                                        Contact us
                                   </a>
                                   <span className="opacity-40">|</span>
                                   <a href="#" className="hover:text-white transition">
                                        Pricing
                                   </a>
                                   <span className="opacity-40">|</span>
                                   <a href="#" className="hover:text-white transition">
                                        Terms and Conditions
                                   </a>
                                   <span className="opacity-40">|</span>
                                   <a href="#" className="hover:text-white transition">
                                        Cancellation and Refund Policy
                                   </a>
                              </div>

                              {/* Social Icons */}
                              <div className="flex justify-center gap-4">
                                   <a href="#" className="hover:text-white transition">
                                        <Instagram size={18} />
                                   </a>
                                   <a href="#" className="hover:text-white transition">
                                        <Linkedin size={18} />
                                   </a>
                                   <a href="#" className="hover:text-white transition">
                                        <Youtube size={18} />
                                   </a>
                              </div>
                         </div>

                         {/* Bottom */}
                         <div className="mt-8 text-center text-xs text-gray-500">
                              © 2025 FirstJobInd | All rights reserved
                         </div>
                    </div>
               </footer>
          </>
     )
}

export default Footer