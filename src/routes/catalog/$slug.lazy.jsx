import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import { get_series_by_prod } from "../../api/get-series-by-prod";
import { Loader } from '../../components/Loader/Loader';
import { SeriesItemStatic } from '../../components/SeriesItem/SeriesItemStatic';

export const Route = createLazyFileRoute('/catalog/$slug')({
    component: ProductPage
})

function ProductPage() {
    const { slug } = Route.useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["get_by_prod", slug],
        queryFn: () => get_series_by_prod(slug)
    });
    return (<>
        {isLoading && <Loader />}
        {!isLoading && data && <SeriesItemStatic attributes={{
            thickness: data.thickness,
            guarantee: data.guarantee,
            lock: data.locks,
            locking_points: data.locking_points,
            safety_rating: data.safety_rating,
            sound_absorption: data.sound_absorption
        }} title={data.title} description={data.description} />}
    </>);
}