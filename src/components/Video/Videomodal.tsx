// src/components/Video/VideoModal.tsx
'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import {
  X, Volume2, VolumeX, Volume1, Volume,
  Expand, Shrink,
  Play, Pause, RotateCcw,
  Settings, Subtitles, Link as LinkIcon
} from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  subtitlesSrc?: string
}

const VideoModal = ({ isOpen, onClose, videoSrc, subtitlesSrc }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [volume, setVolume] = useState(1)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showOverlay, setShowOverlay] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isEnded, setIsEnded] = useState(false)
  const [isCCEnabled, setIsCCEnabled] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)

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
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }, [isMuted])

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

  // Keyboard shortcuts
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
        video.play().catch(() => setIsPlaying(false))
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

  // Video events
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => setCurrentTime(video.currentTime)
    const updateDuration = () => setDuration(video.duration)
    const handlePlay = () => {
      setIsPlaying(true)
      setIsEnded(false)
    }
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      setIsPlaying(false)
      setIsEnded(true)
    }

    video.addEventListener('timeupdate', updateTime)
    video.addEventListener('loadedmetadata', updateDuration)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('timeupdate', updateTime)
      video.removeEventListener('loadedmetadata', updateDuration)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.currentTime = parseFloat(e.target.value)
    }
  }

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX size={28} />
    if (volume <= 0.3) return <Volume size={28} />
    if (volume <= 0.6) return <Volume1 size={28} />
    return <Volume2 size={28} />
  }

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied to clipboard!'))
      .catch(() => alert('Failed to copy link.'))
  }

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
            onClick={copyLink}
            className="text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
            aria-label="Copy Link"
          >
            <LinkIcon size={26} />
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
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          onClick={togglePlayPause}
          muted={isMuted}
        >
          <source src={videoSrc} type="video/mp4" />
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

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3 bg-gradient-to-t from-black/90 to-transparent z-20">
          {/* Progress bar */}
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-gray-500 rounded-lg cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:h-3 
              [&::-webkit-slider-thumb]:w-3 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-white 
              [&::-webkit-slider-thumb]:transition-transform 
              [&::-webkit-slider-thumb]:hover:scale-125
              accent-red-600"
          />

          {/* Buttons row */}
          <div className="flex items-center justify-between mt-2 text-white">
            <div className="flex items-center gap-4">
              {/* Play/Pause or Replay */}
              {isEnded ? (
                <button onClick={handleReplay}>
                  <RotateCcw size={28} />
                </button>
              ) : (
                <button onClick={togglePlayPause}>
                  {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                </button>
              )}

              {/* Volume */}
              <div className="flex items-center gap-2">
                <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
                  {getVolumeIcon()}
                </button>
                {showVolumeSlider && (
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => updateVolume(parseFloat(e.target.value))}
                    className="w-24 accent-white"
                  />
                )}
              </div>

              {/* Time */}
              <span className="text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-4 relative">
              {/* Subtitles/CC */}
              {subtitlesSrc && (
                <button onClick={() => setIsCCEnabled(!isCCEnabled)}>
                  <Subtitles size={28} className={isCCEnabled ? 'text-white' : ''} />
                </button>
              )}

              {/* Settings */}
              <div className="relative">
                <button onClick={() => setShowSettings(!showSettings)}>
                  <Settings size={28} />
                </button>
                {showSettings && (
                  <div className="absolute bottom-10 right-0 bg-black/90 rounded-lg text-sm p-3 w-40 space-y-2">
                    <p className="text-gray-300 text-xs mb-1">Playback Speed</p>
                    {[0.5, 1, 1.5, 2].map(rate => (
                      <button
                        key={rate}
                        className={`w-full text-left px-2 py-1 rounded hover:bg-gray-700 ${playbackRate === rate ? 'text-white' : ''}`}
                        onClick={() => changePlaybackRate(rate)}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Fullscreen */}
              <button onClick={toggleFullscreen}>
                {isFullscreen ? <Shrink size={28} /> : <Expand size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

export default VideoModal