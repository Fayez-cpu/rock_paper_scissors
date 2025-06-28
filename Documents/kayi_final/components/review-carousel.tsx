"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Absolutely fantastic product! The quality exceeded all my expectations. I've been using it for months now and it still works perfectly.",
    date: "2 days ago",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Great value for money and incredibly fast shipping. The product arrived exactly as described and the packaging was excellent.",
    date: "1 week ago",
    verified: true,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    comment:
      "Really impressed with the build quality and attention to detail. The design is beautiful and it works exactly as advertised.",
    date: "2 weeks ago",
    verified: false,
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Outstanding customer support and product quality. Had an issue initially but the team resolved it quickly and professionally.",
    date: "3 weeks ago",
    verified: true,
  },
  {
    id: 5,
    name: "Lisa Park",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4,
    comment:
      "Solid product that delivers on its promises. The interface is intuitive and the features work great. Perfect for what I needed.",
    date: "1 month ago",
    verified: true,
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center justify-center gap-1 mb-4">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
        />
      ))}
    </div>
  )
}

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now())

  // Minimum swipe distance (in px) to trigger navigation
  const minSwipeDistance = 50

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setLastInteractionTime(Date.now())
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
      setLastInteractionTime(Date.now()) // Reset auto-scroll timer
    } else if (isRightSwipe) {
      goToPrevious()
      setLastInteractionTime(Date.now()) // Reset auto-scroll timer
    }
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(goToNext, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext, lastInteractionTime])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Customer Reviews</h1>
        <p className="text-muted-foreground">See what our customers are saying</p>
      </div>

      {/* Carousel Container */}
      <div
        className="relative  rounded-xl p-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: "pan-y" }} // Allow vertical scrolling but handle horizontal swipes
      >
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg"
          onClick={() => {
            goToPrevious()
            setLastInteractionTime(Date.now())
          }}
          aria-label="Previous review"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md hover:shadow-lg"
          onClick={() => {
            goToNext()
            setLastInteractionTime(Date.now())
          }}
          aria-label="Next review"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Review Content */}
        <div className="overflow-hidden select-none">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 px-8">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="text-center space-y-6">
                      {/* Avatar */}
                      <Avatar className="h-16 w-16 mx-auto">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                        <AvatarFallback className="text-lg font-semibold">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      {/* Rating */}
                      <StarRating rating={review.rating} />

                      {/* Comment */}
                      <blockquote className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto font-medium">
                        "{review.comment}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg text-gray-900">{review.name}</h3>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                          <span>{review.date}</span>
                          {review.verified && (
                            <>
                              <span>•</span>
                              <span className="text-green-600 font-medium">Verified Purchase</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Counter */}
      <div className="text-center mt-4">
      </div>
    </div>
  )
}
