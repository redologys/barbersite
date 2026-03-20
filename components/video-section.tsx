"use client"

import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-[var(--spacing-s)] overflow-x-clip">
      <div className="container">
        <div className="rounded-[10px] w-full h-[650px] lg:h-[450px] overflow-hidden relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/video-poster.webp"
          >
            <source src="/videos/barbershop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={togglePlayPause}
            className="absolute bottom-5 right-5 w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white fill-white" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
