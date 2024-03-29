import { useState, useEffect } from 'react'
// @mui
import {
  Stack,
  Divider,
  Container,
  Unstable_Grid2 as Grid,
} from '@mui/material'
// hooks
import useResponsive from 'utils/hooks/useResponsive'
// _mock
import _mock, { _socials, _courses } from '_mock'
// components
import LoadingScreen from 'components/loading-screen'
//
// import Advertisement from '../../advertisement'
// import NewsletterElearning from '../../newsletter/e-learning'
import ReviewElearning from '../../review/e-learning'
// import { ElearningCourseListSimilar } from '../course/list'
import {
  ElearningCourseDetailsInfo,
  ElearningCourseDetailsHero,
  ElearningCourseDetailsSummary,
  ElearningCourseDetailsTeachersInfo,
} from '../course/details'
import {
  Course,
  CourseTeacher,
  useGetApiCoursesByIdQuery,
  useLazyGetApiCoursesByIdGraphQuery,
} from 'libs/redux/services/karnama'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { ElearningLandingFeaturedCourses } from '../landing'
import { useSelector } from 'react-redux'

import type { RootState } from 'libs/redux/store'
import type { UserLessonViewMinute } from 'libs/redux/services/karnama'
import { useIntl } from 'react-intl'

// ----------------------------------------------------------------------

const _mockCourse = _courses[0]

export default function ElearningCourseView() {
  const { query } = useRouter()
  const intl = useIntl()
  const isMdUp = useResponsive('up', 'md')
  const { accessToken } = useSelector((state: RootState) => state.auth)
  const { data, refetch, isLoading } = useGetApiCoursesByIdQuery({
    id: Number(query.id ?? 1144),
  })
  const [getGraph] = useLazyGetApiCoursesByIdGraphQuery()
  const [graph, setGraph] = useState<UserLessonViewMinute[]>([])
  const { details } = useSelector((state: RootState) => state.course)

  useEffect(() => {
    refetch()
    if (accessToken)
      getGraph({ id: Number(query.id ?? 1144) }).unwrap().then((t) => {
        setGraph(t)
      })
  }, [accessToken])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Head>
        {intl.formatMessage({ id: 'lang' }) === 'fa-IR' ?
          <title>دوره {data?.titleFa} - نماتک</title>
          :
          <title>Course {data?.title} - INSTART</title>
        }
      </Head>

      <ElearningCourseDetailsHero course={_mockCourse} />

      <Container
        sx={{
          overflow: 'hidden',
          pt: { xs: 5 },
          pb: { xs: 2 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 8 }}>
          {!isMdUp && (
            <Grid xs={12}>
              <ElearningCourseDetailsInfo course={_mockCourse} />
            </Grid>
          )}

          <Grid xs={12} md={7} lg={8}>
            <ElearningCourseDetailsSummary course={_mockCourse} graph={graph} />

            {/* <Stack direction='row' flexWrap='wrap' sx={{ mt: 5 }}>
              <Typography variant='subtitle2' sx={{ mt: 0.75, mr: 1.5 }}>
                Share:
              </Typography>

              <Stack direction='row' alignItems='center' flexWrap='wrap'>
                {_socials.map((social) => (
                  <Button
                    key={social.value}
                    size='small'
                    variant='outlined'
                    startIcon={<Iconify icon={social.icon} />}
                    sx={{
                      m: 0.5,
                      flexShrink: 0,
                      color: social.color,
                      borderColor: social.color,
                      '&:hover': {
                        borderColor: social.color,
                        bgcolor: alpha(social.color, 0.08),
                      },
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Stack> */}
          </Grid>

          <Grid xs={12} md={5} lg={4}>
            <Stack spacing={5}>
              {isMdUp && <ElearningCourseDetailsInfo course={_mockCourse} />}

              {/* <Advertisement
                advertisement={{
                  title: 'Advertisement',
                  description:
                    'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                  imageUrl: _mock.image.course(7),
                  path: '',
                }}
              /> */}
            </Stack>
          </Grid>
        </Grid>
        {<Divider sx={{ my: 5 }} />}

        <ElearningCourseDetailsTeachersInfo
          teachers={data?.courseTeachers as CourseTeacher[]}
          provider={data?.provider}
        />
      </Container>

      {isMdUp && <Divider />}

      <ReviewElearning />

      {/* <ElearningCourseListSimilar courses={courseSimilar} /> */}

      <ElearningLandingFeaturedCourses
        data={details?.category?.courses as Course[]}
      />

      {/* <NewsletterElearning /> */}
    </>
  )
}
