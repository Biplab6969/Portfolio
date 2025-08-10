import React from 'react'
import { SlGraduation } from 'react-icons/sl'
import ResumeCard from './ResumeCard'
import { BiSolidSchool } from 'react-icons/bi'

const Resume = () => {
    return (
        <div className='pt-20 pb-16'>
            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
                <div>
                    <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                        My <span className='text-cyan-200'>Education</span>
                    </h1>
                    <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                        <ResumeCard
                            Icon={SlGraduation}
                            role='Government College of Engineering, Kalahandi'
                            date='2022 - 2026'
                            description='BTech in Computer Science and Engineering CGPA - 8'
                        />
                        <ResumeCard
                            Icon={BiSolidSchool}
                            role='Fakir Mohan Higher Secondary School, Balasore'
                            date='2020 - 2022'
                            description='Intermediate of Science'
                        />
                        <ResumeCard
                            Icon={BiSolidSchool}
                            role='Jayrampur High School'
                            date='2017 - 2020'
                            description='Schooling'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
