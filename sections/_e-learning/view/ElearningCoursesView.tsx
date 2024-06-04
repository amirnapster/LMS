import { useState, useEffect } from 'react'
// @mui
import { Container, Stack, Typography, Button, Box } from '@mui/material'
// config
import { NAV } from 'config-global'
// _mock
import { _courses } from '_mock'
// components
//
import {
  GetCoursesApiResponse,
  useGetCoursesQuery,
} from 'libs/redux/services/karnama'
import NewsletterElearning from '../../newsletter/e-learning'
import ElearningFilters from '../course/filters'
import { ElearningCourseList } from '../course/list'

// ----------------------------------------------------------------------

export default function ElearningCoursesView() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const { data, error } = useGetCoursesQuery()
  const groupedCourses = data && Object.groupBy(data, ({ categoryTitle }) => categoryTitle);
  console.log(groupedCourses)

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    console.log("errpr", error)
    //if(error?.name==403)
    //console.log("403")
  }, [error])
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
      <Container>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{
            py: 5,
          }}
        >
          <h1>دوره ها</h1>

          {/* <Button
            color='inherit'
            variant='contained'
            startIcon={<Iconify icon='carbon:filter' width={18} />}
            onClick={handleMobileOpen}
            sx={{
              display: { md: 'none' },
            }}
          >
            Filters
          </Button> */}
        </Stack>
        {groupedCourses&& Object.keys(groupedCourses).map(t => <Button
        variant='outlined' sx={{mr:2,mb:1}}
        href={`#category-${groupedCourses[t][0].categoryId}`}>{t}</Button>)}

        <Stack direction={{ xs: 'column', md: 'column' }}>
          {/* <ElearningFilters
            mobileOpen={mobileOpen}
            onMobileClose={handleMobileClose}
          /> */}

          <br />
          {(loading || !groupedCourses ? <ElearningCourseList courses={[]} loading={loading} /> :
            (Object.keys(groupedCourses).map(t =>
              <>
                <div id={`category-${groupedCourses[t][0].categoryId}`}></div>
                <h2   style={{ marginTop: "5rem" }}>{t}</h2>
                <Box
                  sx={{
                    flexGrow: 1,
                    mb: 8,
                    mt: 3
                  }}
                >
                  <ElearningCourseList
                    courses={groupedCourses[t] as GetCoursesApiResponse}
                    loading={loading}
                  />
                </Box>
              </>
            )))}

        </Stack>
      </Container>

      {/* <NewsletterElearning /> */}
    </>
  )
}
