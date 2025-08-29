import Image from "next/image";
import {api, ENDPOINT} from "@/lib/api";
import JumperSection from "@/components/section/Jumper";
import BannerSection from "@/components/section/BannerSection";
import CategoriesSection from "@/components/section/CategorySection";

export default function Home() {
  const list = [
    {
      label: "Top Rated",
      href: "top-rated",
      fetcher:async function getTopRatedData() {
        try {
          const resp = await api.get(ENDPOINT.discoverTopRated);
          const data = resp?.data?.response?.results || [];
          return data;
        } catch (err) {
          console.error('Failed to fetch Top Rated:', err?.message || err);
          return [];
        }
      }
    },
    {
      label: "Popular",
      href: "popular",
      fetcher:async function getPopular(){
        try {
          const resp = await api.get(ENDPOINT.discoverTrending);
          const data = resp?.data?.response?.results || [];
          return data;
        } catch (err) {
          console.error('Failed to fetch Popular/Trending:', err?.message || err);
          return [];
        }
      }
    },
    {
      label: "Upcoming",
      href: "upcoming",
      fetcher: async function getUpcoming() {
        try {
          const resp = await api.get(ENDPOINT.discoverUpcoming);
          const data = resp?.data?.response?.results || [];
          return data;
        } catch (err) {
          console.error('Failed to fetch Upcoming:', err?.message || err);
          return [];
        }
      }
    },
  ];
  async function getHomeBannerData() {
    try {
      const resp = await api.get(ENDPOINT.discoverNowPlaying);
      const data = resp?.data?.response?.results || [];
      return data;
    } catch (err) {
      console.error('Failed to fetch Now Playing (banner):', err?.message || err);
      return [];
    }
  }
  return (
      <>
        <JumperSection list={list}/>
        <BannerSection fetcher={getHomeBannerData}/>
        {/* // list of categories  */}
        {list.map((item) => {
          return <CategoriesSection key={item.label} title={item.label} id={item.href} fetcher={item.fetcher} />
        })}
      </>
  )
}
