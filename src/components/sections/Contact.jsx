import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("An error occurred, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-[#D4D3B3]"
    >
        {/* Heading at top (centered, not part of grid) */}
        <h2 className="text-center text-5xl mb-16 text-[#8a5128] font-serif">
          Get in Touch With Me!
        </h2>
      <RevealOnScroll>

        {/* Layout container: form on left, icons on right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-center w-full max-w-5xl px-4 gap-10">
          {/* Contact Form */}
          <div className="w-full md:w-xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="rounded-full w-full bg-white/50 border-2 border-[#8D926F]
                  px-4 py-3 text-black transition focus:outline-none focus:border-pink-500"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="rounded-full w-full bg-white/50 border-2 border-[#8D926F]
                  px-4 py-3 text-black transition focus:outline-none focus:border-pink-500"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-center items-start">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  rows={8}
                  className="w-lg bg-white/50 border-2 border-[#8D926F]
                  rounded-3xl px-4 py-3 text-black transition focus:outline-none focus:border-pink-500"
                  placeholder="Send a quick message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#8D926F] text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-lg w-40 text-center"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className=" md:mt-15 flex flex-col items-center justify-center md:items-center space-y-6 md:w-xl">
            

            <div className="flex flex-col md:flex-col space-y-6 md:space-y-6">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/dori-lin-637b55300"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 text-[#8a5128] transition-transform transform hover:scale-110"
    aria-label="LinkedIn"
  >
    <FaLinkedin size={60} />
    <span className="text-xl font-medium">dori-lin-637b55300</span>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/_lxy830?igsh=NXBvN3A5aTd4MXBx&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 text-[#8a5128] transition-transform transform hover:scale-110"
    aria-label="Instagram"
  >
    <FaInstagram size={60} />
    <span className="text-xl font-medium">@_lxy830</span>
  </a>

  {/* Email */}
  <a
    href="mailto:lin.dor@northeastern.edu"
    className="flex items-center space-x-4 text-[#8a5128] transition-transform transform hover:scale-110"
    aria-label="Email"
  >
    <MdEmail size={60} />
    <span className="text-xl font-medium">lin.dor@northeastern.edu</span>
  </a>
</div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};