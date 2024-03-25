import Attributes from './attributes'
import Skills from './skills'
import Workx from './workx'

const About = () => {
  return (
    <div id="about" className="py-24 bg-white rounded-t-[40px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About me</h2>
          <p className="text-xl text-blue-600">
            A little more about who I am and what I do.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg">
            I'm a non-traditional software developer with a passion for
            developing business applications. As a part of the development team
            at{' '}
            <span>
              <a
                target="_blank"
                className=" underline"
                href="https://www.jlbcompanies.com"
              >
                JLB Companies
              </a>
            </span>
            , I've helped facilitate the sale of $20M+ in digital revenue
            annually. I've been a crucial part of the development of bespoke
            business process management software focused on delivering curated
            KPIs in a custom format. Acted as founding developer to bring an MVP
            based on our product management team’s user requirements, and
            ensured the delivery of quality software on a demanding schedule.
            Always seeking personal growth, I expanded my coding acumen through
            a 1,000+ hour coding Bootcamp focused on JavaScript, where I was
            invited to return as a teaching assistant. Let's build something!
          </p>

          <div className="mt-8 grid grid-cols-12 gap-3 h-fit">
            <div className="rounded-lg col-span-12 md:col-span-8 p-4 md:p-4  text-black">
              <Workx />
            </div>

            <div className="flex flex-col justify-between col-span-12 md:col-span-4 h-full">
              <Skills />
              <Attributes />
            </div>
          </div>
        </div>
        <a href="assets/clint-baker-resume.pdf" target="_blank">
          <div className="mt-12 flex justify-center items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Download my resume
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default About
