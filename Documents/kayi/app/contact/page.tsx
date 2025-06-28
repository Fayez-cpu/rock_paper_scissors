"use client"

import type React from "react"
import '../../styles.css';
import { useState } from "react"
import Link from "next/link"
import { Menu, X, MapPin, Phone, Mail, Send, Clock, Instagram, Facebook, Twitter } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);
  const accessKey = "YOUR_ACCESS_KEY_HERE"; // Replace this with your real key

  if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
    console.log("Missing or invalid access key.");
    setFormStatus("error");
    return;
  }

  setFormStatus("sending");
  formData.append("access_key", accessKey);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setFormStatus("success");
      form.reset();
    } else {
      console.error("Web3Forms error:", data);
      setFormStatus("error");
    }
  } catch (error) {
    console.error("Network error:", error);
    setFormStatus("error");
  }
};

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center nav-container">
          <h1 className="text-2xl font-bold">
            <Link href="/">
            <Image
              src="/logo.webp"
              alt="Website Logo"
              className="logo"
              width={258}
              height={104}
            />
            </Link>
          </h1>
          <nav className="hidden md:flex space-x-8 nav-menu">
            <Link href="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link href="/menu" className="hover:text-blue-300">
              Menu
            </Link>
            <Link href="/about" className="hover:text-blue-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-300 border-b-2 border-white">
              Contact
            </Link>
          </nav>
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 bg-blue-800 text-white p-4 z-40 flex flex-col justify-center items-center"
          >
            <Link href="/" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/menu" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link href="/about" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/contact" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[40vh] flex items-center mb-pd"
        style={{
          backgroundImage:
            "url('https://img1.wsimg.com/isteam/ip/a62cca40-86b6-4f49-bb37-37dc78e0fa08/shutterstock_563091901.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We'd love to hear from you. Reach out for reservations, inquiries, or feedback.
          </p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="pb-16 pt-12 bg-white mb-pd">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Contact Information - Combined Component */}
            
            <div className="lg:w-1/2 space-y-8">
              

              <div className="bg-blue-50 p-6 rounded-lg shadow-md map">
                <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center justify-center">
                  <MapPin className="mr-2 h-5 w-5" /> Our Location
                </h3>
                <p className="text-blue-600 mb-4 text-center">3 Vicarage Road, Derby, DE3 0EA</p>
                <div className="h-74 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.433091442485!2d-1.5477646787721082!3d52.90463054708823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879f71579bb0203%3A0x5e130793377892a9!2sKAYI%20Mezze%20%26%20Grill!5e0!3m2!1sen!2suk!4v1745347990838!5m2!1sen!2suk"
  width="441"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Opening Hours */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-700 flex items-center justify-center">
                      <Clock className="mr-2 h-5 w-5" /> Opening Hours
                    </h3>
                    <div className="space-y-2 text-blue-600">
                      <div className="flex justify-between">
                        <span>Monday:</span>
                        <span>Closed</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday:</span>
                        <span>17:00 – 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday:</span>
                        <span>17:00 – 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday:</span>
                        <span>17:00 – 23:00</span>
                      </div>
                         <div className="flex justify-between">
                        <span>Friday:</span>
                        <span>17:00 – 23:00</span>
                      </div>
                                            <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>17:00 – 23:00</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-700 text-center">Contact Details</h3>
                    <div className="space-y-3">
                      <p className="flex items-center text-blue-600 justify-center">
                        <Phone className="mr-3 h-5 w-5 text-blue-800 " /> <a href="tel:01332 595861" style={{textDecoration: "underline"}}> 01332 595861</a>
                      </p>
                      <p className="flex items-center text-blue-600 justify-center">
                        <Mail className="mr-3 h-5 w-5 text-blue-800" /><a href="mailto:info@kayi-grill.co.uk" style={{textDecoration: "underline"}}> info@kayi-grill.co.uk</a>
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold mt-6 mb-4 text text-blue-700 text-center">Follow Us</h3>
                    <div className="flex space-x-4 justify-center">
                      <a href="#" className="text-blue-800 hover:text-blue-600 transition-colors">
                        <Facebook className="h-6 w-6" />
                      </a>
                      <a href="https://www.instagram.com/kayimezzegrill/?hl=en-gb" target="_blank" className="text-blue-800 hover:text-blue-600 transition-colors">
                        <Instagram className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-md border border-blue-100 message">
                <h2 className="text-3xl font-bold mb-6 text-blue-800">Send Us a Message</h2>

                {formStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
                    There was an error sending your message. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>





                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-blue-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8 justify-evenly text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4 ">Contact Us</h3>
              <p className="flex items-center  md:justify-start mb-2 footer-icon">
                <MapPin className="mr-2" /> 3 Vicarage Road, Derby, DE3 0EA
              </p>
              <p className="flex items-center  md:justify-start mb-2 footer-icon">
                <Phone className="mr-2" /><a href="tel:01332 595861" style={{textDecoration: "underline"}}> 01332 595861</a>
              </p>
              <p className="flex items-center md:justify-start mb-2 footer-icon">
                <Mail className="mr-2" /><a href="mailto:info@kayi-grill.co.uk" style={{textDecoration: "underline"}}> info@kayi-grill.co.uk</a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
              <p>Monday: Closed</p>
              <p>Tuesday - Sunday:  5 PM - 11PM</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex  md:justify-start space-x-4 footer-icon">
                <a href="https://www.instagram.com/kayimezzegrill/?hl=en-gb" target="_blank" className="hover:opacity-80 footer-icon">
                <img src="/insta.png" style={{width: "50px"}}/>
                </a>
                <a href="https://www.facebook.com/p/Kayi-mezze-grill-100051110543913/" target="_blank" className="hover:opacity-80 footer-icon">
                <img src="/facebook.png" style={{width: "50px"}}/>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center w-full mt-8 text-sm">© 2025 Kayi Grill. All rights reserved. Built by <a href="https://faizstudio.co.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300 transition-colors">FaizStudio</a></div>
        </div>
      </footer>
    </div>
  )
}
