import { useState } from 'react'
// @mui
import { BoxProps, Box } from '@mui/material'
// config
import { GOOGLE_MAP_API } from 'config-global'
// types
import { IOfficeMapProps } from 'types/contact'
//
import MapPopup from './MapPopup'
import MapMarker from './MapMarker'
import { mapStyle } from './styles'

// ----------------------------------------------------------------------

interface Props extends BoxProps {
  offices: IOfficeMapProps[]
}

export default function ContactMap({ offices, sx, ...other }: Props) {
  const [tooltip, setTooltip] = useState<IOfficeMapProps | any>(null)

  const [centerMap, setCenterMap] = useState({
    lat: offices[0].latlng[0],
    lng: offices[0].latlng[1],
  })

  const handleOpen = (lat: number, lng: number, office: IOfficeMapProps) => {
    setCenterMap({
      ...centerMap,
      lat: lat - 32,
      lng,
    })
    setTooltip(office)
  }

  return <Box sx={{ height: 480, overflow: 'hidden', ...sx }} {...other}></Box>
}
