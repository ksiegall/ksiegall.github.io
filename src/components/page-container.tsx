import Head from 'next/head'
import ContactPopup from '../components/contact-popup'
import Fireflies from '../components/fireflies'
import Nav from '../components/nav'
import { BsFileEarmarkPdfFill, BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

export default function PageContainer(props: any) {
	return <>
		<div style={{fontFamily: 'Montserrat'}} className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
			<Head>
				<title>Kay Siegall</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />    
			</Head>
			<Nav />
			<Nav sticky />
			<Fireflies />
			<main className="flex w-full z-10 flex-1 flex-col items-center justify-center text-center transition ease-in-out duration-200">
				{props.children}
			</main>
			<ContactPopup />
			<footer className="flex flex-col justify-center items-center h-24 w-full bg-black z-30 opacity-80 p-5">
				<span className="absolute sm:mt-[-12px] mb-40 right-20 w-40 z-10 animate-bounce">Contact me 👉</span> 
				<p className="mb-2">©️2024 Kay Siegall</p>
				<div className="flex flex-row justify-center align-center gap-4">
					<a href="/resume.pdf"><BsFileEarmarkPdfFill /></a>
					<a href="https://linkedin.com/in/matticoli"><BsLinkedin /></a>
					<a href="https://github.com/matticoli"><BsGithub /></a>
				</div>
				<div className="w-full">
				</div>
			</footer>
		</div>
	</>
}