import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router'
import axios from 'axios';
import { Categories } from "../../components/Categories/Categories";
import { Doors } from '../../components/Doors/Doors';
import { Loader } from '../../components/Loader/Loader';

export const Route = createLazyFileRoute('/category/$slug')({
    component: Category
})

function Category() {
    const { slug } = Route.useParams();
    const { data: category, isLoading } = useQuery({
        queryKey: ["cat_alug", slug],
        queryFn: async () => (await axios.post("https://novakey.ru/wp-json/series-endpoints/series/get_category", { slug })).data
    });
    return (<>
        <h1>{category && category.title}</h1>
        {isLoading && <Loader />}
        {!isLoading && <Categories current={slug} />}
        <Doors id={slug} byCat={true} />
    </>)
}