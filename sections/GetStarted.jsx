'use client'

import { motion } from "framer-motion"

import { StartSteps, TitleText, TypingText } from "@/components"
import { startingFeatures } from "@/constants"
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion"

const GetStarted = () => {
    return (
        <section className={`sm:p-16 xs:p-8 px-6 py-12 relative z-10`}>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
            >
                <motion.div
                    variants={planetVariants('left')}
                    className='flex justify-center items-center flex-1'
                >
                    <img 
                        src="/get-started.png" 
                        alt="started"
                        className="w-[90%] h-[90%] object-contain" 
                    />
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className="flex-[0.75] flex flex-col justify-center"
                >
                    <TypingText title='| How Metaversus Works' />
                    <TitleText title={<>Get started with just a few clicks</>} />
                    <div className="mt-8 flex flex-col max-w-[370px] gap-6">
                        {startingFeatures.map((feature, index) => (
                            <StartSteps 
                                key={feature}
                                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                                text={feature} 
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default GetStarted