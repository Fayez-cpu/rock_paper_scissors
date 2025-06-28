"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Users, Utensils, MapPin, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import '../../styles.css';
export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <Link href="/about" className="hover:text-blue-300 border-b-2 border-white">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-blue-300">
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
        className="relative bg-cover bg-center h-[40vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://img1.wsimg.com/isteam/ip/a62cca40-86b6-4f49-bb37-37dc78e0fa08/shutterstock_563091901.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Kayi Grill</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Bringing authentic Mediterranean flavors to your table since 2020
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white mb-pd">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/plates2.jpg"
                alt="Our restaurant"
                width={600}
                height={400}
                className="rounded-lg shadow-md br-10"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-800 mx-600 text-center">The history of KAYI
              </h2>
              <p className="text-blue-600 mb-4 mx-600 text-center">
              The owners have named the Restaurant after their daughters.
              </p>
              <p className="text-blue-600 mb-4 mx-600 text-center">
              With extensive experience gained from working over all over
               the Mediterranean we are pleased to offer you an establishment 
               where you can experience signature dishes from all over the region, 
               all served with our warm welcome.
              </p>
              <p className="text-blue-600 mx-600 text-center">
              We  aim to connect with you in this way and take you on a momentous journey, tantalizing your senses through an adventure in taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-blue-50 mb-pd">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center br-10">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Authentic Cuisine</h3>
              <p className="text-blue-600">
                We stay true to traditional recipes and cooking methods, using imported spices and locally sourced
                ingredients to create genuine Mediterranean flavors.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center br-10">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-800" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Family Atmosphere</h3>
              <p className="text-blue-600">
                We believe in treating our guests like family, creating a warm and welcoming environment where memories
                are made around the dinner table.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center br-10">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-800"
                >
                  <path d="M12 2v1"></path>
                  <path d="M12 21v1"></path>
                  <path d="m4.6 4.6.7.7"></path>
                  <path d="m18.7 18.7.7.7"></path>
                  <path d="M2 12h1"></path>
                  <path d="M21 12h1"></path>
                  <path d="m4.6 19.4.7-.7"></path>
                  <path d="m18.7 5.3.7-.7"></path>
                  <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Fresh Ingredients</h3>
              <p className="text-blue-600 mx-600">
                We source the freshest ingredients daily, supporting local farmers and ensuring that every dish we serve
                meets our high standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>


     

      {/* Visit Us Section */}
      <section className="py-16 bg-blue-50 mb-pd">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Visit Us Today</h2>
          <p className="text-blue-600 max-w-2xl mx-auto mb-8">
            We invite you to experience the rich flavors and warm hospitality of Kayi Grill. Whether you're joining us
            for a family dinner, a romantic evening, or a celebration, we look forward to serving you.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/menu"
              className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              <Utensils className="mr-2 h-5 w-5" /> View Our Menu
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-800 border border-blue-800 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" /> Contact Us
            </Link>
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
