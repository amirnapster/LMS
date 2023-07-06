// @mui
import { Stack, Avatar, Typography, Paper, Box, Link } from '@mui/material'
import { fShortenNumber } from 'utils/helpers/formatNumber'
// types
import { ICourseTeacherProp } from 'types/course'
// components
import Iconify from 'components/iconify'
import { ContentProvider, CourseTeacher, Teacher } from 'libs/redux/services/karnama'

// ----------------------------------------------------------------------

type Props = {
  teachers: CourseTeacher[]
  provider?: ContentProvider
}

export default function ElearningCourseDetailsTeachersInfo({
  teachers = [],
  provider
}: Props) {
  return (
    <>
      <Typography variant='h4' sx={{ mb: 5 }}>
        سازنده
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            lg: 'repeat(1, 1fr)',
          },
        }}
      >

        <ProviderItem provider={provider as ContentProvider} />
      </Box>
      <Typography variant='h4' sx={{ mb: 5,mt:6 }}>
        مدرس دوره
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: { xs: 3, md: 4 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          },
        }}
      >
        {teachers.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher.teacher as Teacher} />
        ))}
      </Box>
    </>
  )
}

// ----------------------------------------------------------------------
type ContentProviderProps = {
  provider: ContentProvider
}

function ProviderItem({ provider }: ContentProviderProps) {
  const { title, avatar, link, bio } = provider

  return (
    <Paper variant='outlined' sx={{ p: 3, borderRadius: 2 }}>
      <Stack direction='row' spacing={3} flexWrap='wrap'>
        <Avatar src={avatar as string} sx={{ width: 72, height: 72 }} />

        <Stack spacing={1} flexGrow={1}>
          <Stack spacing={0.5}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              <Link href={link as string} target="_blank">سایت</Link>
            </Typography>

          </Stack>

          {/* <Stack spacing={0.5} direction='row' alignItems='center'>
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

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon='carbon:events' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.25 }}>
              {fShortenNumber(students)}
            </Box>
            Students
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon='carbon:notebook' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.25 }}>
              {courses}
            </Box>
            Lessons 
          </Stack>*/}
        </Stack>

      </Stack>
      <Typography variant='body2' style={{ marginTop: "1rem" }} sx={{ color: 'text.secondary' }}>
        {bio}
      </Typography>
    </Paper>
  )
}


type TeacherItemProps = {
  teacher: Teacher
}

function TeacherItem({ teacher }: TeacherItemProps) {
  const { title, avatar, profession, bio } = teacher

  return (
    <Paper variant='outlined' sx={{ p: 3, borderRadius: 2 }}>
      <Stack direction='row' spacing={3} flexWrap='wrap'>
        <Avatar src={avatar as string} sx={{ width: 72, height: 72 }} />

        <Stack spacing={1} flexGrow={1}>
          <Stack spacing={0.5}>
            <Typography variant='h6'>{title}</Typography>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {profession}
            </Typography>

          </Stack>

          {/* <Stack spacing={0.5} direction='row' alignItems='center'>
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

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon='carbon:events' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.25 }}>
              {fShortenNumber(students)}
            </Box>
            Students
          </Stack>

          <Stack
            direction='row'
            alignItems='center'
            sx={{ typography: 'body2', color: 'text.disabled' }}
          >
            <Iconify icon='carbon:notebook' sx={{ mr: 1 }} />
            <Box component='strong' sx={{ mr: 0.25 }}>
              {courses}
            </Box>
            Lessons 
          </Stack>*/}
        </Stack>

      </Stack>
      <Typography variant='body2' style={{ marginTop: "1rem" }} sx={{ color: 'text.secondary' }}>
        {bio}
      </Typography>
    </Paper>
  )
}
