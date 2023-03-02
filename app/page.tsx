import RecentReleaseComponent from '@/components/recent-release';
import { enimeApi } from '@/lib/constant';
import Arrow from '@/components/arrow';
import PopularAnime from '@/components/popular-anime';

export default async function Home() {
    const { data, meta } = await (await fetch(enimeApi + "/recent?perPage=100&language=JP", { cache: "no-store" })).json();
    let popularAnimeResult = await (await fetch(enimeApi + "/popular?perPage=10", { cache: "no-store" })).json();
    const popularAnimeData = popularAnimeResult.data;
    return (
        <>
            <div className="ml-[1%]">
            <p className="font-bold text-4xl mt-10 pl-5 mb-2">Most Popular</p>
                <Arrow>
                    <PopularAnime animes={popularAnimeData} />
                </Arrow>
                <p className="font-bold text-4xl mt-4 pl-5 mb-2">Recently Released</p>
                <Arrow>
                    <RecentReleaseComponent data={data} meta={meta}/>
                </Arrow>
            </div>
        </>
    )
}