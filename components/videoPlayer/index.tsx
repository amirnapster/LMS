import { useLogMutation } from 'libs/redux/services/karnama'
import React, { RefObject, useEffect, useMemo } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const VideoJS = (props: any) => {
  const videoRef = React.useRef<any>(null)
  const playerRef = React.useRef<any>(null)
  const { src, id } = props

  const [sendLog] = useLogMutation()

  const videoJsOptions = useMemo(() => {
    return {
      autoplay: true,
      controls: true,

      textTrackSettings: false,

      plugins: {
        hotkeys: {
          volumeStep: 0.1,
          seekStep: 5,
          enableModifiersForNumbers: false,
        },

        playbackRates: [0.5, 1, 1.5, 2],
      },

      fluid: true,
      sources: [
        {
          src: src as string,
          type: src
            ? src.endsWith('m3u8')
              ? 'application/x-mpegURL'
              : 'video/mp4'
            : '',
        },
      ],
    }
  }, [src])

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    var isPlaying = false

    const localSendLog = (action: string) => {
      console.log(player)
      sendLog({
        playLogDto: {
          action: action,
          time: +player.currentTime().toFixed('0'),
          lessonId: +(window as any).lessonId,
          speed: player.playbackRate(),
        },
      })
    }

    player.on(['waiting', 'pause'], function () {
      isPlaying = false
    })

    player.on('playing', function () {
      isPlaying = true
    })

    setInterval(() => {
      if (isPlaying) {
        localSendLog('Playing')
      }
    }, 10000)

    player.on('waiting', () => {
      videojs.log('player is waiting')
    })

    player.on('timeupdate', function () {
      var currentTime = player.currentTime()
      localStorage.setItem('currentTimeVideo-' + id, currentTime)
    })

    player.on('pause', () => {
      localSendLog('Pause')
    })

    player.on('play', () => {
      localSendLog('Play')
    })

    player.on('loadedmetadata', () => {
      player.currentTime(localStorage.getItem(`currentTimeVideo-${id}`))
    })

    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElements = document.querySelectorAll('video-js')

      videoElements.forEach((element) => element.remove())

      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js')
      ;(window as any).lessonId = id

      videoElement.classList.add('vjs-big-play-centered')
      ;(videoRef.current as HTMLDivElement).appendChild(videoElement)

      const player = videojs(videoElement, videoJsOptions, () => {
        videojs.log('player is ready')
        const s1 = videoJsOptions.sources[0]
        if (s1.src.endsWith('mp4')) {
          player.addRemoteTextTrack({
            kind: 'subtitles',
            src: s1.src.replace('.mp4', '.fa.vtt'),
            srclang: 'fa',
            label: 'فارسی',
            default: true,
          })
          player.addRemoteTextTrack({
            kind: 'subtitles',
            src: s1.src.replace('.mp4', '.vtt'),
            srclang: 'en',
            label: 'انگلسی',
            default: false,
          })
        }
        if (handlePlayerReady) handlePlayerReady(player)
      })

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current
      ;(window as any).lessonId = id

      player.autoplay(videoJsOptions.autoplay)
      player.src(videoJsOptions.sources)
    }
  }, [videoJsOptions, videoRef])

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
