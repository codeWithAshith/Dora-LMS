"use client";

import Link from "next/link";

const FooterComponent = () => {
  return (
    <footer className="bg-indigo-950 border-t border-gray-200 text-sm text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} DORA LMS. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/pages/about" className="hover:text-gray-900">About</a>
          <a href="/pages/contact" className="hover:text-gray-900">Contact</a>
          <a href="/pages/faq" className="hover:text-gray-900">FAQ</a>
          <a href="/pages/terms" className="hover:text-gray-900">Terms</a>
          <a href="/pages/privacy-policy" className="hover:text-gray-900">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
