import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial1Slider() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-banner'
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-customers",
                    nextEl: ".swiper-button-next-customers",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25">
                            <Link href="#">
                                <img src="/assets/imgs/page/homepage1/rahul.jpeg" alt="author" />
                            </Link>
                            <div className="author-info">
                                <Link href="#">
                                    <span className="font-xl-bold color-brand-2 author-name">
                                        Rahul Sharma
                                    </span>
                                </Link>
                                {/* <span className="font-sm color-grey-500 department">
                                    Tata Consultancy Services (TCS)
                                </span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700">
                            The platform helped our team collaborate better across projects with
                            multiple workflows like Kanban, timelines, and task views.
                        </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start">
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <br />
                                <span className="font-sm color-white">For project management</span>
                            </div>
                            <span className="font-xs color-grey-500 rate-post text-end">
                                Rate: 4.9 / 5
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25">
                            <Link href="#">
                                <img src="/assets/imgs/page/homepage1/priya.jpeg" alt="author" />
                            </Link>
                            <div className="author-info">
                                <Link href="#">
                                    <span className="font-xl-bold color-brand-2 author-name">
                                        Priya Verma
                                    </span>
                                </Link>
                                {/* <span className="font-sm color-grey-500 department">
                                    Infosys
                                </span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700">
                            A very intuitive tool that improved productivity across our distributed
                            teams. Easy onboarding and excellent customer support.
                        </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start">
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <br />
                                <span className="font-sm color-white">For team collaboration</span>
                            </div>
                            <span className="font-xs color-grey-500 rate-post text-end">
                                Rate: 4.8 / 5
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25">
                            <Link href="#">
                                <img src="/assets/imgs/page/homepage1/aman.jpeg" alt="author" />
                            </Link>
                            <div className="author-info">
                                <Link href="#">
                                    <span className="font-xl-bold color-brand-2 author-name">
                                        Aman Gupta
                                    </span>
                                </Link>
                                {/* <span className="font-sm color-grey-500 department">
                                    Flipkart
                                </span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700">
                            The flexibility of views and reporting helped us streamline delivery
                            timelines and track performance effectively.
                        </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start">
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <br />
                                <span className="font-sm color-white">For operations</span>
                            </div>
                            <span className="font-xs color-grey-500 rate-post text-end">
                                Rate: 5.0 / 5
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="wow animate__animated animate__fadeIn">
                    <div className="card-testimonial-grid">
                        <div className="box-author mb-25">
                            <Link href="#">
                                <img src="/assets/imgs/page/homepage1/neha.jpeg" alt="author" />
                            </Link>
                            <div className="author-info">
                                <Link href="#">
                                    <span className="font-xl-bold color-brand-2 author-name">
                                        Neha Iyer
                                    </span>
                                </Link>
                                {/* <span className="font-sm color-grey-500 department">
                                    Paytm
                                </span> */}
                            </div>
                        </div>
                        <p className="font-md color-grey-700">
                            Clean UI, powerful features, and reliable performance. It fits perfectly
                            into our fast-paced fintech environment.
                        </p>
                        <div className="card-bottom-info justify-content-between">
                            <div className="rating text-start">
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <img src="/assets/imgs/template/icons/star.svg" alt="star" />
                                <br />
                                <span className="font-sm color-white">For business teams</span>
                            </div>
                            <span className="font-xs color-grey-500 rate-post text-end">
                                Rate: 4.9 / 5
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="box-pagination-customers">
                <div className="swiper-button-prev swiper-button-prev-customers swiper-button-prev-style-1 wow animate__animated animate__fadeIn">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </div>
                <div className="swiper-button-next swiper-button-next-customers swiper-button-next-style-1 wow animate__animated animate__fadeIn">
                    <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </>
    )
}
