import React from "react";
import { motion } from "framer-motion";
import EarthCanvas from "../components/canvas/EarthCanvas";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This contact form works! You can hook it up to EmailJS whenever you are ready.");
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
              required
              placeholder="What do you want to say to me?"
              className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/5 focus:border-accent-cyan transition-colors resize-none"
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8 mt-4 rounded-xl bg-accent-cyan/90 text-primary font-bold shadow-md shadow-accent-cyan/20 hover:shadow-accent-cyan/40 hover:bg-white transition-all w-fit"
          >
            Send Message
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
