"use client"

import { motion } from "framer-motion"

import { navVariants } from "@/utils/motion"
import styles from "@/styles"


const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial='hidden'
            whileInView='show'
            className='py-8 relative sm:px-16 px-6'
        >
            <div className="absolute inset-0 w-[50%] gradient-01" />
            <div className='mx-auto flex justify-between gap-8 2xl:max-w-[1280px] w-full'>
                <img 
                    src="/search.svg" 
                    alt="search" 
                    className="w-[24px] h-[24px] object-contain" 
                />
                <h2 className="uppercase font-extrabold text-[24px] leading-[30px] text-white">
                    Metaversus
                </h2>
                <img 
                    src='/menu.svg' 
                    alt="menu" 
                    className="w-[24px] h-[24px] object-contain" 
                />
            </div>
        </motion.nav>
    )
}

export default Navbar