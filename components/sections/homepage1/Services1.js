import Link from "next/link";

export default function Services1() {
    return (
        <>
            <section className="section mt-100">
                <div className="container">
                    <h2 className="title-favicon mb-20 wow animate__animated animate__fadeIn">What We Offer</h2>
                    <div className="row align-items-end">
                        <div className="col-lg-8 col-md-8 mb-30">
                            <p className="font-md color-gray-700 wow animate__animated animate__fadeIn">Welcome to our
                                tranporation services agency. We are the best at our trans-portation service ever.</p>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 mb-30 text-md-end text-start"><Link className="btn btn-brand-1 hover-up" href="/request-a-quote">
                            <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z">
                                </path>
                            </svg>Get a quote</Link></div> */}
                    </div>
                    <div className="mt-20 box-background-offer">
                        {/* <div className="bg-under" /> */}
                        <div className="row offer-cards-row">
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn d-flex">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/importexport.png" alt="Durga Shipping" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Import &amp; Export Documentation</h5>
                                        <p className="font-sm color-grey-900 mb-35">We manage the preparation and submission of all required customs documentation, ensuring a hassle-free experience for your international trade operations.</p>
                                        {/* <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn d-flex">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/tax.png" alt="Durga Shipping" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Duty &amp; Tax Advisory</h5>
                                        <p className="font-sm color-grey-900 mb-35">Benefit from expert advice on duty structures, tariff classifications and valuation to optimize costs and enhance compliance.</p>
                                        {/* <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn d-flex">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/customs.png" alt="Durga Shipping" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Customs Compliance Solutions</h5>
                                        <p className="font-sm color-grey-900 mb-35">We are professional in ocean freight with
                                            more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        {/* <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn d-flex">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/authorities.png" alt="Durga Shipping" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Dedicated Liaison with Customs Authorities</h5>
                                        <p className="font-sm color-grey-900 mb-35">With strong relationships and in-depth knowledge, we act as a vital link between your business and regulatory authorities, making the clearance process smooth and transparent.</p>
                                        {/* <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn d-flex">
                                <div className="card-offer hover-up">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/cargo.png" alt="Durga Shipping" />
                                    </div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Specialized Services for Unique Cargo</h5>
                                        <p className="font-sm color-grey-900 mb-35">From bulk liquid cargo to specialized heavy equipment, we handle shipments with unique requirements while adhering to precise customs guidelines.</p>
                                        {/* <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div> */}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-4 col-md-6 wow animate__animated animate__fadeIn">
                                <div className="card-offer hover-up" style={{ height: "400px" }}>
                                    <div className="card-image"><img src="/assets/imgs/page/homepage1/worldwide.png" alt="Durga Shipping" /></div>
                                    <div className="card-info">
                                        <h5 className="color-brand-2 mb-15">Cross Border</h5>
                                        <p className="font-sm color-grey-900 mb-35">We are professional in ocean freight with
                                            more than 12 years of experience and have shipped more than 100k shipments.</p>
                                        <div className="box-button-offer mb-30"><a className="btn btn-link font-sm color-brand-2">View Details<span>
                                            <svg className="w-6 h-6 icon-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg></span></a></div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
