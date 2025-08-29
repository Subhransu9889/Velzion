import React, {Suspense} from 'react'
import Skeleton from "../atom/Skeleton";
import {Dot, InboxIcon, Star} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "../ui/carousel";
import {getWatchUrl, media} from "../../lib/api";
import Link from "next/link";
import Image from "next/image";

const BannerSection = async ({fetcher}) => {
    return (
        <Suspense fallback={<BannerSectionFallback/>}>
            <BannerSectionContent fetcher={fetcher}/>
        </Suspense>
    )
}

async function BannerSectionContent({fetcher}) {
    const data = await fetcher();
    if(!data || data.length === 0){
        return (
            <div className='flex flex-col items-center justify-center w-full h-[500px] py-2'>
                <InboxIcon
                    className="w-32 h-32 text-slate-400 mb-10"
                    strokeWidth={1.2}
                />
                <p className="text-lg text-gray-500">No items found.</p>
            </div>
        );
    }

    return (
        <Carousel
            opts={{
                align: "center",
                loop: true,
            }}
            className="w-full  md:px-0 px-4"
        >
            <CarouselContent className="">
                {data?.map((vid) => (
                    <CarouselItem key={vid.id} className="w-full max-w-[700px] h-[500px]">
                        <Link href={getWatchUrl(vid.id, vid.media_type, vid?.poster_path)}>
                            <div className="relative w-full h-[500px] group">
                                <Image
                                    src={media(vid?.poster_path)}
                                    alt=""
                                    width={700}
                                    height={500}
                                    className="w-full h-full bg-slate-600 rounded-lg object-cover"
                                    quality={30}
                                />
                                {/* Overlay title on hover */}
                                <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                    <span className="text-pink-700 text-3xl font-bold text-center px-4 drop-shadow-lg">
                                        {vid.original_title}
                                    </span>
                                    <div className='p-2 font-semibold flex flex-col gap-1'>
                                        <p className='text-sm font-semibold'>{vid.overview}</p>
                                        <div className='flex items-center gap-2 justify-between'>
                                            <div className="flex gap-2">
                                                <p className='border w-fit rounded-lg p-2 bg-black text-pink-700 object-fit'>{vid?.release_date?.slice(0, 4) | "---"}</p>
                                                <p className='border w-fit rounded-lg p-2 bg-black text-pink-700 object-fit'>{vid?.vote_count | "---"}</p>
                                            </div>
                                            <div className='self-end'>
                                                <p className='border w-fit rounded-lg p-2 bg-black text-pink-700 object-fit hover:scale-110 duration-300'>Watch Now</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="absolute bottom-4 right-[12%] hidden md:flex">
                <CarouselPrevious className="w-[60px] h-[60px]" />
                <CarouselNext className="w-[60px] h-[60px] ml-2" />
            </div>
        </Carousel>
    )
}

function BannerSectionFallback() {
    return (
        <div className='flex items-center justify-center gap-5'>
            <Skeleton className='h-[500px] w-[700px] rounded-lg'/>
            <Skeleton className='h-[500px] w-[700px] rounded-lg'/>
            <Skeleton className='h-[500px] w-[700px] rounded-lg'/>
        </div>
    )
}
export default BannerSection
