import type { NextPage } from 'next'
import Button from '../components/button'
import { CardInner, CardOuter } from '../components/card'
import Elec from '../components/elec'
import Hi from '../components/hi'
import PageContainer from '../components/page-container'
import ProjectTile from '../components/project-tile'
import { getAllProjects } from './api/projects-static'

export async function getStaticProps() {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
}

const Home: NextPage = (props: any) => {
  return (
    <>
      <PageContainer title="Home">
        <div className="flex flex-row align-left justify-left">
          <Elec className="flex-shrink mt-2 left-2" />
          <span className="flex-grow w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12" />
        </div>
        <CardOuter>
          <CardInner>
              <Hi className="mt-auto mb-auto" />
            <div className="flex flex-wrap align-center justify-center">
              {/* <video muted autoPlay className="sm:w-6/12 absolute h-40 w-20" src="https://test4.mikel.tech/arcade-foldup-fb.mp4" /> */}
              <img className="sm:w-6/12" src="/assets/111-coding.png" alt="A web illustration of a smiling coffy cup and a clipboard checklist next to a laptop" />
            </div>
            <div className="mt-3 text-sm sm:text-lg ml-5 mr-5 flex flex-col gap-4 mb-5">
              <p>
                I’m a Full Stack Engineer & UX Designer with a passion for making things and helping others.
              </p>
            </div>
          </CardInner>
        </CardOuter>
        <div className="mt-10 mb-[-5px] pb-10 w-full min-h-screen bg-[#080808CC] backdrop-blur-md">
          <h2 className="text-3xl text-primary text-center m-4 mt-10">Featured Projects</h2>
          <div className="w-full flex gap-4 sm:gap-10 flex-row flex-wrap items-center justify-center pt-4">
            {props.projects.filter((proj: any) => proj.featured).map((proj: any) => {
              return <ProjectTile key={proj.slug} {...proj} />
            })}
            <CardInner type="M" className="w-80 h-40 bg-[#2c2c2cCC] max-w-xxl sm:max-w-sm flex flex-col justify-center">
              <Button href="/projects" className="m-auto w-60 text-xl text-center">All Projects</Button>
            </CardInner>
          </div>
        </div>
      </PageContainer>
    </>
  )
}

export default Home;
