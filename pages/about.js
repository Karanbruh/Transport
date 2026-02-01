import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout>
                {/* Who We Are Section */}
                <section className="section">
                    <div className="container">
                        <div className="box-pageheader-1 text-center">
                            <span className="btn btn-tag wow animate__animated animate__fadeIn">Who We Are</span>
                            <h2 className="color-brand-1 mt-15 mb-10 wow animate__animated animate__fadeIn">About Us</h2>
                            <p className="font-md color-white wow animate__animated animate__fadeIn">
                                Not Just Brokers. We Are Problem Solvers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* The Simple Truth Section */}
                <section className="section mt-100 mb-50">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-30">
                                <h2 className="color-brand-2 mb-25 wow animate__animated animate__fadeIn">The Simple Truth</h2>
                                <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                    For over 30 years, M/S. Durga Shipping and Transport Agency has been the backbone for
                                    businesses moving goods in and out of India. We don't just fill out forms; we navigate the
                                    complex world of Indian Customs so you don't have to.
                                </p>
                                <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                    Led by Mr. Sanjay Mishra, we have earned our reputation as one of the best brokers in
                                    India by doing one thing: keeping our promises.
                                </p>
                            </div>
                            <div className="col-lg-6 position-relative mb-30">
                                <div className="row align-items-end">
                                    <div className="col-lg-5 col-md-5 col-sm-5">
                                        <img className="mb-20 wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-1.png" alt="Durga Shipping" />
                                        <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-2.png" alt="Durga Shipping" />
                                    </div>
                                    <div className="col-lg-7 col-md-7 col-sm-7">
                                        <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-1-3.png" alt="Durga Shipping" />
                                    </div>
                                </div>
                                <div className="quote-center shape-2" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Philosophy Section */}
                <section className="section mt-50 mb-50">
                    <div className="container">
                        <div className="row align-items-center item-about-2">
                            <div className="col-lg-6">
                                <img className="wow animate__animated animate__fadeIn" src="/assets/imgs/page/about/img-about-2-1.png" alt="Durga Shipping" />
                            </div>
                            <div className="col-lg-6">
                                <div className="box-info-aabout-2">
                                    <span className="btn btn-tag wow animate__animated animate__fadeIn">Our Philosophy</span>
                                    <h2 className="color-brand-2 mt-15 mb-25 wow animate__animated animate__fadeIn">Ground-Level Expertise, Total Transparency</h2>
                                    <ul className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                        <li>No Hidden Delays: We know the checkpoints, the paperwork, and the people.</li>
                                        <li>No Excuses: Your cargo is our responsibility.</li>
                                        <li>Total Transparency: You always know where your shipment stands.</li>
                                    </ul>
                                    <p className="font-md color-grey-900 mb-20 wow animate__animated animate__fadeIn">
                                        From our busy hub in Mumbai to our strategic outpost in Sonauli, we have the ground-level expertise to handle any challenge the logistics world throws at us.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Get in Touch Section (keep as-is from template) */}
                {/* <section className="section mt-55 bg-1 position-relative pt-90 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <span className="btn btn-tag wow animate__animated animate__fadeIn">Get in touch</span>
                                <h3 className="color-grey-900 mb-20 mt-15 wow animate__animated animate__fadeIn">
                                    Proud to Deliver<br className="d-none d-lg-block" />Excellence Every Time
                                </h3>
                                <p className="font-md color-grey-900 mb-40 wow animate__animated animate__fadeIn">
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="chart-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Boost your sale</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-6 mb-30">
                                        <h6 className="feature-title font-md-bold color-grey-900 wow animate__animated animate__fadeIn">Introducing New Features</h6>
                                        <p className="font-xs color-grey-900 wow animate__animated animate__fadeIn">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                                <div className="mt-20">
                                    <Link className="btn btn-brand-2 mr-20 wow animate__animated animate__fadeIn" href="/contact">Contact Us</Link>
                                    <Link className="btn btn-link-medium wow animate__animated animate__fadeIn" href="#">Learn More
                                        <svg className="w-6 h-6 icon-16 ml-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box-image-touch box-image-info-2-2" />
                </section> */}
            </Layout>
        </>
    )
}
