import { useState } from 'react'
import Row from 'components/ui/Row'
import Col from 'components/ui/Col'
// import Button from 'components/ui/Button'
// import SvgSprite from 'assets/sprite'
import SectionTitle from 'components/sectionTitle'
import Card from 'components/card'
import dayjs from 'dayjs'
import jalaliday from 'jalaliday'

import type { CommentProps } from 'containers/company/interface'
import { CommentPagination, CreateNewComment } from './helper'
import styles from './companyComment.module.scss'

dayjs.extend(jalaliday)

const Comment = ({ comments, companyId }: CommentProps) => {
  const [page, setPage] = useState<number>(0)
  const commentsLength = comments?.comentsCompanies?.length ?? 0

  const handlePage = (newPage: number) => {
    if (newPage !== page) setPage(newPage)
  }

  return (
    <Row className={styles['comment']} wrap id='comments'>
      <SectionTitle title='دیدگاه کاربران' />
      <Col className={styles['comment__new']} span={24}>
        <Card className='col-lg-24' hasSource={false}>
          <CreateNewComment companyId={companyId} />
        </Card>
      </Col>
      {!!commentsLength && (
        <Col span={24}>
          <Card className='col-lg-24' hasSource={false}>
            {comments?.comentsCompanies
              ?.slice(page * 5, page * 5 + 5)
              .map(({ comment, author, insertDate, id }) => (
                <Row key={id} className={styles['comment__view']} wrap>
                  <Col className='d-flex gap-1 items-center' span={24}>
                    <div data-selector='user-image' />
                    <div data-selector='info'>
                      <div>{author}</div>
                      <div>
                        {dayjs(insertDate)
                          .calendar('jalali')
                          .format('YYYY/MM/DD')}
                      </div>
                    </div>
                  </Col>
                  <Col data-selector='comment' flex='auto'>
                    {comment}
                  </Col>
                  {/* <Col data-selector='vote' span={24}>
                  <Button>
                    <SvgSprite id='dislike' />
                  </Button>
                  <Button>
                    <SvgSprite id='like' />
                  </Button>
                </Col> */}
                </Row>
              ))}
            <CommentPagination
              totalPage={commentsLength / 5}
              handlePage={handlePage}
              currentPage={page + 1}
            />
          </Card>
        </Col>
      )}
    </Row>
  )
}

export default Comment
