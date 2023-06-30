import { useState } from 'react'
// @mui
import { Container, Unstable_Grid2 as Grid } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
// _mock
import { _reviews } from '_mock'
//
import ReviewNewForm from '../components/ReviewNewForm'
import ReviewList from './ReviewList'
import ReviewSummary from './ReviewSummary'
import ReviewToolbar from './ReviewToolbar'
import { useSelector } from 'react-redux'
import { RootState } from 'libs/redux/store'

// ----------------------------------------------------------------------

export default function ReviewElearning() {
  const [sort, setSort] = useState('latest')
  const { details } = useSelector((state: RootState) => state.course)

  const [openForm, setOpenForm] = useState(false)

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string)
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden', pt: 5 }}>
        <Grid xs={12} md={7} lg={8}>
          <ReviewToolbar sort={sort} onChangeSort={handleChangeSort} />
        </Grid>

        <Grid container spacing={8} direction='row-reverse'>
          <Grid xs={12} md={5} lg={4}>
            {details.comments && details.comments.length ?
              <ReviewSummary
                ratingsNumber={4.7 }
                reviewsNumber={details.comments?.length}
                onOpenForm={() => setOpenForm(true)}
              />:
              <ReviewSummary
                ratingsNumber={5}
                reviewsNumber={1}
                onOpenForm={() => setOpenForm(true)}
              />}
          </Grid>

          <Grid xs={12} md={7} lg={8}>
            <ReviewList />
          </Grid>
        </Grid>
      </Container>

      <ReviewNewForm open={openForm} onClose={() => setOpenForm(false)} />
    </>
  )
}
