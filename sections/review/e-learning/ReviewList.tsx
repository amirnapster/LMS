// @mui
import { Box, Pagination } from '@mui/material'
import { RootState } from 'libs/redux/store'
import { useSelector } from 'react-redux'

import ReviewItem from './ReviewItem'

import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

dayjs.extend(jalaliday)

// ----------------------------------------------------------------------



export default function Reviews() {
  const { details } = useSelector((state: RootState) => state.course)

  return (
    <>
      {details?.comments?.map((review) => {
        const {
          id,
          text,
          insertDate,
          author,
          rate,
          // helpful,
          // message,
          // postedAt,
          // avatarUrl,
          // replyComment,
          // users,
        } = review

        // const hasReply = !!replyComment.length

        return (
          <Box key={id}>
            <ReviewItem
              name={author as string}
              avatarUrl={''}
              postedAt={dayjs(insertDate)
                .calendar('jalali')
                .locale('fa')
                .format('YYYY/MM/DD')}
              message={text as string}
              rating={rate}
            // helpful={2}
            />
            {/* {hasReply &&
              replyComment.map((reply) => {
                const userReply = users.filter(
                  (user) => user.id === reply.userId
                )[0]

                return (
                  <ReviewItem
                    key={reply.id}
                    tagUser={reply.tagUser}
                    postedAt={reply.postedAt}
                    message={reply.message}
                    name={userReply.name}
                    avatarUrl={userReply.avatarUrl}
                    hasReply
                  />
                )
              })} */}
          </Box>
        )
      })}

      {/* <Pagination
        count={10}
        color='primary'
        size='large'
        sx={{
          mt: 5,
          mb: 10,
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  )
}
