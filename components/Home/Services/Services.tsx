import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
    return (
        <div className='pt-16 pb-16'>
            <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
                I Know that Good Dev <br /> means Good Business
            </h1>

            <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-stretch'>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <ServiceCard
                        icon="/images/s1.png"
                        name="UI and UX"
                        description="I create visually appealing, user-friendly designs that enhance usability and deliver an engaging experience, ensuring every interaction feels smooth and intuitive."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ServiceCard
                        icon="/images/s2.png"
                        name="Web Development"
                        description="I build responsive, fast-loading websites using modern technologies, ensuring they work seamlessly across devices and deliver high performance."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ServiceCard
                        icon="/images/s4.png"
                        name="MERN Development"
                        description="I develop full-stack applications using MongoDB, Express.js, React, and Node.js, delivering scalable, secure, and feature-rich solutions."
                    />
                </div>
                <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ServiceCard
                        icon="/images/s3.png"
                        name="Design & Creative"
                        description="I combine creative thinking with modern design tools to craft unique visuals, branding, and layouts that leave a lasting impression."
                    />
                </div>
            </div>
        </div>
    )
}

export default Services
