import { BackgroundBeams } from '@/components/ui/background-beams'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative ">
    {' '}
    {/* Ensure the container is relative */}
    {/* BackgroundBeams with adjusted z-index */}
    <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 bg-black/[0.86]" />
    {/* Content with higher z-index */}
    <div className='flex flex-col justify-center items-center text-3xl h-full'>
        <p className='z-10 text-white '>These pages are Under Progress...</p>
    </div>
  </div>
  )
}
