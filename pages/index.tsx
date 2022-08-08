import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Landing from '../components/Landing';
import Portfolio from '../components/Portfolio';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className='h-screen bg-teal'>
      <Head>
        <title>Joe Weller</title>
        <meta name="description" content="Portfolio website of Joe Weller." />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="relative w-full h-full bg-gradient-to-b from-teal to-pine">
        <Navbar/>
        <Landing/>
        <Scene/>
      </div>
      <Portfolio/>
      <Projects/>
      <Skills/>
    </div>
  )
};

export default Home;
