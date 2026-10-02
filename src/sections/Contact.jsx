import React, { useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "../components/canvas/EarthCanvas";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://formsubmit.co/ajax/manishanarayanasami@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong while sending your message. Please try again or email directly.",
        });
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Failed to send message. Please check your internet connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-6 sm:px-16 max-w-7xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row gap-10 overflow-hidden z-10">
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex-[0.75] glass-panel p-8 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.05)]"
      >
        <p className="text-accent-blue font-mono text-sm sm:text-base uppercase tracking-wider mb-2">Get in touch</p>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6 w-full">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/5 focus:border-accent-cyan transition-colors"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="What's your email?"
              className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/5 focus:border-accent-cyan transition-colors"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="What do you want to say to me?"
              className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/5 focus:border-accent-cyan transition-colors resize-none"
            />
          </label>

          {status.message && (
            <div
              className={`p-4 rounded-lg text-sm font-medium ${
                status.type === "success"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "bg-red-500/20 text-red-300 border border-red-500/30"
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="py-3 px-8 mt-4 rounded-xl bg-accent-cyan/90 text-primary font-bold shadow-md shadow-accent-cyan/20 hover:shadow-accent-cyan/40 hover:bg-white transition-all w-fit disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="lg:flex-1 lg:h-auto md:h-[550px] h-[350px] w-full"
      >
        <EarthCanvas />
      </motion.div>

    </section>
  );
};

export default Contact;
