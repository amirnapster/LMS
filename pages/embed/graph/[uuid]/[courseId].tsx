// next
import MainLayout from 'layout/main/MainLayout'
import Head from 'next/head'
import { EmbedGraphView } from 'sections/_e-learning/view'

// ----------------------------------------------------------------------

// Courses.getLayout = (page: React.ReactElement) => (
//   <MainLayout>{page}</MainLayout>
// )

// ----------------------------------------------------------------------

export default function Courses() {
  return  <EmbedGraphView />
}
