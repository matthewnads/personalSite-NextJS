import Link from 'next/link'; 
import Head from 'next/head';
import Layout from '../../components/layout';

// emoji name in url for secrets! 
export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title>First Post</title>
        </Head>
       
            <h1>First Post</h1>
            <h2>
                <Link href="/">Go back home</Link>
            </h2>
        </Layout>
    );
}