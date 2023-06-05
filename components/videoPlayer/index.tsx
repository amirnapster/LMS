import React, { RefObject } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const VideoJS = (props: any) => {
  const videoRef = React.useRef<any>(null)
  const playerRef = React.useRef<any>(null)
  const { options, onReady } = props

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js')

      videoElement.classList.add('vjs-big-play-centered')
      ;(videoRef.current as HTMLDivElement).appendChild(videoElement)

      const player = videojs(videoElement, options, () => {
        videojs.log('player is ready')
        const s1= options.sources[0]
        if(s1.src.endsWith('mp4'))
        {
            player.addRemoteTextTrack({ kind: 'subtitles',
            src: s1.src.replace('.mp4','.fa.vtt'),
            srclang: "fa",
            label: "فارسی",
            default: true})
            player.addRemoteTextTrack({ kind: 'subtitles',
            src: s1.src.replace('.mp4','.vtt'),
            srclang: "en",
            label: "انگلسی",
            default: false})
        }
        if (onReady) onReady(player)
      })

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current

      player.autoplay(options.autoplay)
      player.src(options.sources)
     console.log(options.sources)

    
        
      

    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  )
}

export default VideoJS
