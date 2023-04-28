import React, { useState, useRef } from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {
    const ref = useRef<string | any>('')
    const [showMenu, setShowMenu] = useState(false);
    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '')
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    })
}
function handleClick(e:any){
    if(e.target.contains(ref.current)){
      setShowMenu(false)
    }
  }
  return (
    <section className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-gray-500 flex px-4 shadow-navbarShadow justify-between items-center'>
        {/* <div> image</div> */}
        <h1 className=''> Quincy Brown </h1>
        <div className='hidden md:inline-flex items-center gap-7'>
        <ul className='flex text-[13px] gap-7'>
                    <Link 
                     onClick={handleScroll}
                     href='#home'
                     className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}
                    >Home
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#about' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>01.</span> About
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#projects' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>03.</span> Photography
                    </motion.li>
                    </Link>

                    <Link 
                    onClick={handleScroll}
                    href='#contact' 
                    className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                    cursor-pointer duration-300 nav-link'>
                    <motion.li 
                    initial={{y: -10, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 2.3, delay: 0.4}}>
                    <span className='text-textGreen'>04.</span> Contact
                    </motion.li>
                    </Link>

                </ul>
        </div>
        {/* small icon section */}
        <div onClick={()=> setShowMenu(true)} className='w-6 h-5 flex flex-col justify-between items-center md:hidden
            text-4xl text-black cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all
                ease-in-out duration-300' ></span>
                <span className='w-full h-[2px] bg-black inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all
                ease-in-out duration-300' ></span>
                <span className='w-full h-[2px] bg-black inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all
                ease-in-out duration-300' ></span>
            </div>
        {
            showMenu && (
                <div
                ref={(node) => (ref.current = node)}
                onClick={handleClick}
                className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black
                bg-opacity-50 flex flex-col items-end' >
                    <motion.div
                  initial={{x:20, opacity: 0}}
                  animate={{x:0, opacity:1}}
                  transition={{duration:0.1}}
                  className='w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#dddcdc]
                  flex flex-col items-center px-4 py-10 relative'
                  >
                    <MdOutlineClose 
                    onClick={()=> setShowMenu(false)}
                    className='text-3xl text-textGreen cursor-pointer
                    hover:text-red-500 absolute top-4 right-4'/>
                            <div className='flex flec-col items-center gap-7'>
                                <ul className='flex flex-col py-24 text-base gap-10'>
                                            <Link 
                                            onClick={handleScroll}
                                            href='#home'
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                                            cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                            initial={{y: -10, opacity: 0}}
                                            animate={{y: 0, opacity: 1}}
                                            transition={{duration: 2.3, delay: 0.4}}
                                            >Home
                                            </motion.li>
                                            </Link>

                                            <Link 
                                            onClick={handleScroll}
                                            href='#about' 
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                                            cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                            initial={{y: -10, opacity: 0}}
                                            animate={{y: 0, opacity: 1}}
                                            transition={{duration: 2.3, delay: 0.4}}>
                                            <span className='text-textGreen'>01.</span> About
                                            </motion.li>
                                            </Link>

                                            <Link 
                                            onClick={handleScroll}
                                            href='#projects' 
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                                            cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                            initial={{y: -10, opacity: 0}}
                                            animate={{y: 0, opacity: 1}}
                                            transition={{duration: 2.3, delay: 0.4}}>
                                            <span className='text-textGreen'>03.</span> Photography
                                            </motion.li>
                                            </Link>

                                            <Link 
                                            onClick={handleScroll}
                                            href='#contact' 
                                            className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen
                                            cursor-pointer duration-300 nav-link'>
                                            <motion.li 
                                            initial={{y: -10, opacity: 0}}
                                            animate={{y: 0, opacity: 1}}
                                            transition={{duration: 2.3, delay: 0.4}}>
                                            <span className='text-textGreen'>04.</span> Contact
                                            </motion.li>
                                            </Link>

                                        </ul>
                                </div>
                     </motion.div>
                </div>
            )
        }
        </section>
  )
}

export default Navbar