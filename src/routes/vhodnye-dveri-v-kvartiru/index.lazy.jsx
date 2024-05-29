import { createLazyFileRoute } from '@tanstack/react-router';
import { SeriesSelection } from '../../components/SeriesSelection';

export const Route = createLazyFileRoute('/vhodnye-dveri-v-kvartiru/')({
    component: ForRoom
})

function ForRoom() {
    return (<>
        <SeriesSelection location="vhodnye-dveri-v-kvartiru" />
    </>)
}