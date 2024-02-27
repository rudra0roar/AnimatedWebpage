"use client"
import React from 'react'
import courseData from "@/data/music_courses.json"
import { BackgroundGradient } from './ui/background-gradient'
import Link from 'next/link'

interface course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean
}

export default function FeaturedCourses() {
    console.log("course Data", courseData);
    const featuredCourses = courseData.courses.filter((course) => course.isFeatured)
    return (
        <div>
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-5 mx-8 mt-20'>
                {
                    featuredCourses.map((course: course, index) => (
                        <BackgroundGradient key={index} className='bg-black/[0.80] rounded-3xl px-1'>
                            {
                                <div className='flex flex-col h-[250px] justify-between'>
                                    <div className='mt-7'>
                                        <p className='text-3xl text-center text-white'>{course.title}</p>
                                    </div>
                                    <div>
                                        <p className='text-lg text-center text-white/55'>{course.description}</p>
                                    </div>
                                    <div className='bg-white w-[50%] mx-auto mb-5 py-2 rounded-lg'>
                                        <p className='text-center'>Learn More</p>
                                    </div>
                                </div>

                            }
                        </BackgroundGradient>
                    ))
                }
            </div>
            <div className="mt-20 pb-8 text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All courses
                </Link>
            </div>
        </div>
    )
}
