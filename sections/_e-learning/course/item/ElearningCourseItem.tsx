import { useRef } from 'react'
import { useRouter } from 'next/router'
import {
  Stack,
  Card,
  Typography,
  Box,
  Link,
  LinearProgress,
  linearProgressClasses,
} from '@mui/material'
import Image from 'components/image'
import Iconify from 'components/iconify'
import TextMaxLine from 'components/text-max-line'
import Row from 'components/ui/Row'

import type { Course } from 'libs/redux/services/karnama'
import { styled } from '@mui/material/styles'
import { durationToString } from 'utils/helpers/formatTime'

type Props = {
  course: Course
  vertical?: boolean
}

export default function ElearningCourseItem({ course, vertical }: Props) {
  const countRef = useRef<number>(0)
  const { asPath } = useRouter()
  const lessonCount = course?.sections?.reduce(
    (acc, section) => (section?.lessons?.length ?? 0) + acc,
    0
  )

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 7,
    borderRadius: 2,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }))

  let duration = 0;
  if (course?.sections)
    for (let i = 0; i < course.sections.length; i++) {
      const section = course.sections[i]
      if (section?.lessons)
        for (let j = 0; j < section.lessons.length; j++) {
          const lesson = section.lessons[j]
          if (lesson)
            duration += lesson.duation??0
        }

    }
    console.log("duration",duration,course.totalDuration)
  course?.sections?.map((section) => {
    section?.lessons?.map((lesson) => {
      countRef.current = countRef.current + (lesson?.duation as number)
    })
  })

  return (
    <Link href={`/courses/${course.id}`}>
      <Card
        sx={{
          display: { sm: 'flex' },
          boxShadow:
            '0px 0 22px  10px rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)',
          ...(vertical && {
            flexDirection: 'column',
          }),
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
              ...(vertical && {
                width: { sm: 1 },
                height: 220,
              }),
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
            spacing={{
              xs: 3,
              sm: vertical ? 3 : 1,
            }}
          >
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
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

            <Stack
              style={{ direction: 'rtl' }}
              spacing={1}
              sx={{ margin: '0 !important' }}
            >
              <TextMaxLine variant='h6' line={1}>
                {course.titleFa}
              </TextMaxLine>

              {asPath.startsWith('/dashboard/') && (
                <>
                  <Row className='w-100' justify='space-between'>
                    <span data-selector='badge'></span>
                    <span data-selector='badge' style={{ color: "#1a90ff", fontWeight: "bold" }}>{(100 * duration / (course?.totalDuration as number)).toFixed(0)}%</span>
                  </Row>
                  <BorderLinearProgress
                    variant='determinate'
                    value={
                      100 * duration / (course?.totalDuration as number)
                    }
                  />
                </>
              )}

              {/* <TextMaxLine
                variant='body2'
                color='text.secondary'
                sx={{
                  ...(vertical && {
                    display: { sm: 'none' },
                  }),
                }}
              >
                {course.shortDescription}
              </TextMaxLine> */}
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
            justifyContent='space-between'
            flexWrap='wrap'
            alignItems='center'
            style={{ direction: 'rtl' }}
            sx={{
              color: 'text.disabled',
              '& > *:not(:last-child)': { mr: 2.5 },
            }}
          >
            <Row gap={1} style={{ direction: 'rtl', textAlign: 'start' }}>
              <Stack
                direction='row'
                alignItems='center'
                sx={{
                  typography: 'body2',
                }}
              >
                <Iconify icon='carbon:time' sx={{ mr: 1 }} />{' '}
                {`${((course.totalDuration as number < 3600 ? 3600 : course.totalDuration as number) / 3600).toFixed(0)} ساعت`}
              </Stack>
              {lessonCount ?
                <Stack
                  direction='row'
                  alignItems='center'
                  sx={{ typography: 'body2' }}
                >
                  <Iconify icon='carbon:document' sx={{ mr: 1 }} />
                  {`${lessonCount} درس`}
                </Stack>
                : null}
            </Row>

            <Typography variant='overline' sx={{ color: 'primary.main' }}>
              {course?.category?.title}
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Link>
  )
}
