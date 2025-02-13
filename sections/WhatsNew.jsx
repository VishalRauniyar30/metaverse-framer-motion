'use client'

import { motion } from 'framer-motion'

import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion'
import { NewFeatures, TitleText, TypingText } from '@/components'
import { newFeatures } from '@/constants'

const WhatsNew = () => {
    return (
        <section className='sm:p-16 xs:p-8 px-6 py-12 relative z-10'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
                className='2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8'
            >
                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className='flex-[0.95] flex justify-center flex-col'
                >
                    <TypingText title='| Whats New?' />
                    <TitleText title={<>What's New About Metaversus?</>} />
                    <div className='mt-12 flex flex-wrap justify-between gap-6'>
                        {newFeatures.map((feature) => (
                            <NewFeatures key={feature.title} { ...feature } />
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    variants={planetVariants('right')}
                    className='flex-1 flex justify-center items-center'
                >
                    <img src="/whats-new.png" alt="get-started" className='w-[90%] h-[90%] object-contain' />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default WhatsNew