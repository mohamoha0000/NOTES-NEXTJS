import Image from 'next/image';
import Header from '@/components/header';
export default function HOME(){
  return(
    <div>
    <Header/>
    <main className='mx-auto max-w-[1000px]'>
      <div className='flex items-center justify-around m-2'>
        <div className='w-1/3'>
          <Image
          src="/images/ding.png" // or from public folder
          alt="Logo"
          width={400}
          height={400}
          className="move-up-down"
        />
        </div>
        <div className='w-1/3'>
          <h1 className='text-3xl text-notes-green'>Notes organize</h1>
          <p>Quickly capture, organize, and access your notes anytime, anywhere. Our platform makes it easy to jot down ideas, manage tasks, and stay productive—all in one place.</p>
        </div>
      </div>
      <div id="about" className='flex items-center'>
        <div className="w-[40%] h-[2px] bg-[#004030] mx-auto my-4" />
        <h1>About</h1>
        <div className="w-[40%] h-[2px] bg-[#004030] mx-auto my-4" />
      </div>
      <div className='w-[70%] mx-auto'>
        <p>We’re a small team of developers and creatives passionate about productivity and simplicity. This platform was built to help people capture ideas, stay organized, and get more done—with a clean, user-friendly experience. Our mission is to make note-taking effortless and accessible for everyone.</p>
      </div>
      <div id="contact" className='flex items-center'>
        <div className="w-[40%] h-[2px] bg-[#004030] mx-auto my-4" />
        <h1>Contact</h1>
        <div className="w-[40%] h-[2px] bg-[#004030] mx-auto my-4" />
      </div>
      <div className='flex items-center justify-between w-[80%] mx-auto'>
        <div className='w-[40%] flex flex-col'>
          <label htmlFor="email">Email:</label>
          <input className='border-2 border-[#004030] p-2 focus:border-[#4A9782] outline-none' type="email" id="email" placeholder='entre email...'/>
        </div>
        <div className='w-[40%] flex flex-col'>
          <label htmlFor="subject">Subject:</label>
          <input className='border-2 border-[#004030] p-2 focus:border-[#4A9782] outline-none' type="text" id="subject" placeholder='entre email...'/>
        </div>
      </div>
      <div className='w-[80%] mx-auto flex flex-col mt-4'>
        <label htmlFor="message">message:</label>
        <textarea className='resize-none border-2 border-[#004030] p-2 focus:border-[#4A9782] outline-none' id="message" placeholder='entre message...' rows={5}></textarea>
      </div>
      <div className='w-[80%] mx-auto mt-4'>
        <button className='text-white p-2 rounded-md w-full bg-gradient-to-r from-[#004030] to-[#4A9782] hover:from-[#4A9782] hover:to-[#004030] transition-colors duration-300'>Submit</button>
      </div>
    </main>
    <footer className='m-5'>
      <h1 className='text-[#004030] text-center'>© 2025 Notes. All Rights Reserved.</h1>
    </footer>
    </div>
  )
}