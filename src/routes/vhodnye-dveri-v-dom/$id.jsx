import { createFileRoute } from '@tanstack/react-router'
import { Series } from '../../components/Series';

export const Route = createFileRoute('/vhodnye-dveri-v-dom/$id')({
    component: SeriesComp
})

function SeriesComp() {
    const { id } = Route.useParams();
    return <Series location="vhodnye-dveri-v-dom" id={id} />;
}