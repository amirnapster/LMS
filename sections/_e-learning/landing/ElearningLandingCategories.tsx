// @mui
import {
  Typography,
  Container,
  Paper,
  Button,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material'
// types
import { ICourseByCategoryProps } from 'types/course'
// components
import Iconify from 'components/iconify'
import TextMaxLine from 'components/text-max-line'
import Link from 'next/link'
import Row from 'components/ui/Row'

// ----------------------------------------------------------------------

type Props = {
  categories: ICourseByCategoryProps[]
}

export default function ElearningLandingCategories({ categories }: Props) {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        py: { xs: 15, md: 5 }
      }}
    >
      <Container>
        <Grid
          container
          direction={"column"}
          spacing={{ xs: 8, lg: 3 }}
          justifyContent={{ lg: 'space-between' }}
        >
          <Grid
            xs={12}
            sx={{
              textAlign: { xs: 'center', lg: 'unset' },
            }}
          >
            <Typography variant='h2'>دسته شغلی</Typography>

            {/* <Button
              variant='contained'
              size='large'
              color='inherit'
              endIcon={<Iconify icon='carbon:chevron-right' />}
            >
              Explore more
            </Button> */}
          </Grid>

          <Grid xs={12}
          >
            <Box
              sx={{
                gap: 3,
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  sm: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
              }}
            >
              {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

// ----------------------------------------------------------------------

type CategoryItemProps = {
  category: ICourseByCategoryProps
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Link href={`/tags/${category.id}`}>
      <Paper
        variant='outlined'
        sx={{
          p: 1,
          cursor: 'pointer',
          bgcolor: 'transparent',
          transition: (theme) =>
            theme.transitions.create('all', {
              duration: theme.transitions.duration.enteringScreen,
            }),
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: (theme) => theme.customShadows.z24,
            '& h6': {
              color: 'primary.main',
            },
          },
        }}
      >
        <Row className='w-100' align='middle' gap={1}>
          <img style={{ width: "70px" }} src="/svg/layout/navbar-logo.svg" alt="" />

          <div>
            <TextMaxLine variant='h6' line={1} gutterBottom>
              {category.name}
            </TextMaxLine>

            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              {category.students} آموزش
            </Typography>
          </div>
        </Row>
      </Paper>
    </Link>
  )
}
