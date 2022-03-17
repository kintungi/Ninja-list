import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router"
import Head from "next/head";

export default function NotFound() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return (
        <>
        <Head>
        <title>Ninja List | 404</title>
        <meta name='keywords' content='ninjas' />
      </Head>
        <div className="not-found">
            <h1>Oooooops...</h1>
            <p>That page cannot be found.</p>
            <p>Go back to the <Link href="/"><a>homepage</a></Link></p>
        </div>
        </>
    )
}