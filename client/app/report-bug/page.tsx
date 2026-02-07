"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Bug, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ReportBugPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bugType: "",
    description: "",
    url: "",
    priority: "medium"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Bug report submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        bugType: "",
        description: "",
        url: "",
        priority: "medium"
      });
    }, 3000);
  };

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
                Report a <Highlight className="text-white">Bug</Highlight>
              </h1>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Found an issue? Help us improve by reporting bugs and technical issues.
              </p>
            </div>
          </motion.div>

          {/* Form Section */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h2>
                  <p className="text-sm text-gray-600">
                    Your bug report has been submitted successfully. We'll look into it as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-red-100 rounded-full p-2.5">
                      <Bug className="w-5 h-5 text-red-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Bug Report Form
                    </h2>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-5 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-900">
                      Please provide as much detail as possible to help us identify and fix the issue quickly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Bug Type *
                        </label>
                        <select
                          required
                          value={formData.bugType}
                          onChange={(e) => setFormData({ ...formData, bugType: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select bug type</option>
                          <option value="ui">UI/Visual Issue</option>
                          <option value="functional">Functionality Error</option>
                          <option value="performance">Performance Issue</option>
                          <option value="content">Content Error</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Priority Level
                        </label>
                        <select
                          value={formData.priority}
                          onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="critical">Critical</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Page URL (where you found the bug)
                      </label>
                      <input
                        type="url"
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="https://example.com/page"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                        Bug Description *
                      </label>
                      <textarea
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={5}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Please describe the bug in detail. Include steps to reproduce if possible..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 text-sm rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <Bug className="w-4 h-4" />
                      Submit Bug Report
                    </button>
                  </form>
                </motion.div>
              )}
            </div>
          </section>
        </div>
      </HeroHighlight>
    </>
  );
}
