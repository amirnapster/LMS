import { useSelector } from 'react-redux'
import Col from 'components/ui/Col'
import {
  useGetFeaturedQuery,
  useSearchCourseQuery,
} from 'libs/redux/services/karnama'
import NextLink from 'next/link'
import { Stack, Card, Typography, Box, Link } from '@mui/material'
import { paths } from 'routes/paths'
import Image from 'components/image'
import TextMaxLine from 'components/text-max-line'
import Iconify from 'components/iconify'
import type { Course } from 'libs/redux/services/karnama'
import type { RootState } from 'libs/redux/store'
import styles from './simpleSearch.module.scss'
import { durationToString } from 'utils/helpers/formatTime'
import { useIntl } from 'react-intl'

const SearchResultContent = () => {
  const { textSearch } = useSelector((state: RootState) => state.navbar)
  const intl = useIntl()
  const { data: searchCourseData } = useSearchCourseQuery(
    { term: textSearch },
    { skip: !textSearch }
  )

  const { data: getFeatureData } = useGetFeaturedQuery()

  const lessonCount = (course: Course) =>
    course?.sections?.reduce(
      (acc, section) => (section?.lessons?.length ?? 0) + acc,
      0
    )

  const renderData = () => {
    if (!textSearch) return getFeatureData
    return searchCourseData
  }

  return (
    <Col span={24} className={styles['simpleSearch__body']}>
      {renderData()?.length ? (
        renderData()?.map((course) => (
          <Link href={`/courses/${course.id}/${course.titleFa}/`}>
            <Card
              sx={{
                display: { sm: 'flex' },
                '&:hover': {
                  boxShadow: (theme) => theme.customShadows.z24,
                },
                marginBlockEnd: '2rem',
                // ...(vertical && {
                //   flexDirection: 'column',
                // }),
              }}
            >
              <Box sx={{ flexShrink: { sm: 0 } }}>
                <Image
                  alt='avatar'
                  src={course.imageUrl as string}
                  sx={{
                    height: 1,
                    objectFit: 'cover',
                    width: { sm: 240 },
                    // ...(vertical && {
                    //   width: { sm: 1 },
                    //   height: 220,
                    // }),
                  }}
                />
              </Box>

              {/* {true && (
        <Label
          color='warning'
          variant='filled'
          sx={{
            top: 12,
            left: 12,
            position: 'absolute',
            textTransform: 'uppercase',
          }}
        >
          Best Seller
        </Label>
      )} */}

              <Stack spacing={3} sx={{ p: 3 }}>
                <Stack
                // spacing={{
                //   xs: 3,
                //   sm: vertical ? 3 : 1,
                // }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Typography
                      variant='overline'
                      sx={{ color: 'primary.main' }}
                    >
                      {course.category?.title}
                    </Typography>

                    {/* <Typography variant='h4'>
              {priceSale > 0 && (
                <Box
                  component='span'
                  sx={{
                    mr: 0.5,
                    color: 'text.disabled',
                    textDecoration: 'line-through',
                  }}
                >
                  {fCurrency(priceSale)}
                </Box>
              )}
              {fCurrency(price)}
            </Typography> */}
                  </Stack>

                  <Stack spacing={1}>
                    <TextMaxLine variant='h6' line={1}>
                      {course.titleFa}
                    </TextMaxLine>

                    <TextMaxLine
                      variant='body2'
                      color='text.secondary'
                    // sx={{
                    //   ...(vertical && {
                    //     display: { sm: 'none' },
                    //   }),
                    // }}
                    >
                      {course.shortDescription}
                    </TextMaxLine>
                  </Stack>
                </Stack>

                {/* <Stack
          spacing={1.5}
          direction='row'
          alignItems='center'
          flexWrap='wrap'
          divider={
            <Divider orientation='vertical' sx={{ height: 20, my: 'auto' }} />
          }
        >
          <Stack spacing={0.5} direction='row' alignItems='center'>
            <Iconify icon='carbon:star-filled' sx={{ color: 'warning.main' }} />
            <Box sx={{ typography: 'h6' }}>
              {Number.isInteger(ratings) ? `${ratings}.0` : ratings}
            </Box>

            {reviews && (
              <Link variant='body2' sx={{ color: 'text.secondary' }}>
                ({fShortenNumber(reviews)} reviews)
              </Link>
            )}
          </Stack>

          <Stack direction='row' sx={{ typography: 'subtitle2' }}>
            {fShortenNumber(students)}
            <Box component='span' typography='body2' sx={{ ml: 0.5 }}>
              students
            </Box>
          </Stack>
        </Stack> */}

                {/* <Stack direction='row' alignItems='center'>
          <Avatar src={''} />

          <Typography variant='body2' sx={{ ml: 1, mr: 0.5 }}>
            {teachers[0]?.name}
          </Typography>

          {teachers?.length > 0 && (
            <Link underline='always' color='text.secondary' variant='body2'>
              + {teachers?.length} teachers
            </Link>
          )}
        </Stack> */}

                {/* <Divider
          sx={{
            borderStyle: 'dashed',
            display: { sm: 'none' },
            ...(vertical && {
              display: 'block',
            }),
          }}
        /> */}

                <Stack
                  direction='row'
                  flexWrap='wrap'
                  alignItems='center'
                  sx={{
                    color: 'text.disabled',
                    '& > *:not(:last-child)': { mr: 2.5 },
                  }}
                >
                  <Stack
                    direction='row'
                    alignItems='center'
                    sx={{ typography: 'body2' }}
                  >
                    <Iconify icon='carbon:time' sx={{ mr: 1 }} />{' '}
                    {durationToString(course.totalDuration as number, intl.formatMessage({ id: 'hour' }), intl.formatMessage({ id: 'minute' }))}
                  </Stack>

                  <Stack
                    direction='row'
                    alignItems='center'
                    sx={{ typography: 'body2' }}
                  >
                    <Iconify icon='carbon:document' sx={{ mr: 1 }} />
                    {`${lessonCount(course)} درس`}
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </Link>
        ))
      ) : (
        <span>دوره ای با این اسم وجود ندارد</span>
      )}
    </Col>
  )
}

export default SearchResultContent
