import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <header className="p-4 flex justify-between items-center border-b border-gray-700 sticky top-0 bg-black z-10">
          <h1 className="text-2xl font-bold">Nishu Customs</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
            <Link to="/shop" className="hover:text-gray-400">Shop</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="p-4 text-center border-t border-gray-700 text-sm">
          &copy; 2025 Nishu Customs. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

const Home = () => (
  <section className="text-center py-20">
    <h2 className="text-4xl font-bold mb-4">Welcome to Nishu Customs</h2>
    <p className="text-lg">Custom clippers, phone cases, and more with a creative touch.</p>
  </section>
);

const Gallery = () => (
  <section>
    <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-800 p-4 rounded">Image 1</div>
      <div className="bg-gray-800 p-4 rounded">Image 2</div>
      <div className="bg-gray-800 p-4 rounded">Image 3</div>
      <div className="bg-gray-800 p-4 rounded">Image 4</div>
    </div>
  </section>
);

const Shop = () => (
  <section>
    <h2 className="text-3xl font-semibold mb-4">Shop</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border p-4 rounded bg-gray-800">
        <h3 className="font-bold">Clipper Model A</h3>
        <p className="text-sm">Customized lighter</p>
      </div>
      <div className="border p-4 rounded bg-gray-800">
        <h3 className="font-bold">Phone Case B</h3>
        <p className="text-sm">Sleek custom design</p>
      </div>
    </div>
    <div className="mt-10 text-center text-gray-400">3D model viewer coming soon...</div>
  </section>
);

const About = () => (
  <section className="max-w-2xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">About Nishu Customs</h2>
    <p>
      Founded with a passion for customization and creativity, Nishu Customs brings your ideas to life with personalized clippers, phone cases, and more.
    </p>
  </section>
);

const Contact = () => (
  <section className="max-w-xl mx-auto">
    <h2 className="text-3xl font-semibold mb-4">Contact</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-900 rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-900 rounded" />
      <textarea placeholder="Message" className="w-full p-2 bg-gray-900 rounded" rows="4"></textarea>
      <button type="submit" className="bg-white text-black px-4 py-2 rounded">Send</button>
    </form>
    <div className="mt-6">
      <p>Or message us on <a href="https://wa.me/your-number" className="text-green-400">WhatsApp</a> or <a href="https://instagram.com/nishucustoms" className="text-pink-400">Instagram</a>.</p>
    </div>
  </section>
);

export default App;