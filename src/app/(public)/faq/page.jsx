"use client"

import FaqAccordion from "@/components/ui/faq-accordion"
import { motion } from "framer-motion"

const faqData = [
  {
    question: "How do I enroll in a course?",
    answer: "To enroll, simply click on the 'Enroll Now' button on the course page and follow the checkout process."
  },
  {
    question: "Can I access the course after completion?",
    answer: "Yes, once enrolled, you have lifetime access to the course materials."
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer: "Absolutely! All our courses include a certificate upon successful completion."
  },
  {
    question: "Are the courses self-paced?",
    answer: "Yes, all courses are designed to be self-paced so you can learn at your convenience."
  },
  {
    question: "What if I have questions during the course?",
    answer: "You can ask your questions in the community or contact the instructor directly from your dashboard."
  },
]

const FaqPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Frequently Asked Questions</h1>
        <p className="text-gray-600 max-w-xl mx-auto">Everything you need to know about our platform and courses.</p>
      </motion.div>

      {/* FAQ Accordion */}
      <FaqAccordion faqs={faqData} />

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-20 text-center"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Still have questions?</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out to our support team anytime.</p>
        <a
          href="/contact"
          className="inline-block rounded-lg bg-blue-600 text-white px-6 py-2 font-medium shadow-md hover:bg-blue-700 transition"
        >
          Contact Support
        </a>
      </motion.div>
    </div>
  )
}

export default FaqPage
