// app/contact/page.jsx
"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

const ContactPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h1>
        <p className="text-blue-700">
          Have questions or feedback? We’d love to hear from you!
        </p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-3xl mx-auto space-y-6 border border-blue-100"
      >
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Fancy Separator */}
      <div className="my-20">
        <div className="h-1 w-40 mx-auto rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 blur-[1px]" />
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-blue-800"
      >
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-4 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-blue-600" />
            support@lmsacademy.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-blue-600" />
            +91 98765 43210
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            123 Learning Street, Knowledge City, India
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactPage
