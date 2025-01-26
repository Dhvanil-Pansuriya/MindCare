import { useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../App"
import { useNavigate, Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordSecond, setShowPasswordSecond] = useState(false)
  const [error, setError] = useState("")
  const { setAuthToken } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup", {
        name,
        email,
        password,
      })

      if (response.data.success) {
        localStorage.setItem("authToken", response.data.result.token)
        setAuthToken(response.data.result.token)
        navigate("/")
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF3E7]">
      <div className="w-full max-w-lg p-8">
        <form
          onSubmit={handleSignup}
          className="bg-[#FDF3E7] p-8 rounded-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          <h2 className="text-3xl font-bold mb-6 text-black text-center">Create Account</h2>
          {error && <p className="text-red-600 mb-4 text-center bg-red-100 p-3 border-2 border-black">{error}</p>}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-black" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-black" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2 text-black" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-black"
              >
                {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm font-bold mb-2 text-black" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type={showPasswordSecond ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPasswordSecond(!showPasswordSecond)}
                className="absolute right-3 top-9 text-black"
              >
                {showPasswordSecond ? <EyeOff size={25} /> : <Eye size={25} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#F4B67F] text-black py-3 border-2 border-black rounded-none font-bold
                                 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
                                 hover:translate-y-0 hover:translate-x-0
                                 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
                                 active:translate-x-[4px] active:translate-y-[4px]
                                 transition-all"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-sm text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-bold hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

