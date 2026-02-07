"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <HeroHighlight containerClassName="min-h-screen w-full !h-auto">
        <div className="min-h-screen bg-white relative z-10">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-20 pb-8"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Get in <Highlight className="text-white">Touch</Highlight>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Have questions about our incubation programs? Ready to start your entrepreneurial journey? 
                We're here to help you every step of the way.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-sm text-gray-600 mb-6">
                    Reach out to us through any of the following channels. Our team is always ready to assist you.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                    <div className="bg-blue-100 rounded-full p-2.5">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">Phone</h3>
                      <p className="text-xs text-gray-600">7217011248</p>
                      <p className="text-xs text-gray-600">7217011240</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                    <div className="bg-green-100 rounded-full p-2.5">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">Email</h3>
                      <a href="mailto:invertis.incubation@invertis.org" className="text-xs text-blue-600 hover:underline break-all">
                        invertis.incubation@invertis.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                    <div className="bg-purple-100 rounded-full p-2.5">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">Campus</h3>
                      <p className="text-xs text-gray-600">
                        Invertis Village, NH-24,<br />
                        Bareilly, UP - 243 123
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                    <div className="bg-orange-100 rounded-full p-2.5">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">City Office</h3>
                      <p className="text-xs text-gray-600">
                        B-186, Civil Lines,<br />
                        Bareilly, UP - 243 001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-md border border-gray-100">
                  <div className="bg-indigo-100 rounded-full p-2.5">
                    <Clock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-xs text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="font-semibold text-sm text-gray-900 mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/invertisincubation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-2.5 transition-all"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://x.com/InvertisUni"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full p-2.5 transition-all"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61565390027580"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-2.5 transition-all"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 shadow-xl sticky top-24"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Quick Actions
                </h2>
                <p className="text-xs text-gray-600 mb-5">
                  Choose from the options below to get started
                </p>

                <div className="space-y-3">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdDTtZQwnmf7OfzdmGwcNXMHEb8JCOLl__I-UL6H1-d8aAEyA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-blue-500"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 rounded-full p-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Apply for Incubation</h3>
                        <p className="text-xs text-gray-600">Register your startup</p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfc9f0Lcxcv3cirTZBhzupM0rs1z-o_5UcHKMA2WFHuu9NVLg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-green-500"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-3">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Join as Mentor</h3>
                        <p className="text-xs text-gray-600">Guide entrepreneurs</p>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://chat.whatsapp.com/GEWqTxZ7l2GDFSy61heHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border-2 border-transparent hover:border-green-600"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Join Community</h3>
                        <p className="text-xs text-gray-600">Connect on WhatsApp</p>
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </HeroHighlight>
    </>
  );
}
