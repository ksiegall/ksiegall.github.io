import type { NextPage } from 'next';
import { CardInner } from '../../components/card';
import PageContainer from '../../components/page-container';
import { getAllProjects } from '../api/projects-static';
import Button from './../../components/button';
import ProjectTile from './../../components/project-tile';

export async function getStaticProps() {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
}

const Projects: NextPage = (props: any) => {
  return <>
    <PageContainer title="Projects">
      <div className="mt-10 mb-[-5px] pb-10 w-full min-h-screen bg-[#121212CC] backdrop-blur-md">
          <h2 className="text-3xl text-primary text-center m-4 mt-8">All Projects</h2>
          <div className="w-full flex gap-4 sm:gap-10 flex-row flex-wrap items-center justify-center pt-4">
            {props.projects.filter((proj: any) => true).map((proj: any) => {
              return <ProjectTile key={proj.slug} {...proj} />
            })}
          </div>
        </div>
    </PageContainer>
  </>
}

export default Projects