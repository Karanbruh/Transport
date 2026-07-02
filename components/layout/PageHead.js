import Head from 'next/head'

const SITE_NAME = 'Durga Shipping'
const DEFAULT_TITLE = `${SITE_NAME} | Shipping & Transportation Agency`
const DEFAULT_DESCRIPTION = 'Durga Shipping & Transportation Agency — Government Authorized Custom Broker offering customs clearance, air & sea cargo, freight forwarding, and land transport from Mumbai, India.'

const PageHead = ({ headTitle }) => {
    const title = headTitle ? `${headTitle} | ${SITE_NAME}` : DEFAULT_TITLE

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={DEFAULT_DESCRIPTION} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={DEFAULT_DESCRIPTION} />
                <meta property="og:image" content="/assets/imgs/template/logo.png" />
                <link rel="shortcut icon" href="/assets/imgs/template/logo.png" />
                <link rel="icon" type="image/png" href="/assets/imgs/template/logo.png" />
                <link rel="apple-touch-icon" href="/assets/imgs/template/logo.png" />
            </Head>
        </>
    )
}

export default PageHead
