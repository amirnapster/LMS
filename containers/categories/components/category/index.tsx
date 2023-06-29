import { useState, useEffect } from 'react'
// @mui
import { Container, Stack, Typography, Button, Box } from '@mui/material'
// config
import { NAV } from 'config-global'
// _mock
import { _courses } from '_mock'
// components
import Iconify from 'components/iconify'
//
import {
  GetCoursesApiResponse,
  useGetApiCategoriesByIdQuery,
  useGetCoursesQuery,
} from 'libs/redux/services/karnama'
import NewsletterElearning from 'sections/newsletter/e-learning/NewsletterElearning'
import ElearningFilters from 'sections/_e-learning/course/filters/ElearningFilters'
import { ElearningCourseList } from 'sections/_e-learning/course/list'
import { useRouter } from 'next/router'
import Head from 'next/head'

// ----------------------------------------------------------------------

export default function CategoryComponent() {
  const {
    query: { id },
  } = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data } = useGetApiCategoriesByIdQuery({ id: Number(id) })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fakeLoading = async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500)
      })
      setLoading(false)
    }
    fakeLoading()
  }, [])

  const handleMobileOpen = () => {
    setMobileOpen(true)
  }

  const handleMobileClose = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <Head>
        <title>دسته بندی {data?.title} - نماتک</title>
      </Head>

      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            py: 5,
          }}
        >
          <Typography variant='h2'>{data?.title}</Typography>

          <Button
            color='inherit'
            variant='contained'
            startIcon={<Iconify icon='carbon:filter' width={18} />}
            onClick={handleMobileOpen}
            sx={{
              display: { md: 'none' },
            }}
          >
            Filters
          </Button>
        </Stack>

        <Stack direction={{ xs: 'column', md: 'row' }}>
          {/* <ElearningFilters
            mobileOpen={mobileOpen}
            onMobileClose={handleMobileClose}
          /> */}

          <Box
            sx={{
              flexGrow: 1,
              pl: { md: 8 },
              mb: 8,
              width: { md: `calc(100% - ${NAV.W_DRAWER}px)` },
            }}
          >
            <ElearningCourseList
              courses={data?.courses as GetCoursesApiResponse}
              loading={loading}
            />
          </Box>
        </Stack>
      </Container>

      {/* <NewsletterElearning /> */}
    </>
  )
}
