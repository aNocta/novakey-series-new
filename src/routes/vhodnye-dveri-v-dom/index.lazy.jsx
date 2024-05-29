import { createLazyRoute } from '@tanstack/react-router'
import { SeriesSelection } from '../../components/SeriesSelection';

export const Route = createLazyRoute('/vhodnye-dveri-v-dom/')({
    component: ForHouse
});

function ForHouse() {
    return (<>
        <SeriesSelection location="vhodnye-dveri-v-dom" />
    </>)
}