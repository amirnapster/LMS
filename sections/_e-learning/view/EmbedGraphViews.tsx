import { useRouter } from 'next/router';
import {
    useGetApiCoursesByIdAGraphQuery,
    useGetApiCoursesByIdQuery,
} from 'libs/redux/services/karnama'
import ElearningCourseDetailsLessonList from 'sections/_e-learning/course/details/ElearningCourseDetailsLessonList';

import type {  UserLessonViewMinute } from 'libs/redux/services/karnama'


function EmbedGraphView() {
    const { query } = useRouter();
    const courseId = Number(query.courseId);
    const { data: course, isLoading: courseLoading, error: courseError } = useGetApiCoursesByIdQuery({ id: courseId });
    const { data: graph, isLoading: graphLoading, error: graphError } = useGetApiCoursesByIdAGraphQuery({ id: courseId, uuid: query.uuid as string });

    if (courseError || graphError) {
        return <div>Error: Failed to fetch data</div>;
    }

    return (
        <>
            {course?.sections?.map((section) => (
                <ElearningCourseDetailsLessonList section={section} graph={graph ? graph as UserLessonViewMinute[] : []} canPlay={false} />
            ))}
            {!course?.sections && <div>No sections found.</div>}
        </>
    );
}
export default EmbedGraphView