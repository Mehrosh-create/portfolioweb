// src/components/Video/VideoModal.tsx
'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  X, Expand, Shrink, Settings, Play, Pause
} from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  subtitlesSrc?: string
  isYouTube?: boolean
}

const VideoModal = ({ isOpen, onClose, videoSrc, subtitlesSrc, isYouTube = false }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [volume, setVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)

  // store raf id; typed as number | null to satisfy TS
  const animationFrameRef = useRef<number | null>(null)

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    if (video.paused || video.ended) {
      video.play()
    } else {
      video.pause()
    }

    setShowOverlay(true)
    setTimeout(() => setShowOverlay(false), 600)
  }, [])

  const updateVolume = useCallback((newVol: number) => {
    setVolume(newVol)
    if (videoRef.current) {
      videoRef.current.volume = newVol
      setIsMuted(newVol === 0)
      videoRef.current.muted = newVol === 0
    }
  }, [])

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev
      if (videoRef.current) videoRef.current.muted = next
      return next
    })
  }, [])

  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current
    if (!container) return

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(err => {
        console.error("Error attempting fullscreen:", err)
      })
    } else {
      if (document.fullscreenElement === container) {
        document.exitFullscreen()
      }
    }
  }, [])

  // Keep timer & slider smooth and perfectly in sync using requestAnimationFrame
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isOpen) return

    // animation loop
    const loop = () => {
      if (video && !video.paused && !video.ended) {
        setCurrentTime(video.currentTime)
        animationFrameRef.current = requestAnimationFrame(loop)
      }
    }

    // start loop when playing
    if (isPlaying && !video.paused && !video.ended) {
      animationFrameRef.current = requestAnimationFrame(loop)
    }

    return () => {
      if (animationFrameRef.current != null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [isPlaying, isOpen])

  // Keyboard shortcuts + initial play setup when modal opens
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isOpen) return
      const video = videoRef.current
      if (!video) return

      switch (e.key.toLowerCase()) {
        case 'escape':
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            onClose()
          }
          break
        case ' ':
        case 'k':
          e.preventDefault()
          togglePlayPause()
          break
        case 'arrowright':
          video.currentTime = Math.min(video.currentTime + 5, duration)
          break
        case 'arrowleft':
          video.currentTime = Math.max(video.currentTime - 5, 0)
          break
        case 'arrowup':
          updateVolume(Math.min(volume + 0.1, 1))
          break
        case 'arrowdown':
          updateVolume(Math.max(volume - 0.1, 0))
          break
        case 'm':
          toggleMute()
          break
        case 'f':
          toggleFullscreen()
          break
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
      const video = videoRef.current
      if (video) {
        video.volume = volume
        video.muted = isMuted
        video.playbackRate = playbackRate

        // Wait for metadata to load before playing
        const tryPlay = () => {
          if (video.readyState >= 2) {
            if (isFinite(video.duration)) {
              setDuration(video.duration)
            }
            video.play().catch(() => setIsPlaying(false))
          } else {
            video.addEventListener('loadedmetadata', () => {
              if (isFinite(video.duration)) {
                setDuration(video.duration)
              }
              video.play().catch(() => setIsPlaying(false))
            }, { once: true })
          }
        }

        tryPlay()
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, playbackRate, volume, isMuted, duration, toggleMute, togglePlayPause, updateVolume, toggleFullscreen])

  // Track fullscreen state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === containerRef.current)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  // Video events (duration, play/pause/ended)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateDuration = () => {
      // sometimes duration can be NaN or Infinity; guard
      const d = isFinite(video.duration) ? video.duration : 0
      setDuration(d)
    }
    const handlePlay = () => {
      setIsPlaying(true)
      setIsEnded(false)
    }
    const handlePause = () => {
      setIsPlaying(false)
    }
    const handleEnded = () => {
      setIsPlaying(false)
      setIsEnded(true)
      // ensure RAF stops
      if (animationFrameRef.current != null) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
    const handleTimeUpdate = () => {
      // timeupdate event handler - currently not used for display
    }
    const handleCanPlay = () => {
      updateDuration()
    }
    const handleError = (e: Event) => {
      console.error('Video error:', e, video.error)
    }
    const handleLoadedData = () => {
      updateDuration()
    }

    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('durationchange', updateDuration)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('error', handleError)

    // Force load
    if (video.readyState >= 1) {
      updateDuration()
    }

    return () => {
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('durationchange', updateDuration)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('error', handleError)
    }
  }, [])

  const changePlaybackRate = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
    }
    setPlaybackRate(rate)
    setShowSettings(false)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top controls */}
        <div className="absolute top-4 right-4 flex items-center gap-3 z-20">
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Fullscreen"
          >
            {isFullscreen ? <Shrink size={28} /> : <Expand size={28} />}
          </button>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Close"
          >
            <X size={28} />
          </button>
        </div>

        {/* Overlay Play/Pause */}
        {showOverlay && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-black/70 rounded-full p-6">
              {isPlaying ? <Pause size={60} className="text-white" /> : <Play size={60} className="text-white" />}
            </div>
          </div>
        )}

        {/* Video */}
        {isYouTube ? (
          <iframe
            className="w-full h-full"
            src={videoSrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            onClick={togglePlayPause}
            muted={isMuted}
            preload="metadata"
            playsInline
            src={videoSrc}
          >
            {subtitlesSrc && (
              <track
                src={subtitlesSrc}
                kind="subtitles"
                srcLang="en"
                label="English"
                default
              />
            )}
            Your browser does not support video.
          </video>
        )}

        {/* Bottom Controls - Only show for non-YouTube videos */}
        {!isYouTube && (
          <div className="absolute bottom-4 left-4 z-20">
            {/* Settings - Playback Speed */}
            <div className="relative">
              <button onClick={() => setShowSettings(!showSettings)} className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2" aria-label="Settings">
                <Settings size={28} />
              </button>
              {showSettings && (
                <div className="absolute bottom-12 left-0 bg-black/90 rounded-lg text-sm p-3 w-40 space-y-2">
                  <p className="text-gray-300 text-xs mb-1">Playback Speed</p>
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                    <button
                      key={rate}
                      className={`w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${playbackRate === rate ? 'text-white bg-gray-700' : 'text-gray-400'}`}
                      onClick={() => changePlaybackRate(rate)}
                    >
                      {rate}x {rate === 1 && '(Normal)'}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default VideoModal