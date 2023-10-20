import { useRouter } from 'next/router';
import Link from 'next/link';
import { BsTools, BsFillPersonLinesFill, BsFillHouseFill } from 'react-icons/bs';

export default function Nav(props: any) {
    const router = useRouter();
    const active = " underline underline-offset-4 decoration-primary text-primary hover:text-white-200";
    const routeDec = (path?: string) => {
        if (path) {
            return router.pathname.toLowerCase().includes(path) ? active : "";
        } else {
            return router.pathname.length < 2 ? active : "";
        }
    };

    return <>

        <div style={{ 'minHeight': 60, fontFamily: 'Lexend, Helvetica, sans-serif', letterSpacing: 1.3, fontWeight: 500, overflow: 'initial' }}
            className={(props.sticky ? "sticky lg:hidden " : "") + "lg:sticky top-0 z-20 w-full flex flex-col lg:flex-row backdrop-blur-sm border-[#121212] border-b-[1px] bg-black/80 p-4 lg:pl-20 lg:pr-20 text-center"}>
            {!props.sticky && <>
                <Link href="/" className="flex flex-row flex-1 text-left justify-left">
                    {/* <img src={'/assets/logo.png'}
                        style={{ maxHeight: 50, maxWidth: 50 }}
                        className="flex-none hidden lg:block"
                        alt="Mikel's personal logo - a programmer terminal, gear, and checkox inside a lightbulb" /> */}
                    <div className="flex flex-col flex-grow text-center lg:text-left">
                        <h2 className="text-2xl">
                            Mikel Matticoli
                        </h2>
                        <h3 className="text-xs">
                            {'Technical Designer  •  Engineer'}
                        </h3>
                    </div>
                </Link>
            </>}
            <div className={(!props.sticky ? "hidden lg:flex " : "") + "flex justify-center text-sm text-center lg:justify-left lg:text-left lg:text-lg gap-8 md:gap-12 lg:mr-4 "}>
                <span className="flex-1 hidden lg:block" />
                <Link className={"flex flex-row gap-2 w-30 hover-text-primary" + (routeDec())} href="/">
                    <BsFillHouseFill className="mt-auto mb-auto" /><span className="mb-auto mt-auto">Home</span>
                </Link>
                <Link className={"flex flex-row gap-2 w-30 hover-text-primary" + (routeDec('about'))} href="/about">
                    <BsFillPersonLinesFill className="mt-auto mb-auto" /><span className="mb-auto mt-auto"> About</span>
                </Link>
                <Link className={"flex flex-row gap-2 w-30 hover-text-primary" + (routeDec('projects'))} href="/projects">
                    <BsTools className="mt-auto mb-auto" /><span className="mb-auto mt-auto">Projects</span>
                </Link>
            </div>
        </div>
    </>
}