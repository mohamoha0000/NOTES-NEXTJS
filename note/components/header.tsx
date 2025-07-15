import Link from 'next/link';




export default function Header({ minimal = false }: { minimal?: boolean }){

    return(
        <header style={{ backgroundColor: '#DCD0A8'}} className="flex items-center justify-between p-4 sticky top-0 z-10">
            <Link href="/"><h1>Notes</h1></Link>
            <ul className="flex gap-x-4">
                <li className="cursor-pointer">
                <a href='/#' className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300">
                    Home
                </a>
                </li>
                <li className="cursor-pointer">
                <a href='/#about' className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300">
                    About
                </a>
                </li>
                <li className="cursor-pointer">
                <a href='/#contact' className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300">
                    Contact
                </a>
                </li>
            </ul>
            {!minimal && (
            
                <Link href="/register"><button className="text-white bg-[#4A9782] p-2 rounded-md hover:bg-[#004030] transition-colors duration-300">Get Started</button></Link> 
            
            )}
        </header>
    )
}