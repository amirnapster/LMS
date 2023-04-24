// next
import NextLink from 'next/link'
// @mui
import { Stack, Typography, Link } from '@mui/material'
// routes
import { paths } from 'routes/paths'
// types
import { ICaseStudyProps } from 'types/case-study'
// components
import Image from 'components/image'
import TextMaxLine from 'components/text-max-line'

// ----------------------------------------------------------------------

type Props = {
  project: ICaseStudyProps
}

export default function MarketingCaseStudyItem({ project }: Props) {
  const { title, coverImg, category } = project

  return (
    <div>
      <Image src={coverImg} alt={title} ratio='1/1' sx={{ borderRadius: 2 }} />

      <Stack spacing={1} sx={{ pt: 2.5, px: 2.5 }}>
        <Typography variant='overline' sx={{ color: 'text.disabled' }}>
          {category}
        </Typography>

        <Link
          component={NextLink}
          href={paths.marketing.caseStudy}
          color='inherit'
        >
          <TextMaxLine variant='h5' line={1}>
            {title}
          </TextMaxLine>
        </Link>
      </Stack>
    </div>
  )
}
