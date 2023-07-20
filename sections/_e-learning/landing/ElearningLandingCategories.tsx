// @mui
import {
  Typography,
  Container,
  Paper,
  Box,
  Unstable_Grid2 as Grid,
} from '@mui/material'
import TextMaxLine from 'components/text-max-line'
import Link from 'next/link'
import Row from 'components/ui/Row'
import { CategoryCount, useGetApiCategoriesCountsQuery } from 'libs/redux/services/karnama'
import { useEffect, useState } from 'react'

// ----------------------------------------------------------------------

type Props = {
  categories: CategoryCount[]
}

export default function ElearningLandingCategories({ categories }: Props) {
  const [cats ,setCats]=useState(categories)
  
  const { data }= useGetApiCategoriesCountsQuery()
  
  useEffect(() => {
    if(data){
      setCats(data)
    }
    }, [data])
  
  return (
    <Box
      sx={{
        overflow: 'hidden',
        bgcolor: 'background.neutral',
        pt:{ xs: 15, md: 5 },
        pb: 5
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
            <Typography variant='h2'>موضوعات آموزشی</Typography>

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
              {cats.map((category) => (
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
  category: CategoryCount
}

function CategoryItem({ category }: CategoryItemProps) {
  if(category.title=="لینکدین")
  return null
  return (
    <Link href={`/categories/${category.id}`}>
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
          <img style={{ width: "70px" }} src={`/image/cats/${category.id}.jpg`} alt="" />

          <div>
            <TextMaxLine variant='h6' line={1} gutterBottom>
              {category.title}
            </TextMaxLine>

            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              {category.count} آموزش
            </Typography>
          </div>
        </Row>
      </Paper>
    </Link>
  )
}
