import Link from "next/link";
import { useRef, useState } from "react";
import ModalVideo from 'react-modal-video';
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const HERO_SLIDES = [
    {
        id: "hero-slide-1",
        image: "/assets/imgs/page/homepage1/banner.png",
    },
    {
        id: "hero-slide-2",
        image: "/assets/imgs/page/homepage1/banner-2.png",
    },
];

function HeroSlideContent() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <p className="font-md hero-banner-tagline mb-15 wow animate__animated animate__fadeIn" data-wow-delay=".0s">
                        Import. Export. Done.
                    </p>
                    <h1 className="hero-banner-title mb-15 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                        Helping worlds leading companies for over 30 years
                    </h1>
                    <p className="hero-banner-subtitle mb-25 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                        You handle the business. We handle the borders.
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                            <p className="font-md hero-banner-desc mb-20 wow animate__animated animate__fadeInUp" data-wow-delay=".0s">
                                Whether it&apos;s by Sea, Air, or Land, M/S. Durga Shipping and Transport Agency gets your goods cleared and moving without the headache.
                            </p>
                            <Link
                                className="btn btn-brand-1 hover-up wow animate__animated animate__fadeInUp"
                                href="/contact#contact-form"
                            >
                                Get Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Hero1Slider() {
    const [isOpen, setOpen] = useState(false);
    const paginationRef = useRef(null);

    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={0}
                loop={false}
                rewind={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: paginationRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.pagination.el = paginationRef.current;
                }}
                className="swiper-hero-banner"
            >
                {HERO_SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="banner-1"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <HeroSlideContent />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div ref={paginationRef} className="swiper-pagination swiper-pagination-hero" />
            <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    );
}
