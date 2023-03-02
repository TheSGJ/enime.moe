import AnimeCard from '../anime-card';

export default function PopularAnime({animes}) {
    
    return (
        <div className="grid grid-rows-1 col-auto row-auto grid-flow-col-dense m-0 overflow-x-scroll w-full pr-5 pl-5 gap-x-3">
            {animes.map(
                anime => {
                return (
                    <a key={anime.id} href={`/anime/${anime.slug}/`} className="p-0 m-0">
                        <AnimeCard anime={anime}/>
                    </a>
                )
            })}
        </div>
    )
}