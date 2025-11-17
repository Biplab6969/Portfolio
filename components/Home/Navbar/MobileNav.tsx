
import { NavLinks } from '@/constant/constant'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

    const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";
    return (
        <div>
            {/* overlay */}
            <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 z-[100002] bg-black opacity-70 w-full h-screen`}></div>
            {/* navlinks */}
            <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[100050] right-0`}>
                {NavLinks.map((link) => {
                    const handleClick = () => {
                        const id = ((): string => {
                            switch (link.label) {
                                case 'Home': return 'hero';
                                case 'Services': return 'services';
                                case 'Education': return 'education';
                                case 'Projects': return 'projects';
                                case 'Skills': return 'skills';
                                case 'Contacts': return 'contacts';
                                default: return '';
                            }
                        })();

                        if (id) {
                            const el = document.getElementById(id);
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        closeNav();
                    };

                    return (
                        <button key={link.id} onClick={handleClick} className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]'>
                            {link.label}
                        </button>
                    )
                })}
                {/* cross icon */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
            </div>

        </div>
    )
}

export default MobileNav
