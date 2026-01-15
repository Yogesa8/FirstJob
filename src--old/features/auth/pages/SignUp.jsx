import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Star } from "lucide-react"
import { useState, useEffect } from "react"
import firstJobInd from '../../../assets/favicon.png'

const reviews = [
  {
    name: "Divyanshi",
    quote: "FirstJob is a simple and useful platform for freshers looking for entry-level jobs. The website is easy to use and helps beginners explore opportunities without confusion.",
    role: "Fresher, Placed at XYZ Corp",
    rating: 5
  },
  {
    name: "Sahil",
    quote: "If you are tired of \"free\" resume builders that charge you Rs. 100 at the final download screen, FirstJob World is a breath of fresh air. It prioritizes function and hireability over flashy aesthetics, ensuring your resume actually reaches a human recruiter's desk.",
    role: "Software Engineer",
    rating: 5
  },
  {
    name: "Ritika",
    quote: "If you are tired of \"free\" resume builders that charge you Rs. 100 at the final download screen, FirstJob World is a breath of fresh air. It prioritizes function and hireability over flashy aesthetics, ensuring your resume actually reaches a human recruiter's desk.",
    role: "UI/UX Designer",
    rating: 5
  }
]

const Signup = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleSignup = (e) => {
    e.preventDefault()
    // Add your signup logic here
    alert("Signup successful! (Demo)")
  }

  const current = reviews[currentReview]

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Left Side - Signup Form */}
      <div className="w-full lg:w-[40%] flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-10">
            <img src={firstJobInd} alt="FirstJob Logo" className="w-24 h-24 object-contain mx-auto" />
          </div>

          <div className="text-center lg:text-left mb-10">
            <h1 className="text-4xl font-bold text-gray-900">Create an account</h1>
            <p className="text-gray-600 mt-2">Let's set you up for success</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-medium py-4 rounded-xl hover:bg-orange-700 transition flex items-center justify-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="flex-1 min-w-22.5 border border-gray-300 hover:border-orange-600 hover:bg-orange-200 rounded-lg p-3 transition flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.66-2.84z" />
                <path fill="#EA4335" d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C16.94 3.06 14.59 2 12 2 7.7 2 3.99 4.57 2.18 7.07l3.66 2.84C6.71 8.29 9.14 6.75 12 6.75z" />
              </svg>
            </button>
            <button className="flex-1 min-w-22.5 border border-gray-300 hover:border-orange-600 hover:bg-orange-200 rounded-lg p-3 transition flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#333">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
          </div>

          {/* Sign In button */}
          <p className="mt-10 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Testimonial + Logo */}
      <div className="hidden lg:flex lg:w-[60%] bg-white flex-col items-center justify-center px-12 relative">
        {/* Logo */}
        <div className="mb-12">
          <img src={firstJobInd} alt="FirstJob Logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Testimonial */}
        <div className="max-w-md text-center">
          {/* Profile Photo */}
          <div className="mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-200 border-4 border-white shadow-lg mx-auto overflow-hidden">
              {/* Placeholder - replace with actual image if available */}
              <div className="w-full h-full bg-gray-300" />
            </div>
          </div>

          {/* Name & Role */}
          <h3 className="text-2xl font-bold text-gray-900">{current.name}</h3>
          <p className="text-gray-600 mb-4">{current.role || "Happy User"}</p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${i < current.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>

          {/* Quote */}
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "{current.quote}"
          </p>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${index === currentReview ? "bg-orange-500 w-8" : "bg-gray-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Signup