import { Link } from "react-router-dom";
import logoFooter from "../../assets/logo-footer.png";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];


const Footer = () => {
  return (
    <footer className="bg-[#060B2B] text-white pt-36 md:pt-60 pb-6 px-4">
      
      {/* Logo */}
      <div className="flex justify-center mb-10">
        <img
          src={logoFooter}
          alt="logo"
          className="w-24 md:w-28 lg:w-36 opacity-90"
        />
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        
        {/* About */}
        <div>
          <h3 className="font-semibold mb-3 md:text-lg">About Us</h3>
          <p className="text-gray-400 leading-relaxed">
            We are a passionate team dedicated to providing the best services to our customers with quality and care.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3 md:text-lg">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
  {links.map((link) => (
    <li key={link.name}>
      <Link
        to={link.path}
        className="hover:text-white hover:translate-x-1 transition duration-200 block"
      >
        • {link.name}
      </Link>
    </li>
  ))}
</ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold mb-3 md:text-lg">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get the latest updates and news directly in your inbox.
          </p>

          <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-black outline-none"
            />
            <button className="btn border-none bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;