import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from '@emailjs/browser';
import { useState } from "react";


export const Contact = () => {

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(serviceID, templateID, e.target, publicKey).then((result) => {
            alert("Message sent successfully!")
            setFormData({
                name: "",
                email: "",
                message: ""
            })
        }).catch((error) => {
            alert("An error occurred, please try again.")
        })
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-[#D4D3B3]">

        <RevealOnScroll>
            <div className="px-4 w-full">
                <h2 className="text-center text-5xl mb-10 text-[#8a5128]">
                    Get in Touch With Me!
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            className="rounded-full w-full bg-white/50 border-2 border-[#8D926F]
                        rounded px-4 py-3 text-black transition focus:outline-none focus:border-pink-500"
                            placeholder="Name..."
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div className="relative">
                        <input type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            className="rounded-full w-full bg-white/50 border-2 border-[#8D926F]
                        rounded px-4 py-3 text-black transition focus:outline-none focus:border-pink-500"
                            placeholder="example@gmail.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    <div className="flex justify-center items-start">
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            rows={15}
                            className="w-full bg-white/50 border-2 border-[#8D926F]
                        rounded-3xl px-4 py-3 text-black transition focus:outline-none focus:border-pink-500"
                            placeholder="Send a quick message..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

        </RevealOnScroll>
    </section>
};