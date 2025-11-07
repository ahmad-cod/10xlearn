// app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-between px-6 py-10 text-gray-800">


      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-3xl"
        >
          Learn <span className="text-indigo-600">Faster</span>,  
          Comprehend <span className="text-indigo-600">Better</span>,  
          Retain <span className="text-indigo-600">Longer</span>.
        </motion.h2>

        <p className="text-gray-600 mt-6 max-w-xl">
          The AI-powered, community-driven learning platform helping African students 10x their understanding and academic success.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/auth/sign-up"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-indigo-700 transition-all"
          >
            Get Started
          </Link>
          <Link
            href="#features"
            className="border border-gray-300 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mt-32 grid md:grid-cols-3 gap-12 max-w-6xl">
        {[
          {
            title: "AI-Powered Mock Tests",
            desc: "Instantly generate personalized mock exams based on your topics and progress.",
            icon: "💡",
          },
          {
            title: "Community Learning",
            desc: "Connect, compete, and collaborate with fellow 10X learners across universities.",
            icon: "👥",
          },
          {
            title: "Localized Insights",
            desc: "Access curated content tailored to your university’s syllabus and region.",
            icon: "🌍",
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="text-center p-6 border rounded-2xl hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
            <p className="text-gray-600 mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center text-gray-500 text-sm border-t pt-6 w-full max-w-6xl">
        <p>© {new Date().getFullYear()} 10XLearn. Built to empower learners across Africa. 🌍</p>
      </footer>
    </main>
  );
}
