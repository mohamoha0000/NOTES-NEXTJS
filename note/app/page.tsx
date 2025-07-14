import Image from 'next/image';

export default function HOME(){
  return(
    <div>
       <header style={{ backgroundColor: '#DCD0A8'}} className="flex items-center justify-between p-4">
      <h1>Notes</h1>
      <ul className="flex gap-x-4">
        <li className="cursor-pointer">
          <a className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300">
            Home
          </a>
        </li>
        <li className="cursor-pointer">
          <a className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300">
            About
          </a>
        </li>
        <li className="cursor-pointer">
          <a className="pb-1 border-b-2 border-transparent hover:border-black transition-all duration-300">
            Contact
          </a>
        </li>
      </ul>
      <button style={{ backgroundColor: '#4A9782'}} className="text-white p-2 rounded-md">Get Started</button>
    </header>
    <main>
      <div className='flex items-center justify-around m-2'>
        <div className='w-1/3'>
          <Image
          src="/images/ding.png" // or from public folder
          alt="Logo"
          width={400}
          height={400}
          className=""
        />
        </div>
        <div className='w-1/3'>
          <h1 className='text-3xl text-notes-green'>Notes organize</h1>
          <p>Quickly capture, organize, and access your notes anytime, anywhere. Our platform makes it easy to jot down ideas, manage tasks, and stay productive—all in one place.</p>
        </div>
      </div>
    </main>
    </div>
  )
}