import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="text-white text-2xl font-semibold mb-4">
                Career<span className="text-indigo-400">Hub</span>
              </h2>
              <p className="text-sm leading-6 mb-5 max-w-sm">
                There are many variations of passages of Lorem Ipsum, but the
                majority have suffered alteration in some form.
              </p>
              <div className="flex gap-4">
                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-indigo-500 transition">
                  <FaFacebookF />
                </a>
                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-sky-500 transition">
                  <FaTwitter />
                </a>
                <a className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-pink-500 transition">
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Work</li>
                <li className="hover:text-white cursor-pointer">Latest News</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Prototype</li>
                <li className="hover:text-white cursor-pointer">
                  Plans & Pricing
                </li>
                <li className="hover:text-white cursor-pointer">Customers</li>
                <li className="hover:text-white cursor-pointer">
                  Integrations
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white cursor-pointer">Help Desk</li>
                <li className="hover:text-white cursor-pointer">Sales</li>
                <li className="hover:text-white cursor-pointer">
                  Become a Partner
                </li>
                <li className="hover:text-white cursor-pointer">Developers</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>524 Broadway, NYC</li>
                <li>+1 777 - 978 - 5570</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs">
            <p>©2026 CareerHub. All Rights Reserved</p>
            <p className="mt-2 md:mt-0">
              Powered by <span className="text-white">CareerHub</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
