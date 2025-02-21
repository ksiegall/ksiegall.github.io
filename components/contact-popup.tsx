import { useState } from "react"
import { BsFileEarmarkPdfFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaBriefcase, FaTimesCircle } from "react-icons/fa";

export default function ContactPopup(props: any) {
    const [ open, setOpen ] = useState(false);

    return <>
        <div className={"flex flex-col gap-2 text-left bg-zinc-900 fixed transition max-h-screen max-w-[600px] z-40 bottom-40 w-8/12 h-10/12 z-10 p-5 text-xs text-center drop-shadow-lg shadow-white-200 right-10 origin-right" + (open ? " opacity-100" : " -rotate-90 opacity-0 translate-x-20")}>
            <button className="ml-auto" onClick={() => setOpen(!open)}><FaTimesCircle /></button>
            <h5 className="text-xl">Kevin Siegall</h5>
            <p className="text-left text-sm">Question? Work inquiry? Just want to chat? I'd love to hear from you!</p>
            <p className="text-left text-xs">To protect my inbox from bots, please find my contact info on my PDF resume (linked below)</p>
            {/* <iframe style={{minHeight: 160}} src="/fail">Failed to load contact form</iframe> */}
            {/* <input type="text" className="p-1 rounded-md" placeholder="Your Email/Callback #" />
            <textarea className="p-1 rounded-md h-20 resize-none" placeholder="Message" /> */}
            <div className="flex flex-row align-center justify-center gap-6 sm:gap-12 text-2xl mt-4">
                <a title="Resume" href="/resume.pdf" target="_blank"><BsFileEarmarkPdfFill /></a>
                <a title="LinkedIn" href="https://linkedin.com/in/kevin-siegall" target="_blank"><BsLinkedin /></a>
                <a title="GitHub" href="https://github.com/ksiegall" target="_blank"><BsGithub /></a>
            </div>
        </div>
        <button className="sticky bottom-0 mt-[-64px] ml-auto z-50 mr-10 hover:scale-125 " onClick={() => setOpen(!open)}>
          <img src={open ? "/assets/hand-empty.png" : "/assets/business-card.png"} />
        </button>
    </>
}