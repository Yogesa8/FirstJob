import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BackButton from '../ui/BackButton'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    setError("")

    // Dummy credentials
    if (email === "admin" && password === "admin") {
      // fake auth save
      localStorage.setItem("isAuth", "true")
      localStorage.setItem("userRole", "admin")

      navigate("/dashboard")
    } else {
      setError("Invalid email or password")
    }
  }
  return (
    <div className="bg-gray-50 dark:bg-gray-800 flex justify-center items-center w-screen min-h-screen p-5">
      <div className="min-h-screen flex w-full">
        {/* Left Side - Visual Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-linear-to-tr from-blue-800 to-purple-700 justify-center items-center relative overflow-hidden">
          <div className="absolute top-6 left-6 z-20">
            <BackButton />
          </div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10 px-10 text-center">
            <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl">
              {/* <img src={firstJobInd} alt="website logo" /> */}
              <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Secure Login</h1>
            <p className="text-white/80 text-lg mb-8">Your data is 100% secure. Protected with the latest security protocols.</p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 border-white/30 rounded-full"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 border-white/30 rounded-full"></div>
          <div className="absolute top-0 -right-20 w-80 h-80 border-4 border-white/30 rounded-full"></div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
          <div className="w-full max-w-md">
            <div className="text-center lg:text-left mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-600">Please sign in to your account</p>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@mail.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">Forgot password?</a>
              </div>

              {/* Error */}
              {error && (
                <p className="text-sm text-red-500 text-center">
                  {error}
                </p>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="mt-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <FaGithub className="h-5 w-5 text-gray-800" />
                  <span className="ml-2">GitHub</span>
                </button>
                <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <FaGoogle className="h-5 w-5 text-red-500" />
                  <span className="ml-2">Google</span>
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?
              <Link to={'/signup'} className="font-medium text-blue-600 hover:text-blue-500">Sign up now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage