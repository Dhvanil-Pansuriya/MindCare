import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#F4B67F] border-t-4 border-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">Features</h3>
                <ul className="mt-4 space-y-4">
                  {["Mood Tracker", "Guided Meditations", "Resource Library"].map((item, index) => (
                    <li key={index}>
                      <Link
                        to={`/${item.toLowerCase().replace(" ", "-")}`}
                        className="text-base text-black hover:underline"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  {[
                    { label: "FAQ", path: "/faq" },
                    { label: "Contact Us", path: "/contact" },
                  ].map((item, index) => (
                    <li key={index}>
                      <Link to={item.path} className="text-base text-black hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-bold text-black tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  {["About", "Privacy", "Terms"].map((item, index) => (
                    <li key={index}>
                      <Link to={`/${item.toLowerCase()}`} className="text-base text-black hover:underline">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-bold text-black tracking-wider uppercase">Subscribe to our newsletter</h3>
            <p className="mt-4 text-base text-black">Get the latest news and articles to your inbox every month.</p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border-4 border-black rounded-none py-2 px-4 text-base text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:border-black focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-white border-4 border-black rounded-none py-2 px-4 flex items-center justify-center text-base font-bold text-black hover:bg-[#FDF3E7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t-4 border-black pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {[
              { name: "Facebook", icon: Facebook },
              { name: "Instagram", icon: Instagram },
              { name: "Twitter", icon: Twitter },
            ].map((item) => (
              <a key={item.name} href="#" className="text-black hover:text-gray-600">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-black md:mt-0 md:order-1">
            &copy; 2023 MindCare, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

