import BannerSection from "@/components/section/BannerSection";
import { api, ENDPOINT } from "@/lib/api";
import JumperSection from "@/components/section/Jumper";
import CategoriesSection from "@/components/section/CategorySection";


export default function Home() {
    const list = [
        {
            label: "Top Comedy Movies",
            href: "comedy",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchComedyMovies);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Comedy Movies:', err?.message || err);
                    return [];
                }
            },
        },
        {
            label: "Top Horror Movies",
            href: "horror",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchHorrorMovies);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Horror Movies:', err?.message || err);
                    return [];
                }
            },
        },
        {
            label: "Top Romance Movies",
            href: "romance",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchRomanceMovies);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Romance Movies:', err?.message || err);
                    return [];
                }
            },
        },
        {
            label: "Top Action Movies",
            href: "action",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchActionMovies);
                    // Note: Backend returns under 'response', not 'data'
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Action Movies:', err?.message || err);
                    return [];
                }
            },
        },
    ];
    const getMoviesBannerData = async () => {
        try {
            const resp = await api.get(ENDPOINT.fetchAnimeMovies);
            return resp?.data?.response?.results || [];
        } catch (err) {
            console.error('Failed to fetch Movies Banner (Anime):', err?.message || err);
            return [];
        }
    };

    return (
        <>
            <JumperSection list={list} />
            <BannerSection fetcher={getMoviesBannerData} />
            {/* // list of categories  */}
            {list.map((item) => {
                return <CategoriesSection key={item.label} title={item.label} id={item.href} fetcher={item.fetcher} />
            })}
        </>
    );
}