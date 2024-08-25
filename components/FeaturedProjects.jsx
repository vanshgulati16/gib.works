'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function FeaturedProjects() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Collaborated and featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            name="SolanaCiv"
            description="Fully on-chain strategy game inspired by Civilization. Built on @Solana."
            imageSrc="/sol.jpg"
            stats={[
              { value: "1K+", label: "Players" },
              { value: "100+", label: "Contributors" },
              { value: "$500K", label: "Total Value Locked" }
            ]}
          />
          <ProjectCard 
            name="Anchor"
            description="Anchor is a framework for Solana providing several convenient tools for writing smart contracts."
            imageSrc="/anchor.png"
            stats={[
              { value: "5K+", label: "Stars" },
              { value: "1K+", label: "Forks" },
              { value: "200+", label: "Contributors" }
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ name, description, imageSrc, stats }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
      bg-gray-800 bg-opacity-30 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageSrc} alt={name} width={64} height={64} className="mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-gray-200">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between text-sm">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className={`font-bold ${isHovered ? 'text-purple-400' : 'text-gray-300'} transition-colors duration-300`}>
              {stat.value}
            </p>
            <p className={`${isHovered ? 'text-purple-400' : 'text-gray-500'} transition-colors duration-300`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}