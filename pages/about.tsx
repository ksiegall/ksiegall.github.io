import type { NextPage } from 'next'
import PageContainer from '../components/page-container'
import { CardInner, CardOuter } from '../components/card'
import { FaFilePdf, FaLinkedin, FaQuestionCircle } from "react-icons/fa";
import Button from '../components/button';

const About: NextPage = () => {
  return <>
    <PageContainer title="About">
      <span className="h-20" />
      <CardOuter>
        <CardInner>
          <div className="flex flex-col sm:flex-row sm:gap-10 p-4 mt-[-100px] justify-center items-center sm:gap-0">
            <div className="w-60 flex flex-col gap-1">
              <img  src="/assets/profile.png" 
                    className="w-40 h-40 max-w-40 max-h-40 ml-auto mr-auto rounded-full bg-white border-2 border-white"
                    title="It's me!"
                    alt="Picture of me :)" />
              {/* <p className="sm:hidden text-xs text-gray-300 italic">art by <a href="https://ko-fi.com/makowka" target="_blank">mischa makowka</a></p> */}
            </div>
            <div className="w-full mr-auto ml-auto sm:mt-20 flex flex-col gap-0 text-left p-5">
              <h3 className="text-primary text-2xl sm:text-4xl">Kevin Siegall</h3>
              <h3 className="flex flex-row gap-2 w-full text-primary text-md sm:text-2xl"><span>(they/them)</span> <a className="mt-auto mb-auto text-sm sm:text-md" href="https://en.wikipedia.org/wiki/Preferred_gender_pronoun" target="_blank"><FaQuestionCircle /></a></h3>
              {/* <p className="hidden sm:block text-xs text-gray-300 italic">↖️ art by <a href="https://ko-fi.com/makowka" target="_blank">mischa makowka</a></p> */}
            </div>
          </div>
          <div className="text-left">
            <p className="text-md p-5">Hey! I'm a Senior at WPI studying Computer Science and Robotics Engineering! 
                        I specialize in robotics perception and navigation, but I also been dabble in Reinforcement and Deep Learning. 
                        I create games in my free time for Game Jams that are held on campus, and have a bunch of small side projects to keep myself busy.</p>
            <br />
            <p className="text-md p-5">I am looking for a full-time position beginning after my graduation in May 2025. 
              I am interested in finding work that matches my experience while leaving room for my skills to develop over time.</p>

            <p className="text-sm p-5">gif on homepage made by @harryr_20 on Instagram</p>
          </div>
        </CardInner>
      </CardOuter>
      <CardOuter reverse>
        <CardInner className="flex flex-col justify-center items-center" reverse>
          <div className="p-4 flex flex-col sm:flex-row gap-2 justify-center" >
            {/* <img className="ml-auto mr-auto max-w-20 w-20" src="/assets/day22-owl.png" /> */}
            <h3 className="text-primary text-lg sm:text-2xl mt-auto mb-auto">
              See my resume here!
            </h3>
          </div>
          <div className="flex flex-row gap-5 m-5 justify-center">
            <Button className="w-20 sm:w-80 flex flex-row justify-center m-auto gap-2 text-lg" href="/resume.pdf"><FaFilePdf className="mt-auto mb-auto" /><span className="hidden sm:block">PDF Download</span></Button>
            <Button className="w-20 sm:w-80 flex flex-row justify-center m-auto gap-2 text-lg" href="https://www.linkedin.com/in/kevin-siegall/"><FaLinkedin className="mt-auto mb-auto" /><span className="hidden sm:block">LinkedIn</span></Button>
          </div>
          <div className="justify-center w-full sm:w-10/12 h-[70vw]">
            <iframe className="justify-center w-full h-[70vw]" src="https://drive.google.com/file/d/1bC0MNl8rGG096pHY3Vx_pQSIkB7RKY_z/preview">Failed to load resume - download <a href="/resume.pdf" target="_blank">here</a></iframe>
          </div>
        </CardInner>
      </CardOuter>
      <span className="h-10" />
    </PageContainer>
  </>
}

export default About
