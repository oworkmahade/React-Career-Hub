import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] text-gray-400">
      <div className="px-6 mx-auto max-w-7xl py-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Career<span className="text-indigo-400">Hub</span>
            </h2>
            <p className="max-w-sm mb-5 text-sm leading-6">
              There are many variations of passages of Lorem Ipsum, but the
              majority have suffered alteration in some form.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white transition bg-gray-800 rounded-full w-9 h-9 hover:bg-indigo-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white transition bg-gray-800 rounded-full w-9 h-9 hover:bg-sky-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white transition bg-gray-800 rounded-full w-9 h-9 hover:bg-pink-500"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Work</li>
              <li className="cursor-pointer hover:text-white">Latest News</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white">Prototype</li>
              <li className="cursor-pointer hover:text-white">
                Plans & Pricing
              </li>
              <li className="cursor-pointer hover:text-white">Customers</li>
              <li className="cursor-pointer hover:text-white">Integrations</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white">Help Desk</li>
              <li className="cursor-pointer hover:text-white">Sales</li>
              <li className="cursor-pointer hover:text-white">
                Become a Partner
              </li>
              <li className="cursor-pointer hover:text-white">Developers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>524 Broadway, NYC</li>
              <li>+1 777 - 978 - 5570</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-between pt-6 mt-12 text-xs border-t border-gray-700 md:flex-row">
          <p>©2026 CareerHub. All Rights Reserved</p>
          <p className="mt-2 md:mt-0">
            Powered by <span className="text-white">CareerHub</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
