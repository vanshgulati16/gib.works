
import { FaDiscord, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


export default function Header() {
  return (
    <header className="px-10 bg-gray-800 text-white mx-auto py-6 flex justify-between items-center">
        <div className='flex justify-center space-x-2'>
            <img src='https://s3.amazonaws.com/gib.work/gib.jpeg' alt='GIB' className='w-8 h-8 rounded'></img>
            <div className="text-2xl font-bold text-white">gib.work</div>
        </div>
      <div className="flex justify-center space-x-6">
          <SocialIcon href="https://discord.com/invite/U3kEda4b" target="_blank" rel="noopener noreferrer" Icon={FaDiscord} label="Discord" />
          <SocialIcon href="https://x.com/gib_work" target="_blank" rel="noopener noreferrer" Icon={FaXTwitter} label="Twitter" />
          <SocialIcon href="https://www.youtube.com/@gibwork_" target="_blank" rel="noopener noreferrer" Icon={FaYoutube} label="YouTube" />
        </div>
    </header>
  )
}

function SocialIcon({ href, Icon, label }) {
    return (
      <a href={href} className="hover:text-purple-300 transition-colors">
        <Icon className="text-2xl" />
        <span className="sr-only">{label}</span>
      </a>
    )
  }