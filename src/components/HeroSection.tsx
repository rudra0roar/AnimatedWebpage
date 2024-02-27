import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'

export default function HeroSection() {
    return (
        <div
            className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0 text-white'
        >
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"'>Master the art of Music</h1>
                <p className='mt-10 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your music journey today. Whether you're a beginner or looking to refine your skills, join to unlock your true potential.</p>
                <div className='mt-4'>
                    <Link href="/courses">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-neutral-300 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            // borderClassName='border-[1px]'
                            duration={4000}
                        >
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 
