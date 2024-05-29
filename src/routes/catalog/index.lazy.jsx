import { createLazyFileRoute } from '@tanstack/react-router'
import { SeriesSelection } from '../../components/SeriesSelection';

export const Route = createLazyFileRoute('/catalog/')({
    component: () => <App />
})

function App() {
    return (<>
        <SeriesSelection />
    </>)
}