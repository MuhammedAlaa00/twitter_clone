import React from 'react';
import { useRouter } from "next/router";
import Head from 'next/head';
function userId() {
    const { query } = useRouter()
    console.log(query)
    return (
        <div>
            <Head>
                <title>{query.userId}</title>
                <link rel="icon" href="" />
            </Head>
            <div>
                {query.userId}
            </div>
        </div>
    )
}

export default userId