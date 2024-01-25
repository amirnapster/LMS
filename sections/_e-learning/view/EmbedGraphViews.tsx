
import { useRouter } from 'next/router';
import {
    useGetApiCoursesByIdAGraphQuery,
    useGetApiCoursesByIdQuery,
} from 'libs/redux/services/karnama'
import ElearningCourseDetailsLessonList from 'sections/_e-learning/course/details/ElearningCourseDetailsLessonList';

import type {  UserLessonViewMinute } from 'libs/redux/services/karnama'


function EmbedGraphView() {

    const { query } = useRouter()
    const { data: course, isLoading: courseLoading } = useGetApiCoursesByIdQuery({ id: Number(query.courseId) })
    const { data: graph, isLoading: graphLoading } = useGetApiCoursesByIdAGraphQuery({ id: Number(query.courseId), uuid: query.uuid as string })

    return (<>
        {course?.sections?.map((section) => (
            <ElearningCourseDetailsLessonList section={section} graph={graph as UserLessonViewMinute[]} canPlay={false} />
        ))}
    </>)
}
export default EmbedGraphView