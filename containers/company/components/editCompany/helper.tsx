import { useMemo, useState } from 'react'
import { notify } from 'utils/notification'
import dynamic from 'next/dynamic'
import Button from 'components/ui/Button'

import type { DragEndEvent } from 'leaflet'
import type { MapModalProps } from './interface'
import styles from './editCompany.module.scss'

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  {
    ssr: false,
  }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  {
    ssr: false,
  }
)

const MapModal = ({ setValue, onClose }: MapModalProps) => {
  const [position, setPosition] = useState<[number, number]>([35.6892, 51.389])

  const moveMarker = useMemo(
    () => ({
      dragend(e: DragEndEvent) {
        const { _latlng } = e.target
        setPosition([_latlng.lat, _latlng.lng])
      },
    }),
    []
  )

  const submitHandler = () => {
    setValue(position)
    notify({
      message: 'موقعیت مکانی انتخاب شد.',
      config: { autoClose: 3000 },
    })
    onClose()
  }

  return (
    <>
      <p data-selector='info'>
        با جابجایی نشانگر، موقعیت مکانی آدرس شرکت را انتخاب کنید
      </p>
      <MapContainer
        className={styles['mapModal__container']}
        center={position}
        zoom={12}
        scrollWheelZoom
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position} draggable eventHandlers={moveMarker} />
      </MapContainer>
      <div data-selector='modal-footer'>
        <Button btnType='ghost' onClick={onClose}>
          انصراف
        </Button>
        <Button
          btnType='primary'
          bgColor='white-blue-gradient'
          onClick={submitHandler}
        >
          تایید آدرس
        </Button>
      </div>
    </>
  )
}

export default MapModal
