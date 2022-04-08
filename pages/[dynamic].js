import { useRouter } from 'next/router'
import Head from 'next/head';

const DynamicRoute = () => {
  const router = useRouter();
  return (
    <>
  <Head>
    <title>{router.query.dynamic}</title>
  </Head>
  <div>
    <p>I am Dynamic with name: {router.query.dynamic}</p>
  </div>
    </>
    
  )
}

export default DynamicRoute