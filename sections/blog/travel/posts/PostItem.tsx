// next
import NextLink from 'next/link'
// routes
import { paths } from 'routes/paths'
// utils
import { fDate } from 'utils/helpers/formatTime'
// @mui
import { Stack, Avatar, Link } from '@mui/material'
// types
import { IBlogPostProps } from 'types/blog'
// components
import Image from 'components/image'
import TextMaxLine from 'components/text-max-line'
//
import PostTimeBlock from '../../components/PostTimeBlock'

// ----------------------------------------------------------------------

type Props = {
  post: IBlogPostProps
}

export default function PostItem({ post }: Props) {
  const { title, duration, coverImg, author, createdAt } = post

  return (
    <Stack spacing={2.5}>
      <Image src={coverImg} alt={title} ratio='1/1' sx={{ borderRadius: 2 }} />

      <Stack spacing={1}>
        <PostTimeBlock createdAt={fDate(createdAt)} duration={duration} />

        <Link component={NextLink} href={paths.travel.post} color='inherit'>
          <TextMaxLine variant='h5' persistent>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>

      <Stack direction='row' alignItems='center' sx={{ typography: 'body2' }}>
        <Avatar src={author.picture} sx={{ mr: 1 }} />
        {author.name}
      </Stack>
    </Stack>
  )
}
