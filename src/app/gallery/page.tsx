"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Masonry from "react-masonry-css";

const images = Array.from({ length: 40 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return {
        src: `/gallery/photo${num}.webp`,
        alt: `Wedding Photo ${num}`,
    };
});
const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

export default function WeddingGallery() {
    const [index, setIndex] = useState(-1);

    return (
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white via-[#fdf6f9] to-white">
            <h2 className="text-center text-3xl font-semibold text-[#8a4b75] mb-6 tracking-wide">
                Wedding Memories
            </h2>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto gap-4"
                columnClassName="masonry-column"
            >
                {images.map((img, i) => (
                    <div
                        key={i}
                        className="mb-4 cursor-pointer"
                        onClick={() => {
                            setIndex(i);
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                ))}
            </Masonry>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={images}
                index={index}
                plugins={[Captions, Thumbnails]}
                captions={{ descriptionTextAlign: "center" }}
            />
        </section>
    );
}
