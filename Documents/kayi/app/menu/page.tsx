"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronLeft, ChevronRight, Home, Download, MapPin, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import '../../styles.css';

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  // Menu pages - replace with your actual menu images
  const menuPages = [
    "/menu1.PNG", // Cover page
    "/menu2.png", // Page 1
    "/menu3.png", // Page 2
    "/menu4.png", // Page 3
    "/menu5.png", // Page 4 (if you have more pages, add them here)
    "/menu6.png",
    "/menu7.png",
    "/menu8.png",
  ]

  // Fallback to placeholders if images aren't available yet
  const fallbackPages = [
    "/menu1.PNG",
    "/menu2.png",
    "/menu3.png",
    "/menu4.png",
    "/menu5.png",
    "/menu6.png",
    "/menu7.png",
    "/menu8.png",
  ]

  // Use real menu pages if available, otherwise use placeholders
  const pagesToUse = menuPages.every((page) => page.includes("menu-images")) ? menuPages : fallbackPages
  const totalPages = pagesToUse.length

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const goToPage = (pageIndex) => {
    if (pageIndex >= 0 && pageIndex < totalPages) {
      setCurrentPage(pageIndex)
    }
  }

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
            <Link href="/menu" className="hover:text-blue-300 border-b-2 border-white">
              Menu
            </Link>
            <Link href="/about" className="hover:text-blue-300">
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

      {/* Menu Title */}
      <div className="container mx-auto py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-2">Our Menu</h1>
        <p className="text-blue-600 text-lg mb-8">Explore our authentic Mediterranean dishes</p>


      </div>

      {/* Improved Responsive Menu Page Viewer */}
      <div className="container mx-auto pb-16 px-4">
        <div className="flex flex-col items-center">
          {/* Menu Page Display - Improved for larger screens */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
            <div className="relative" style={{ paddingTop: "140%" }}>
              {/* Current page image */}
              <Image
                src={pagesToUse[currentPage] || "/placeholder.svg"}
                alt={`Menu page ${currentPage + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Navigation Controls - Scaled to match menu size */}
          <div className="flex justify-between items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mt-6">
            <button
              onClick={prevPage}
              className="bg-blue-800 text-white p-2 md:p-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 0}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="text-blue-800 font-medium text-lg md:text-xl">
              Page {currentPage + 1} of {totalPages}
            </div>

            <button
              onClick={nextPage}
              className="bg-blue-800 text-white p-2 md:p-3 rounded-full hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages - 1}
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Page Dots Navigation */}
          <div className="flex justify-center mt-4 flex-wrap gap-2 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            {pagesToUse.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                  currentPage === index ? "bg-blue-800" : "bg-blue-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Keyboard Navigation Instructions */}
          <div className="mt-4 text-blue-600 text-sm text-center">
            <p>You can also use keyboard arrow keys to navigate</p>
          </div>

          {/* Download Option */}
          <div className="mt-8 text-center">
            <p className="text-blue-600 mb-4">Can't see the menu properly?</p>
            <a
              href="/menu.pdf"
              download
              className="inline-flex items-center bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              <Download className="mr-2 h-5 w-5" /> Download PDF Menu
            </a>
          </div>
        </div>
      </div>

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
