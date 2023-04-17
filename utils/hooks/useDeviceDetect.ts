const useDeviceDetect = () => {
  const userAgent =
    typeof window.navigator === 'undefined' ? '' : navigator.userAgent
  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  )

  return { isMobile }
}

export default useDeviceDetect
