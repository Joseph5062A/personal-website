import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link';
import Navbar from '../components/Navbar';

const BucketList: NextPage = () => {
  return (
    
    <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none'>
    <Head>
        <title>Joe Weller</title>
        <meta name="description" content="My Bucket List." />
        <link rel="icon" href="/favicon/favicon.ico" />
    </Head>
    <Navbar/>
    <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
      <div className='mx-auto pt-36'>
      <div className='text-white text-left mx-5 mb-24'>
          <div className='text-4xl font-bold'>
            Bucket List
          </div>
          <div className='text-xl child:mt-5'>
            <p className='pt-5'>Read <a href='https://www.goodreads.com/jwmke' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>500 books</a></p>
            <p>Pass the TOPIK-I (Test of Proficiency in Korean)</p>
            <p>Walk 4,000,000 steps in a year</p>
            <p>Earn a purple belt in BJJ or Muay Thai</p>
            <p>Ski a black diamond in Colorado</p>
            <p>Build something that impacts 10,000+ people</p>
            <p>Live in NYC for a year</p>
            <p>Make 1000 <Link href='/blog/pizza' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>homemade NYC pizzas</span></Link></p>
            <p>Bench press my body weight</p>
            <p className='line-through'>Speak in front of a large crowd (April, 2022)</p>
            <p>Attend <a href='https://www.ces.tech/about-ces.aspx' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>CES</a> in Las Vegas</p>
            <p>{"Make >95% of dishes in a cookbook"}</p>
            <p>Explore Eastern Asia for 3 months</p>
            <p className='line-through'>Meditate for 30 days in a row (December, 2022)</p>
            <p>Do a kickflip</p>
            <p>Attend the <a href='https://en.wikipedia.org/wiki/Carnival_of_Ivrea' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Battle of Oranges</a> in Italy</p>
            <p>Be a guest lecturer at a university</p>
            <p>Reach 1600 elo in blitz chess</p>
            <p>Attend the Olympics</p>
            <p>Write and publish a book</p>
            <p className='line-through'>Have my name on a patent (<a href='https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/20230342435' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>US20230342435</a>)</p>
            <p>Celebrate the Chinese New Year in China</p>
            <p className='line-through'>Achieve zero debt (November, 2024)</p>
            <p className='line-through'>Stay in a European hostel (September, 2023)</p>
            <p>Summit Mount Kilimanjaro</p>
            <p>Complete every <a href='https://www.teamblind.com/post/New-Year-Gift---Curated-List-of-Top-75-LeetCode-Questions-to-Save-Your-Time-OaM1orEU' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Blind 75</a> question</p>
            <p className='line-through'>Collect 50 stars in <a href='https://github.com/jwmke/AdventOfCode' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Advent of Code</a> (December, 2023)</p>
            <p>Unlock every <a href='https://en.wikipedia.org/wiki/The_Binding_of_Isaac_(video_game)' target="_blank" rel="noreferrer" className='hover:text-teal underline hover:cursor-nesw-resize'>Binding of Isaac</a> achievement</p>
            <p>Climb a V8 boulder</p>
            <p>Run the NYC Marathon</p>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
};

export default BucketList;
