
import { Button } from "@/components/ui/button"
import { FaArrowRight } from 'react-icons/fa';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="py-20 text-center bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-6">Collaborating with Top Open Source Initiatives</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
        Explore cutting-edge projects, leverage your skills, and become part of a worldwide community of developers shaping the future of technology.
      </p>
      <HoverCard>
        <HoverCardTrigger>
          <Link href="https://app.gib.work/" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group bg-purple-500 hover:bg-purple-600 text-white">
              Go to App
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="bg-gray-800 text-white mt-2 p-4">
          You're early! We're currently in <span className="text-purple-400"><b>Public Beta</b></span> and invite you to participate by clicking the button below.
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

