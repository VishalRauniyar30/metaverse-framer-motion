'use client'

import { motion } from "framer-motion"

import { textContainer, textVariant2 } from "@/utils/motion"

const TypingText = ({ title, textStyles }) => {
    return (
        <motion.p
            variants={textContainer}
            className={`font-normal text-[20px] text-secondary-white ${textStyles}`}
        >
            {Array.from(title).map((letter, index) => (
                <motion.span variants={textVariant2} key={index}>
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.p>
    )
}
const TitleText = ({ title, textStyles }) => {
    return (
        <motion.h2
            variants={textVariant2}
            initial='hidden'
            whileInView='show'
            className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
        >
            {title}
        </motion.h2>
    )
}


export {
    TitleText, TypingText
}