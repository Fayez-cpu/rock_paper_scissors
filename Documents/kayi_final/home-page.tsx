"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, MapPin, Phone, Mail, ChevronLeft, ChevronRight, Star, Car } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import './styles.css';
import Homey from '@/components/ReviewsCarousel';
import ReviewCarousel from "./components/review-carousel"
import CardSlider from "./components/CardSlider"


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const words = ["Flavors", "Experience"]
  const [currentReview, setCurrentReview] = useState(0)
  const intervalRef = useRef(null)

  // Sample reviews data
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "The lamb kebab was absolutely delicious! Perfectly seasoned and cooked to perfection. The atmosphere was warm and inviting, and the staff made us feel like family. Will definitely be coming back!",
      date: "October 2023",
      image: null,
      avatar: "/placeholder.svg?height=60&width=60&text=SJ",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Authentic Mediterranean cuisine at its finest. The hummus and falafel were the best I've had outside of my travels to the Middle East. Great service and reasonable prices too!",
      date: "September 2023",
      image: "/placeholder.svg?height=200&width=300&text=Hummus+Plate",
      avatar: "/placeholder.svg?height=60&width=60&text=MC",
    },
    {
      name: "Olivia Rodriguez",
      rating: 4,
      text: "Kayi Grill offers a wonderful dining experience. The baklava dessert was heavenly! My only suggestion would be to add more vegetarian options to the menu. Overall, a great place for a special dinner.",
      date: "August 2023",
      image: "/placeholder.svg?height=200&width=300&text=Baklava",
      avatar: "/placeholder.svg?height=60&width=60&text=OR",
    },
    {
      name: "Ahmed Hassan",
      rating: 5,
      text: "As someone who grew up with Mediterranean food, I can confidently say that Kayi Grill serves the most authentic dishes I've found in this city. The flavors transported me back home!",
      date: "July 2023",
      image: null,
      avatar: "/placeholder.svg?height=60&width=60&text=AH",
    },
  ]

  // Reset timer and start a new one
  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 2000) // Changed to 2 seconds
  }, [reviews.length])

  // Function to handle next review (with infinite loop)
  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
    resetTimer() // Reset timer when manually navigating
  }, [reviews.length, resetTimer])

  // Function to handle previous review (with infinite loop)
  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
    resetTimer() // Reset timer when manually navigating
  }, [reviews.length, resetTimer])

  // Function to go to a specific review
  const goToReview = useCallback(
    (index) => {
      setCurrentReview(index)
      resetTimer() // Reset timer when manually navigating
    },
    [resetTimer],
  )

  useEffect(() => {
    // Initial timer setup
    resetTimer()

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [resetTimer])

  return (
    <div className="min-h-screen bg-white font-sans ">
      <style jsx global>{`
        @keyframes fadeInOut {
          0%, 45%, 100% { opacity: 0; transform: translateY(-20px); }
          50%, 95% { opacity: 1; transform: translateY(0); }
        }
        .word-container {
          display: inline-flex;
          align-items: baseline;
          white-space: nowrap;
        }
        .word-animation-container {
          display: inline-block;
          position: relative;
          width: 150px;
          height: 1.2em;
          overflow: hidden;
          margin-left: 0.5rem;
          vertical-align: baseline;
        }
        .animate-word {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          animation: fadeInOut 5s infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 20s linear infinite;
        }
      `}</style>

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
            <a href="/" className="hover:text-blue-300 border-b-2 border-white">
              Home
            </a>
            <Link href="/menu" className="hover:text-blue-300">
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
            <a href="/" className="block py-5 text-3xl " onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <Link href="/menu" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link href="/about" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <a href="/contact" className="block py-5 text-3xl" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[60vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://img1.wsimg.com/isteam/ip/a62cca40-86b6-4f49-bb37-37dc78e0fa08/shutterstock_563091901.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1920,m')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Authentic Mediterranean Cuisine
          </h2>
          <p className="text-2xl md:text-4xl">
            <span className="word-container">
             
              <span className="word-animation-container" style={{    transform: "translate(-8px, 4px)"}}>
                <span className="animate-word" style={{ animationDelay: "0s" }}>
                  
                </span>
                <span className="animate-word" style={{ animationDelay: "2.5s" }}>
                  
                </span>
              </span>
            </span>
          </p>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 bg-blue-50 mb-pd">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden mx-450 br-10 m-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-48 overflow-hidden h-14">
                <Image
                  src="/mixed-grill.webp"
                  alt="Lamb Kebab"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center mx-450">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Mixed Grill</h3>
                <p className="text-blue-600">
                Marinated chunks of Spring Lamb Shish, Chicken Shish Taouk, and Lamb Kofta slowly smoke fired over Peruvian wood charcoal.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden mx-450 br-10 m-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-48 overflow-hidden h-14">
                <Image
                  src="/chicken_shawarma.jpeg"
                  alt="Chicken Shawarma"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Chicken Shawarma
                </h3>
                <p className="text-blue-600">
                Succulent marinated chicken, layered on a vertical rotisserie where it's slow-roasted in its own juices until perfectly tender and extra flavorful.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg shadow-md overflow-hidden mx-450 br-10 m-auto"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-48 overflow-hidden h-14">
                <Image
                  src="/grilled-prawns.webp"
                  alt="Baklava"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Grilled King Prawns
                </h3>
                <p className="text-blue-600">
                Succulent king prawns left overnight in our signature marinade smoke fired over Peruvian wood charcoal and then adorned with our in-house special sauce
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Aim Section */}
      <section className="py-16 bg-white mb-pd">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <Image
                src="/home_img_1.webp"
                alt="Our aim"
                width={550}
                height={412.5}
                className="rounded-lg shadow-md homeImg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-blue-800 header-text text-center mx-600">Our aim</h2>
              <p className="text-blue-600 mx-600 text-center">
                Each member of our experienced, professional team works to ensure you enjoy an experience to savour at
                KAYI. Our aim is to match your expectations, or even better, to exceed them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Mediterranean Cuisine Section */}
      <section className="py-16 bg-blue-50 mb-pd">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 ">
              <Image
                src="/home_img_2.webp"
                alt="Authentic Mediterranean cuisine"
                width={600}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-blue-800 text-center mx-600">Authentic Mediterranean cuisine</h2>
              <p className="text-blue-600 mx-600 text-center">
                Our signature menu, incorporating authentic Mediterranean cuisine while at the same time introducing
                signature dishes from the region, has been carefully planned by our team of chefs. It is largely
                influenced by their industry wide experience over a number of years.
              </p>
              <p className="mt-4 text-blue-600 mx-600 text-center">
                Our intention is to keep our menu uncomplicated, with each dish having its own distinctive flavour,
                faithful to its base ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-16 bg-blue-50 ">
        <CardSlider/>
      </section>
                 {/* <Homey></Homey> */} 
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
