import { useContext, useState } from "react";
import { AuthContext } from "../App";
import { useNavigate, Link } from "react-router-dom";
import { Brain, Menu, X, LogOut } from "lucide-react";

export default function Header() {
  const { setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For toggling the mobile menu

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/mood-tracker", label: "Mood Tracker" },
    { path: "/meditations", label: "Meditations" },
    { path: "/resources", label: "Resources" },
    { path: "/assessment", label: "Assessment" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setAuthToken(null);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu visibility
  };

  return (
    <header className="bg-[#FDF3E7] border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Brain className="h-8 w-8 text-black" />
              <span className="ml-2 text-2xl font-bold text-black">MindCare</span>
            </Link>
            {/* Desktop Menu */}
            <nav className="hidden sm:flex sm:ml-6 sm:space-x-8 flex items-center justify-center">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-black hover:bg-[#FDF3E7] px-3 py-2 font-bold text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          {/* Desktop Logout */}
          <div className="hidden sm:flex sm:items-center">
            <button
              onClick={handleLogout}
              className="inline-flex items-center px-4 py-2 border-4 border-black text-sm font-bold rounded-none text-black bg-white hover:bg-[#FDF3E7] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-none text-black hover:bg-[#FDF3E7] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
              <X className="hidden h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-black hover:bg-[#FDF3E7] block px-3 py-2 font-bold text-base"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-black">
          <div className="mt-3 space-y-1">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-base font-bold text-black hover:bg-[#FDF3E7]"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
