import { FaDiscord, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-gray-300">At Gibwork, we're on a mission to revolutionize open source and drive Web3 adoption.</p>
        <div className="flex justify-center space-x-6">
            <SocialIcon href="https://discord.com/invite/U3kEda4b" target="_blank" rel="noopener noreferrer" Icon={FaDiscord} label="Discord" />
            <SocialIcon href="https://x.com/gib_work" target="_blank" rel="noopener noreferrer" Icon={FaXTwitter} label="Twitter" />
            <SocialIcon href="https://www.youtube.com/@gibwork_" target="_blank" rel="noopener noreferrer" Icon={FaYoutube} label="YouTube" />
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, Icon, label }) {
  return (
    <a href={href} className="hover:text-purple-400 transition-colors">
      <Icon className="text-2xl" />
      <span className="sr-only">{label}</span>
    </a>
  )
}