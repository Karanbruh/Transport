import FounderSpeechVideo from "./FounderSpeechVideo";

export default function Info1() {
    return (
        <>
            <section className="section mt-85">
                <div className="container">
                    <div className="text-center"><img className="mb-15 brand-section-logo" src="/assets/imgs/template/logo.png" alt="Durga Shipping" />
                        <p className="font-md color-grey-700 wow animate__animated animate__fadeIn">Delivering Results for
                            Industry Leaders</p>
                        <h2 className="color-brand-2 mb-65 mt-15 wow animate__animated animate__fadeIn">We are proud of our
                            workforce<br className="d-none d-lg-block" />and have worked hard.</h2>
                    </div>
                    <div className="row mt-50 align-items-center">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="box-images-pround">
                                <div className="box-images wow animate__animated animate__fadeIn">
                                    <FounderSpeechVideo />
                                    <div className="image-2 shape-3"><img src="/assets/imgs/page/homepage1/icon1.png" alt="Durga Shipping" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="box-info-pround">
                                <h3 className="color-brand-2 mb-15 wow animate__animated animate__fadeIn">Seamless Clearance &amp; End-to-End Logistics</h3>
                                <p className="font-md color-grey-500 wow animate__animated animate__fadeIn">For over 30 years, we have expanded our global network and strengthened our relationships with customs authorities to deliver unmatched reliability. We combine our on-ground expertise with highly efficient forwarding processes, giving our clients total peace of mind and complete visibility over their cargo from port to final destination.</p>
                                <div className="mt-30">
                                    <ul className="list-ticks">
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Govt. Authorized Broker
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Accelerated Cargo Clearance
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Global Freight Forwarding
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Expert Duty &amp; Tax Advisory
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Dedicated On-Ground Liaisons
                                        </li>
                                        <li className="wow animate__animated animate__fadeIn">
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>Secure Surface Transport
                                        </li>
                                    </ul>
                                </div>
                                {/* <div className="mt-30 text-start d-flex wow animate__animated animate__fadeIn"><Link className="hover-up mr-10" href="#"><img src="/assets/imgs/template/appstore-btn.png" alt="Durga Shipping" /></Link><Link className="hover-up" href="#"><img src="/assets/imgs/template/google-play-btn.png" alt="Durga Shipping" /></Link></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
