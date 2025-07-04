import React from "react";
import { Leaf, Info, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Quiz & Planner", href: "#quiz" },
  { name: "Resources", href: "#resources" },
];

export default function EzRecycleHome() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      {/* Header */}
      <header className="w-full bg-white/70 backdrop-blur sticky top-0 shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-extrabold flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            EzRecycle
          </h1>
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-green-700 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* TODO: Add mobile menu button */}
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            >
              Recycling made <span className="text-green-600">simple</span> and rewarding
            </motion.h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              EzRecycle guides you with clear steps, local resources, and personalized planning to make eco‑friendly habits stick.
            </p>
            <a
              href="#quiz"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-2xl shadow"
            >
              Take the Quick Quiz
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Info className="w-8 h-8 text-green-600" />}
              title="Know What to Recycle"
              description="Learn exactly which materials your city accepts and how to prepare them."
            />
            <FeatureCard
              icon={<MapPin className="w-8 h-8 text-green-600" />}
              title="Find Drop‑Off Points"
              description="Quickly locate recycling centers, donation spots, and swap events near you."
            />
            <FeatureCard
              icon={<Leaf className="w-8 h-8 text-green-600" />}
              title="Build Sustainable Habits"
              description="Set reminders and track progress with our Planner to stay on the green path."
            />
          </div>
        </section>

        {/* Resources CTA */}
        <section id="resources" className="py-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold mb-4">Helpful Resources</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Dive deeper with guides on local regulations, upcycling ideas, and downloadable sorting charts.
            </p>
            <a
              href="#resources"
              className="inline-block bg-green-50 hover:bg-green-100 text-green-700 font-semibold py-2 px-4 rounded-2xl border border-green-600"
            >
              Explore Resources
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5 text-green-500" />
              EzRecycle
            </h4>
            <p>Making recycling effortless, one item at a time.</p>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Navigate</h5>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center py-4 text-sm bg-gray-900">
          © {new Date().getFullYear()} EzRecycle. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-green-50 rounded-2xl shadow p-6 flex flex-col items-center text-center"
    >
      {icon}
      <h4 className="font-bold text-lg mt-4 mb-2">{title}</h4>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
}
