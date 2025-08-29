import BannerSection from "@/components/section/BannerSection";
import { api, ENDPOINT } from "@/lib/api";
import JumperSection from "@/components/section/Jumper";
import CategoriesSection from "@/components/section/CategorySection";


export default function Home() {
    const list = [
        {
            label: "Comedy",
            href: "comedy",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchComedyTvShows);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Comedy TV Shows:', err?.message || err);
                    return [];
                }
            },
        },
        {
            label: "Crime",
            href: "crime",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchCrimeTvShows);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Crime TV Shows:', err?.message || err);
                    return [];
                }
            },
        },
        {
            label: "Drama",
            href: "drama",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchDramaTvShows);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Drama TV Shows:', err?.message || err);
                    return [];
                }
            },
        },
        {
            label: "Action",
            href: "action",
            fetcher: async () => {
                try {
                    const resp = await api.get(ENDPOINT.fetchActionTvShows);
                    return resp?.data?.response?.results || [];
                } catch (err) {
                    console.error('Failed to fetch Action TV Shows:', err?.message || err);
                    return [];
                }
            },
        },
    ];
    const getTVBannerData = async () => {
        try {
            const resp = await api.get(ENDPOINT.fetchMysteryTvShows);
            return resp?.data?.response?.results || [];
        } catch (err) {
            console.error('Failed to fetch TV Banner (Mystery):', err?.message || err);
            return [];
        }
    };

    return (
        <>
            <JumperSection list={list}/>
            <BannerSection fetcher={getTVBannerData}/>
            {/* // list of categories  */}
            {list.map((item) => {
                return <CategoriesSection key={item.label} title={item.label} id={item.href} fetcher={item.fetcher} />
            })}
        </>
    );
}