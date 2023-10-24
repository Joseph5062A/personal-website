import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../../components/Navbar';
import BlogCard from '../../components/BlogCard';
import BlogSearch from '../../components/BlogSearch';
import Link from 'next/link';
import { useState } from 'react';

const Blog: NextPage = () => {
    const [searchResults, setSearchResults] = useState([]);

    const posts = [
      {name:'Romanticization of the Doomer in Western Society', date:'07/23', media:'doom4', description:'Exploring the Doomer archetype, its rise to popularity in the West, and some solutions to it at an personal scale.', link:'doom', mediaBlur:'data:image/jpeg;base64,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zpqDWms6aK1prOmgumppoLpqamirpqaagupqaaC6mpqaDWpqamgupqamoLampqWgalqWpagWs2lqWiFrNEVm0AVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUUFEVGhUBVAFAAAAdBB6OdRAFEAUQ0GtGdURRBRV1nTQa1dZ1dRY1q6zpo03prOrqK1prOrorWms6aK1q6zpqK1prOmg1pqaaK1prOmgumppoq6azpqDWms6aC6azpoLpqamgums6agupqamgupqalqC6zampoLalqIAgKzagCsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIoqiKigAoqAKIA0ammta8sXTU000xrTWdNNMa01nTV1Ma0TTTTGhnTQxrTWdXQxdXWdNVG9XXPV1Go3q6xq6NNausauorWrrGrorWms6aDWrrGrorWms6aDWms6aitaazqaDWms6aDWms6mitaazqag1prOpoNams6moNams6AupqAAIqaIIM2qgKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoiiioIqiAKIAaagrK6agC6agDWmsgjWmsqGLpqAYurrIGNaazpppjWrrGmrpjpprGmiummsaajTpprGmit6uueroremsaaDemsaaK3prGmg3prGmpqtaazqGjeprIDWpqCC6gACAgCKmqggmqgis6ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACoAogKogAAIAAAAAAAAAAAAAAAAAAoii6oiouqIC6oiigCKogCiAKIAogGgAmggpqoAmggJogKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgCqyouqIIuqIougAaABoAGgIGqICaqCKmqICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAogLqiAaogGqICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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'},
      {name:'The Lasting Significance of the Context Window Problem', date:'05/23', media:'Window3', description:'A deep dive into why issues with limited LLM context windows will last beyond the short term.', link:'context', mediaBlur:'data:image/jpeg;base64,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gCggCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACooAAigIAACgIAIAAACgAAACACgAIAogAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAqIAAAogAAAAKAgoCAAAAIoCACoKgCKiqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKigAqIAAKAgAAoAACACgAAAAigqCoAigIigqIoKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKACiACAoCAooAoiKAAAAoCCiiCoAigIKAiKCoigIigqIqCgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAogCgAogCgiigigoCgIKAAAACIKAgoCI0gqI0gIjSKIjSAiKCoiiKgqAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKACiAKAKKgooIooIooIKACgIKAgoAigIKAgoCIoCI0iiI0gMigMo0grIqKACKgoggCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgqoAoCigCgAoAKACgAoCKAAoCCgIKAgoCIoCCijIoDIoDKNICIqKMipQQAUAQEUQQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVEUUBUUBRRBQAUUAFABQRRQQUABQQUBBQEFAQUBBUBBRRBUBEaQERQGUaRRmo0lBmotRQARQBARUQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQFARQABQAUBRQFRQFFABQAUAFABQABAFBFAAAAABFFEFQBFAQVAQVARGkBEVFEZrSUVlK0zVEAEAEUAQQVEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUUAABQBQAUBQAUVAUAUFABQAUAFAAAUAAABQEUAEUEQUUQUFRFAQVAQVARFARFRREVAZqVqsqIi1AABABFEUZEAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRRFAAAAAABQBQAUAFAUAUFAVFQFAFBQAUAFAAAFAAAAUEFAQUUQUBAAEUBEUBEUBEUBEVFERUBmo1WaozUaqKIAiACKAIIKiAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCgAAAoAAAAKAAACgCgAqooCigAoCoqAqKAoAKACooAACgAAAAAAoAAIoCAAIqAIqAIqAiKiiJWkoM1KtSqM1FqKIAiACAAiiKiAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAKCgAoAAAAAoIKAAAKigKigKigKAKqKAoAoAKAgoAKACgAKigAAAACiiCgIAAAAigIACAAiKgCKiiJVSgjNaZqiVlqs1QRUEAEABFAGRAEAAAAAAAAAAAAAAAAAAAAAAAAAAABRQAAFAAAFAAAAAABQAFRQUAFABVRQUAFBQFRUBUUAAFABQAAAFRVAAAABFQAAAAEAARUBAARFRREVARKqVRms1qs1QRUEAEABFAEEAZAAAAAAAAAAAAAAAAAAAAAAAAAABUVQAAAUAAFRQAAAAAAUABQBQAUAFUAUAFUAFBAUAAAUAFAAAAUFAAAABAAAAABAAEAEAURABEAESgozWaCggCACAAigCCAMgAAAAAAAAAAAAAAAAAAAAAAAAAAoKAAACgAAoAAAAA//9k='},
      {name:"How to Make the World's Largest Bowl of Cereal", date:'04/23', media:'knee_deep', description:'Ever had the sudden urge to construct a 9,000+ pound cereal bowl? Of course not. In case you ever do, this guide is here to help.', link:'cocoa-puffs', mediaBlur:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAQQDAAAAAAAAAAAAAAAAAQQCAwURFDFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQP/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIRMf/aAAwDAQACEQMRAD8Amm5KTyJG609XF2vAAE8K0lp//9k='},
      {name:'For the Student Dreading the End of University', date:'01/23', media:'grad', description:'A letter written to my younger self, and any other students who are currently feeling lost.', link:'new-beginning', mediaBlur:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAEAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAaEAABBQEAAAAAAAAAAAAAAAAAAQIDBBFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ+3blbFEiZmcAAH/9k='}
    ]

    return (
      <div className='font-lato w-full flex bg-gradient-to-b from-teal to-navy select-none min-h-screen'>
      <Head>
          <title>Joe Weller</title>
          <meta name="description" content="Where I write about things that interest me." />
          <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="mx-auto lg:w-1/2 lg:mx-auto md:mx-24 w-full lg:text-center text-left">
        <div className='mx-auto pt-36'>
          <div className='text-white text-left mx-5 mb-24'>
            <div className='text-4xl font-bold'>
              Blog
            </div>
            <div className='text-xl mt-7 mb-5'> 
              Welcome. This is where I write about things that interest me.
            </div>
            <BlogSearch setResults={setSearchResults}/>
            <div className='text-2xl font-bold mt-5 pb-3 md:pb-0'>
              General Posts
            </div>
            {searchResults.length > 0 ? (typeof searchResults[0] == "string" ? 
            <div className='text-navy md:mt-6 -mb-2 text-xl'>Unable to find the term <p className='text-mint inline-block'>{searchResults[0]}</p> in any of the blogs, please try again.</div>
             : posts.map(post => {
              let highlghts:any = [];
              searchResults.forEach((result:any) => {
                if (result.title === post.name) {
                  highlghts = result.highlights;
                }
              })
              if (highlghts.length > 0) return <BlogCard key={post.name} {...post} highlights={highlghts}/>
            })) : posts.map(post => <BlogCard key={post.name} {...post}/>)}
            <div className='text-2xl font-bold mt-7 md:mt-14'>
              Random Posts
            </div>
            <BlogCard name='Italy on Film' date='09/23' media='Italy-16' description='A collection of some pictures I took from my trip to Italy.' link='italy' mediaBlur='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABqAIkDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EACgQAQACAQMDAwQDAQAAAAAAAAABAgMEEWEhMVESFEEFE0JSM3GBkf/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAGxEBAQEAAwEBAAAAAAAAAAAAAAERAhIhUUH/2gAMAwEAAhEDEQA/APZgAAAMW7Mo8ltoBBllRzStZbKWazTKpmlQzSt5rKOayIq5ZQTPVvlurTk6iLFZT0lSpdYpduNxcpKasqtLpq3aaWIk3RRdn1qr2g19UeT1w4MthFOWIR2z8gmteIVsmRFfNyrZM3KjfLkUs2RjLm5U82blNZa5sihny92c+eI36uXqNTvv16M3kzaznz99pVLZuvRHe82nhosn1Zx+p6amYnqt4tTE/LmsxMx2blbnjuY80eU9crg01Fq/KxTVy3LK3JrtRlZ+7y5Maxn3n9tYvV773PLE6nlwvfR5YnXR5efWcdq2p5RW1PLjW10fsiv9Qr+ydkx176nlXyanlx8n1KsflCpl+pxPad07fErr5dVHlQz6yI36uXk1t79le17W7ymcqzlqzn1U2npO6ra02neWBuSRZMAFUAAABnefJ6p8sAan91l/aWJ1OWfzlCJka7VvObJP5z/1rNrT3tM/6wGRNoAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALvsbeGltHePiXovsR4aWwR4dfPjfjzdsF694lHMTD0V9PHhTz6Os/B1lZuOQJs2Ccc9e3lFMbMcuNiMAMgAAAAAAAAAD3HoazRK1s6Kr3orZKLllfIo5upxRMT0cnJX02mHbz9pcfP/JLpPZjH6gAeZoAAAAAAAAAB/9k='/>
            <BlogCard name='Bucket List' date='--/--' media='bucket' description='A list of things to do.' link='bucketlist' mediaBlur='data:image/jpeg;base64,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'/>
            <div className='text-2xl font-bold mt-7 md:mt-14'>
              My Recipes
            </div>
            <div className='text-xl mt-7'>
              <Link href='/blog/orange' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>PX Orange Chicken 🍊</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/avocado' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Easy Avocado Toast 🥑</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/shake' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Zeus&apos; Protein Shake 🍫</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/rice' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Garlic Fried Rice 🍚</span></Link>
            </div>
            <div className='text-xl mt-4'>
              <Link href='/blog/pizza' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-pointer'>Perfect NYC Pizza 🍕</span></Link>
            </div>
            <div className='text-2xl font-bold mt-7 md:mt-14'>
              Other Blogs I Enjoy
            </div>
            <div className='text-xl mt-7'>
              <a href='http://www.paulgraham.com/articles.html' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Paul Graham</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://sive.rs/blog' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Derek Sivers</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://geohot.github.io/blog/' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>George Hotz</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://paulstamatiou.com/' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Paul Stamatiou</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://substack.com/@christianhennig' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Chip Hennig</span></a>
            </div>
            <div className='text-xl mt-4'>
              <a href='https://mango.pdf.zone/' target="_blank" rel="noreferrer"><span className='hover:text-teal underline hover:cursor-nesw-resize'>Alex Mango</span></a>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
  };
  
  export default Blog;
  