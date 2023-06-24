import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { playDrawer } from 'libs/redux/slices/navbar'
import { useGetApiCoursesByIdQuery } from 'libs/redux/services/karnama'
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { MenuOutlined, MoveToInbox, Mail } from '@mui/icons-material/'

import type { RootState } from 'libs/redux/store'
import Row from 'components/ui/Row'

function PlayComponent() {
  const dispatch = useDispatch()
  const { query } = useRouter()
  const { playDrawerStatus } = useSelector((state: RootState) => state.navbar)
  const { data } = useGetApiCoursesByIdQuery({ id: Number(query.slug?.[0]) })

  const sectionsData = data?.sections

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      dispatch(playDrawer(open))
    }

  const list = () => (
    <Box
      sx={{ width: 350 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {sectionsData?.map((section) => (
        <Row className='mt-1' direction='column'>
          <span>{section.title}</span>

          {section?.lessons?.map((lesson) => (
            <span>{lesson.title}</span>
          ))}

          <Divider />
        </Row>
      ))}
    </Box>
  )

  return (
    <Row className='my-1' direction='column' align='top'>
      <Button onClick={toggleDrawer(true)}>
        <MenuOutlined />
      </Button>
      <Drawer
        anchor={'left'}
        open={playDrawerStatus}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </Row>
  )
}

export default PlayComponent
