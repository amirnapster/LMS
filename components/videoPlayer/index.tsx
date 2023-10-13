import { useLogMutation } from 'libs/redux/services/karnama'
import { RootState } from 'libs/redux/store'
import { useEffect, useMemo, useRef } from 'react'
import { useSelector } from 'react-redux'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export const VideoJS = (props: any) => {
  const videoRef = useRef<any>(null)
  const playerRef = useRef<any>(null)
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { src, id, timeOfVideo, setShowNewUGQ } = props

  const [sendLog] = useLogMutation()

  const videoJsOptions = useMemo(
    () => ({
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
          type:
            src && src.endsWith('m3u8') ? 'application/x-mpegURL' : 'video/mp4',
        },
      ],
    }),
    [src]
  )

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    let isPlaying = false

    const localSendLog = (action: string) => {
      if (accessToken) {
        sendLog({
          playLogDto: {
            action,
            time: +player.currentTime().toFixed('0'),
            lessonId: +(window as any).lessonId,
            speed: player.playbackRate(),
          },
        })
      }
    }

    player.on(['waiting', 'pause'], () => {
      isPlaying = false
      setShowNewUGQ(true)
    })

    player.on('playing', () => {
      isPlaying = true
      setShowNewUGQ(false)
    })
    let secondCounter = 0
    setInterval(() => {
      if (isPlaying) {
        secondCounter += player.playbackRate()
        if (secondCounter >= 60) {
          secondCounter = 0
          localSendLog('Playing')
        }
      }
    }, 1000)

    player.on('waiting', () => {
      videojs.log('player is waiting')
    })

    player.on('timeupdate', () => {
      const currentTime = player.currentTime()
      localStorage.setItem(
        `currentTimeVideo-${(window as any).lessonIdProps}`,
        currentTime
      )
    })

    player.on('pause', () => {
      localSendLog('Pause')
    })

    player.on('play', () => {
      localSendLog('Play')
    })

    player.on('loadedmetadata', () => {
      // if (
      //   localStorage.getItem(
      //     `currentTimeVideo-${(window as any).lessonIdProps}`
      //   )
      // ) {
      //   player.currentTime(
      //     localStorage.getItem(
      //       `currentTimeVideo-${(window as any).lessonIdProps}`
      //     )
      //   )
      // } else {
      player.currentTime((window as any).timeOfVideo)
      // }
    })

    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  useEffect(() => {
    ; (window as any).lessonIdProps = id
      ; (window as any).timeOfVideo = timeOfVideo

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElements = document.querySelectorAll('video-js')

      videoElements.forEach((element) => element.remove())

      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js')
        ; (window as any).lessonId = id

      videoElement.classList.add('vjs-big-play-centered')
        ; (videoRef.current as HTMLDivElement).appendChild(videoElement)

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
        ; (window as any).lessonId = id

      player.autoplay(videoJsOptions.autoplay)
      player.src(videoJsOptions.sources)
    }
  }, [videoJsOptions, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  useEffect(() => {
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
