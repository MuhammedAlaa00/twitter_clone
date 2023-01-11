import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/signup');
    }
  }, [router, status]);
  if (status === 'authenticated') {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel="icon" href="" />
        </Head>
        <div>
          {session?.user.name}
          <button onClick={() => signOut()}>sign Out</button>
        </div>
      </div>
    );
  }
}
