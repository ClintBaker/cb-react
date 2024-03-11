import { useState } from 'react'
import HorizontalNav from './horizontalNav'
import PortfolioItems from './portfolioItems'
import SmallNav from './smallNav'

const portfolioItems = [
  {
    id: 0,
    name: 'Reqbro',
    description:
      'A command line tool developed to query a free tier Render.com app at an interval in order to prevent the server from spinning down 😉.',
    imgUrl: '/assets/reqbro.jpeg',
    link: 'https://github.com/ClintBaker/reqbro',
  },
  {
    id: 1,
    name: 'Golf Course Ranker',
    description:
      'A MERN Stack project that allows users to rank and manage their favorite golf courses, and browse courses based on user ranks.',
    imgUrl: '/assets/gcr.jpeg',
    link: 'https://gcr-7rlp.onrender.com/',
  },
  {
    id: 2,
    name: 'Shopify Development',
    description:
      "Throughout my career I've developed, worked on, improved, and maintained a number of Shopify apps, storefronts, and micorservices.",
    imgUrl: '/assets/shop.jpeg',
    link: 'https://github.com/ClintBaker',
  },
]

const Portfolio = () => {
  const [active, setActive] = useState(portfolioItems[0])

  function handleActive(id: any) {
    const newActiveIndex = portfolioItems.findIndex((item) => item.id === id)
    console.log(newActiveIndex)
    setActive(portfolioItems[newActiveIndex])
  }
  return (
    <div
      id="portfolio"
      className="py-24 flex flex-col justify-center items-center mx-auto px-0 text-white bg-gradient-to-r from-blue-700 from-10% via-blue-500 via-65% to-sky-500 to-90%"
    >
      <div className="container mx-auto px-0">
        <div className="text-center">
          <h2 className="text-4xl">Portfolio</h2>
          <p className="mt-4">Take a look at some of my work.</p>
        </div>
        <div className="grid grid-cols-12 gap-2 mt-12 md:mt-8 ">
          <div className="col-span-12 lg:col-span-4">
            <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center lg:h-full">
              <HorizontalNav
                portfolioItems={portfolioItems}
                active={active}
                setActive={handleActive}
              />
            </div>
            <div className="flex flex-col justify-center items-center lg:hidden bg-blue-400 bg-opacity-45 rounded-lg border-[1px] border-blue-400 mx-6 p-4">
              <SmallNav
                portfolioItems={portfolioItems}
                active={active}
                setActive={handleActive}
              />
              <p className="mt-6 h-16 px-8 text-sm">{active.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center col-span-12 lg:col-span-8 mx-4 p-2 lg:mx-0 lg:p-0">
            <PortfolioItems
              portfolioItems={portfolioItems}
              active={active}
              setActive={handleActive}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
