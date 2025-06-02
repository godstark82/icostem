import SectionImageHeader from "../common/SectionImageHeader";
import Image from "next/image";

const PHOTOS = [
    "/images/utb-images/gallery/gallery-12.jpg",
    "/images/utb-images/gallery/gallery-11.jpg", 
    "/images/utb-images/gallery/gallery-7.jpg",
    "/images/utb-images/gallery/gallery-6.jpg",
    "/images/utb-images/gallery/gallery-3.jpg",
    "/images/utb-images/gallery/gallery-2.jpg",
];

export default function Highlights() {
    return (
        <section className="bg-white">
            <SectionImageHeader title="Conference Highlights" image="/images/highlights-bg.jpg" />
            <div className="container mx-auto px-4 py-12">
                {/* Video */}
                <div className="flex justify-center mb-10">
                    <div className="w-full max-w-3xl aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube-nocookie.com/embed/e8muT9UCDWI?si=JSbg19SdG_xdtAQh"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-md shadow-lg"
                        ></iframe>
                    </div>
                </div>
                {/* Photo Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {PHOTOS.map((src, idx) => (
                        <div key={idx} className="relative w-full h-56 md:h-48 lg:h-56 overflow-hidden rounded-md">
                            <Image
                                src={src}
                                alt={`Conference highlight ${idx + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                priority={idx < 2}
                                className="object-cover"
                                quality={75}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
