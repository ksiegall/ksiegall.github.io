import type { NextPage } from 'next'
import { FaClock, FaDesktop, FaLink,  FaMedal, FaTasks, FaUserAstronaut, FaUsers, FaSteam, FaBook, FaWindows, FaDoorOpen, FaGithub } from "react-icons/fa"
import PageContainer from '../../components/page-container'
import { CardInner, CardOuter } from '../../components/card'
import { getProjectData, getProjectPaths } from '../api/projects-static'
import Badge from './../../components/badge';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Project } from '../api/projects-static';
import { GoVideo } from "react-icons/go";
import React from 'react';

const iconClass= "text-primary inline ml-2 mb-1"
const iconButton= "text-primary ml-2 mb-1 text-white"
const iconMap : Record<string, JSX.Element> = {
    "Website": <div className="p-4 rounded-lg bg-primary"><FaLink /></div>,
    "Github": <div className="p-4 rounded-lg bg-primary"><FaGithub /></div>,
    "Videos": <div className="p-4 rounded-lg bg-primary"><GoVideo /></div>,
    "Steam": <div style={{backgroundColor: '#422c59'}} className={iconButton+" p-4 rounded-lg text-xl"}><FaSteam /></div>,
    "Paper": <div className="p-4 rounded-lg bg-primary"><FaBook /></div>,
    "windows": <FaWindows className={iconClass+" text-primary ml-auto mr-auto"} />,
    "escape": <FaDoorOpen className={iconClass} />,
};


//TODO move to API
export async function getStaticPaths() {
    return {
        paths: await getProjectPaths(),
        fallback: false,
    };
}

interface ProjectProps {
    project: Project
}

export async function getStaticProps({ params }: any) {
    return {
      props: {
        project: await getProjectData(params.slug),
      },
    };
  }

const YouTubeEmbed = ({src} : any) => {
    return <iframe style={{maxWidth: "80%", margin: "auto", marginBottom: 30, height: "100%"}} title="YouTube video player" data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full h-full sm:min-h-[300px]" src={src} >Failed to load video</iframe>
}

const VideoEmbed = ({ src }: { src: string }) => {
    return (
      <video
        controls
        style={{ maxWidth: "80%", margin: "auto", marginBottom: 30, height: "100%" }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

const ProjectPage: NextPage<ProjectProps> = ({project}) => {
  return <>
    <PageContainer title="Projects">
        <div className="w-full bg-black p-6">
            <h1 className="text-4xl">{project.title}</h1>
            <span className="text-xs text-[var(--primary)]"><a className="underline" href="/projects">projects</a> {">"} {project.slug}</span>
        </div>
        <div className="flex flex-col gap-4 lg:gap-2 lg:flex-row w-full sm:w-11/12 lg:w-10/12 mr-10 ml-10 mt-5 mb-5">
            <CardOuter override className="h-fit sm:flex-initial backdrop-blur-sm sm:min-w-[250px] w-full ml-auto mr-auto sm:w-full lg:w-[30%] ">
                <CardInner type="" className="flex flex-col p-0 pl-0 pt-0 pb-0 pr-0 text-left">
                    <h3 className="text-primary text-xs font-medium">Project Type
                        {iconMap[project.type_icon] || <FaDesktop className={iconClass} />}
                    </h3>
                    <p className="text-sm font-medium mb-5">{project.type}</p>
                    <h3 className="text-primary text-xs font-medium">My Roles
                        <FaUserAstronaut className={iconClass} />
                    </h3>
                    <p className="text-sm font-medium mb-5">{project.roles}</p>
                    <h3 className="text-primary text-xs font-medium">Team Size
                        <FaUsers className={iconClass} />
                    </h3>
                    <p className="text-md font-medium mb-5">{project.team_size}</p>
                    <h3 className="text-primary text-xs font-medium">Additional Responsibilities
                        <FaTasks className={iconClass} />
                    </h3>
                    <p className="text-sm font-medium mb-5">{project.responsibilities}</p>
                    <h3 className="text-primary text-xs font-medium">Timeline
                        <FaClock className={iconClass} />
                    </h3>
                    <p className="text-sm font-medium mb-5">{project.timeline}</p>
                    <h3 className="text-primary text-xs font-medium">Achievements
                        <FaMedal className={iconClass} />
                    </h3>
                    <ul className="text-sm font-medium mb-5">{project.achievements.map(a => {
                        return <li>• {a}</li>
                    })}</ul>

                </CardInner>
            </CardOuter>
            <CardOuter override reverse className="h-min sm:flex-initial backdrop-blur-sm sm:min-w-[500px] w-full ml-auto mr-auto sm:w-full lg:w-[66%] ">
                {/* <CardInner reverse type="T">
                    <span className="text-2xl">
                        {project.title}
                    </span>
                </CardInner>  */}
                <CardInner type="T" reverse>
                    <Swiper spaceBetween={50}
                            modules={[Navigation, Pagination, EffectFlip]}
                            mousewheel={true}
                            className="min-h-[200px]"
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                        {project.media.map((t: any) => {
                            return <SwiperSlide className="flex flex-col items-center align-middle justify-center" key={t[0]}>
                                {t[0].includes("png") || t[0].includes("jpg") ? 
                                    <img style={{maxWidth: "80%", margin: "auto", marginBottom: 30}} src={t[0]} alt={t[1]} /> :
                                 t[0].includes("youtu") ? 
                                    <YouTubeEmbed src={t[0]} /> :
                                 t[0].includes("mp4") ?
                                    <VideoEmbed src={t[0]} /> :
                                 "Unrecognized media type "+t[0]
                                }
                            </SwiperSlide>
                        })}
                    </Swiper>
                </CardInner>
                <CardInner reverse type="M">
                    <div className="m-4 flex flex-wrap text-xs">
                        <b className="text-md mt-auto mb-auto">Made With: </b>
                        {project.tags.map((t: any) => {
                            return <Badge key={t[0]} className="text-xs" bg={t[1]}>{t[0]}</Badge>
                        })}
                    </div>
                    <div className="md m-5 text-sm text-left" dangerouslySetInnerHTML={{__html: project.content}} />
                </CardInner>
                <CardInner reverse type="B" className="flex flex-row gap-4 justify-center">
                    {project.links.map((link: [string, string?]) => {
                        return <a className="hover:scale-110 hover:-translate-y-1" key={link[0]} href={link[1]}>{iconMap[link[0]] || link[0]}</a>
                    })}
                </CardInner>
            </CardOuter>
        </div>
    </PageContainer>
  </>
}

export default ProjectPage