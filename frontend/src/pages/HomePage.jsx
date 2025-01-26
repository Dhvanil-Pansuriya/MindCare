import { Brain, BarChart, Video, BookOpen, ArrowRight } from "lucide-react"
import Header from "../utils/Header"
import Footer from "../utils/Footer"
import AssessmentPopup from "./user/AssessmentPopup"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF3E7]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-[#F4B67F] text-black border-y-4 border-black">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Your Personalized Mental Wellness Companion
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl sm:text-2xl">
              Empower your journey to better mental health with personalized tools and resources.
            </p>
            <div className="mt-10">
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border-4 border-black text-base font-bold rounded-none text-black bg-white hover:bg-[#FDF3E7] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-16 bg-[#FDF3E7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-black sm:text-4xl">Comprehensive Mental Wellness Tools</h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-black">
                MindCare offers a suite of features designed to support your mental health journey.
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Brain,
                  title: "Personalized Suggestions",
                  description: "Take short quizzes to receive tailored mental health recommendations.",
                },
                {
                  icon: BarChart,
                  title: "Mood Tracking",
                  description: "Monitor and analyze your mood patterns over time with our intuitive tracker.",
                },
                {
                  icon: Video,
                  title: "Guided Meditations",
                  description: "Access a library of guided meditation videos to help you relax and focus.",
                },
                {
                  icon: BookOpen,
                  title: "Resource Library",
                  description:
                    "Explore our curated collection of articles and videos on various mental health topics.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                >
                  <div className="flex justify-center items-center w-12 h-12 bg-[#F4B67F] border-2 border-black mb-4">
                    <feature.icon className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-base text-black">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-[#F4B67F] border-y-4 border-black">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              <span className="block">Ready to start your journey?</span>
              <span className="block">Begin your mental wellness adventure today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-black sm:text-xl">
              Take the first step towards a healthier mind with MindCare's personalized tools and resources.
            </p>
            <a
              href="/dashboard"
              className="mt-8 inline-flex items-center justify-center px-5 py-3 border-4 border-black text-base font-bold rounded-none text-black bg-white hover:bg-[#FDF3E7] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
        {showPopup && <AssessmentPopup onClose={() => setShowPopup(false)} />}
      </main>
      <Footer />
    </div>
  )
}
