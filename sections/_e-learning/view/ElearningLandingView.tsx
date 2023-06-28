import {
  _courses,
  _members,
  _blogCoursePosts,
  _brandsColor,
  _testimonials,
  _coursesByCategories,
} from '_mock'
import {
  ElearningLandingHero,
  ElearningLandingIntroduce,
  ElearningLandingCategories,
  ElearningLandingFeaturedCourses,
} from '../landing'
import { Course, useGetFeaturedQuery } from 'libs/redux/services/karnama'

import type { ICourseByCategoryProps } from 'types/course'


export default function ElearningLandingView() {

  const { data } = useGetFeaturedQuery()

  return (
    <>
      <ElearningLandingHero />

      {/* <OurClientsElearning brands={_brandsColor} /> */}

      {/* <ElearningLandingIntroduce /> */}
      <ElearningLandingCategories categories={_coursesByCategories as ICourseByCategoryProps[]} />

      <ElearningLandingFeaturedCourses data={data as Course[]} />


      {/* <TeamElearning members={_members.slice(0, 4)} /> */}

      {/* <TestimonialElearning testimonials={_testimonials} /> */}

      {/* <BlogElearningLatestPosts posts={_blogCoursePosts.slice(0, 4)} />

      <DownloadAppElearning /> 

      <NewsletterElearning />*/}
    </>
  )
}
