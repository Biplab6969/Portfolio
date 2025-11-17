import React, { useRef } from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs.sendForm("service_icwf1q5", "template_fd2uuqp", form.current, "4DInBU3p0-5TVZf2o").then(() => {
            if (form.current) form.current.reset();
            toast.success("Message sent sucessfully", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'dark',
            });
        },
            (error: unknown) => {
                if (error instanceof Error) console.error("Error sending message:", error.message);
                else console.error("Error sending message:", error);
                toast.error("Failed to send message, Please try Again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: 'dark',
                });
            })
    }

    return (
        <div className='pt-16 pb-16'>
            <ToastContainer />
            <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                {/* text Content */}
                <div>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>Reach Out to Me</h1>
                    <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                        I am always open to discussing projects, collaborations, or just a good chat. Feel free to reach out via any platform below.
                    </p>
                    <div className='mt-7'>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiPhone className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                9583347630
                            </p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiEnvelope className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                biplabjenaofficial@gmail.com
                            </p>
                        </div>
                        <div className='flex items-center space-x-3 mb-4'>
                            <BiMap className='w-9 h-9 text-cyan-300' />
                            <p className='text-xl font-bold text-gray-400'>
                                India
                            </p>
                        </div>
                    </div>
                    {/* social icon */}
                    <div className='flex items-center mt-8 space-x-3'>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300'>
                            <a href='https://www.linkedin.com/in/biplab-jena-7a741427b/'><FaLinkedin className='text-white w-6 h-6' /></a>

                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-gray-900 transition-all duration-300'>
                            <a href='https://x.com/BiplabJ82399517'><FaTwitter className='text-white w-6 h-6' /></a>
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-gray-900 transition-all duration-300'>
                            <a href='https://github.com/Biplab6969'><FaGithub className='text-white w-6 h-6' /></a>
                        </div>
                        <div className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer flex-col hover:bg-yellow-500 transition-all duration-300'>
                            <a href='https://leetcode.com/u/jbiplab80/'><SiLeetcode className='text-white w-6 h-6' /></a>
                        </div>
                    </div>
                </div>
                {/* form */}
                <form ref={form} onSubmit={sendEmail} data-aos="zoom-in" data-aos-anchor-placement="top-center" className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                    <input
                        type='text'
                        name='user_name'
                        placeholder='Name'
                        className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <input
                        type='email'
                        name='user_email'
                        placeholder='Email Address'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <input
                        type='text'
                        name='user_mobileNumber'
                        placeholder='Mobile Number'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'
                    />
                    <textarea
                        name='message'
                        placeholder='Your Message'
                        className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'
                    ></textarea>
                    <button className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
