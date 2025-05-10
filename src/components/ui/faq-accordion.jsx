"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const FaqAccordion = ({ faqs }) => {
  return (
    <Accordion.Root
      type="multiple"
      className="w-full max-w-3xl mx-auto space-y-4"
    >
      {faqs.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="overflow-hidden border border-blue-200 rounded-xl bg-white shadow-sm"
        >
          <Accordion.Header className="flex">
            <Accordion.Trigger
              className={cn(
                "flex w-full items-center justify-between px-6 py-4 font-medium text-left text-blue-900 transition hover:bg-blue-50"
              )}
            >
              {faq.question}
              <ChevronDown className="h-4 w-4 transition-transform duration-200 AccordionChevron" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content asChild>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="px-6 pb-4 text-sm text-gray-700"
            >
              {faq.answer}
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

export default FaqAccordion
